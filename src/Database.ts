import { set, get, has, unset } from "./lodash";
import { BaseAdapter } from "./adapters/BaseAdapter";
import { FSAdapter } from "./adapters/FSAdapter";
import { LooseObject } from "./types";

export class Database {
	private adapter: BaseAdapter;
	private json: LooseObject = {};

	constructor(
		adapter: BaseAdapter = new FSAdapter({
			databaseName: "json",
			defaultDir: ".bookman",
		}),
	) {
		this.adapter = adapter;
		this.adapter.init();
	}

	private async getDefaultData() {
		const data = await this.adapter.get();
		return data;
	}

	public async set(name: string, value: unknown) {
		const data = await this.getDefaultData();

		set(data, name, value);

		this.json = data;
		await this.adapter.set(JSON.stringify(data));

		return get(data, name);
	}

	public async push(name: string, value: unknown) {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];

		if (!Array.isArray(savedData))
			throw new Error("Data to push should be an array");

		savedData.push(value);
		await this.set(name, savedData);

		return savedData;
	}

	public async pop(name: string) {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];

		if (!Array.isArray(savedData))
			throw new Error("Data to pop should be an array");

		const value = savedData.pop();
		await this.set(name, savedData);

		return value;
	}

	public async shift(name: string) {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];

		if (!Array.isArray(savedData))
			throw new Error("Data to shift should be an array");

		const value = savedData.shift();
		await this.set(name, savedData);

		return value;
	}

	public async unshift(name: string, value: unknown) {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];

		if (!Array.isArray(savedData))
			throw new Error("Data to unshift should be an array");

		savedData.unshift(value);
		await this.set(name, savedData);

		return savedData;
	}

	public async add(name: string, value: number) {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = 0;

		if (typeof savedData !== "number")
			throw new Error("Data to add should be a number");

		savedData += value;
		await this.set(name, savedData);

		return savedData;
	}

	public async subtract(name: string, value: number) {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = 0;

		if (typeof savedData !== "number")
			throw new Error("Data to subtract should be a number");

		savedData -= value;
		await this.set(name, savedData);

		return savedData;
	}

	public async delete(name: string) {
		unset(this.json, name);
		await this.adapter.set(JSON.stringify(this.json));

		return this.json;
	}

	public fetchAll = () => this.json;
	public map = this.fetchAll;
	public all = this.fetchAll;
	public getAll = this.fetchAll;

	public get = (name: string) => get(this.json, name);
	public fetch = this.get;

	public has = (name: string) => has(this.json, name);

	public async destroy() {
		const bool = await this.adapter.destroy();
		this.json = {};

		return bool;
	}
}
