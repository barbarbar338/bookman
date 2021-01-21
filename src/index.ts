import { set, get, has, unset } from "lodash";
import { BaseAdapter } from "./adapters/BaseAdapter";
import { FS } from "./adapters/FS";
import { MongoDB } from "./adapters/MongoDB";
import { LooseObject } from "./types";

export const adapters = { FS, MongoDB };

export class Database {
	private adapter: BaseAdapter;

	constructor(
		adapter: BaseAdapter = new FS({
			databaseName: "json",
			defaultDir: ".bookman"
		})
	) {
		this.adapter = adapter;
		this.adapter.init();
	}

	private async getDefaultData(): Promise<LooseObject> {
		const data = await this.adapter.get();
		return data;
	}

	public async set(name: string, value: unknown): Promise<unknown> {
		const data = await this.getDefaultData();
		set(data, name, value);
		this.adapter.set(JSON.stringify(data));
		return get(data, name);
	}

	public async get(name: string): Promise<unknown> {
		const data = await this.getDefaultData();
		return get(data, name);
	}

	public fetch = (name: string): Promise<unknown> => this.get(name);

	public async has(name: string): Promise<boolean> {
		const data = await this.getDefaultData();
		return has(data, name);
	}

	public async push(name: string, value: unknown): Promise<unknown[]> {
		let savedData = await this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to push should be an array");
		savedData.push(value);
		await this.set(name, savedData);
		return savedData;
	}

	public async pop(name: string): Promise<unknown[]> {
		let savedData = await this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to pop should be an array");
		const value = savedData.pop();
		await this.set(name, savedData);
		return value;
	}

	public async shift(name: string): Promise<unknown[]> {
		let savedData = await this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to shift should be an array");
		const value = savedData.shift();
		await this.set(name, savedData);
		return value;
	}

	public async unshift(name: string, value: unknown): Promise<unknown[]> {
		let savedData = await this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to unshift should be an array");
		savedData.unshift(value);
		await this.set(name, savedData);
		return savedData;
	}

	public async add(name: string, value: number): Promise<number> {
		let savedData = await this.get(name);
		if (typeof savedData === "undefined") savedData = 0;
		if (typeof savedData !== "number")
			throw new Error("Data to add should be a number");
		savedData += value;
		await this.set(name, savedData);
		return savedData;
	}

	public async subtract(name: string, value: number): Promise<number> {
		let savedData = await this.get(name);
		if (typeof savedData === "undefined") savedData = 0;
		if (typeof savedData !== "number")
			throw new Error("Data to subtract should be a number");
		savedData -= value;
		await this.set(name, savedData);
		return savedData;
	}

	public async delete(name: string): Promise<unknown> {
		const data = await this.getDefaultData();
		unset(data, name);
		this.adapter.set(JSON.stringify(data));
		return data;
	}

	public fetchAll = (): Promise<LooseObject> => this.getDefaultData();
	public map = this.fetchAll;
	public all = this.fetchAll;
	public getAll = this.fetchAll;

	public async destroy(): Promise<boolean> {
		const bool = await this.adapter.destroy();
		return bool;
	}
}
