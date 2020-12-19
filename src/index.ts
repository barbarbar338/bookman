import { set, get, has, unset } from "lodash";
import { FS } from "./FS";
import { existsSync, mkdirSync, writeFileSync } from "fs";

export const adapters = {
	FS,
};

export class Database {
	private name: string;
	private adapter: FS;

	constructor(name: string, adapter: FS = new FS()) {
		this.name = name;
		this.adapter = adapter;

		console.log(this.adapter instanceof FS);

		if (this.adapter instanceof FS && !existsSync("./.bookman")) {
			mkdirSync("./.bookman");
		}

		if (this.adapter instanceof FS && !existsSync(`./.bookman/${name}.json`)) {
			writeFileSync(`./.bookman/${name}.json`, "{}");
		}
			
	}

	private getDefaultData = (): { [prop: string]: unknown } =>
		this.adapter.get(this.name)
			? JSON.parse(this.adapter.get(this.name))
			: {};

	public set(name: string, value: unknown): unknown {
		const data = this.getDefaultData();
		set(data, name, value);
		this.adapter.set(this.name, JSON.stringify(data));
		return get(data, name);
	}

	public get(name: string): unknown {
		const data = this.getDefaultData();
		return get(data, name);
	}
	public fetch = (name: string): unknown => this.get(name);

	public has(name: string): boolean {
		const data = this.getDefaultData();
		return has(data, name);
	}

	public push(name: string, value: unknown): unknown {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to push should be an array");
		savedData.push(value);
		return this.set(name, savedData);
	}

	public pop(name: string): unknown[] {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to pop should be an array");
		const value = savedData.pop();
		this.set(name, savedData);
		return value;
	}

	public shift(name: string): unknown[] {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to shift should be an array");
		const value = savedData.shift();
		this.set(name, savedData);
		return value;
	}

	public unshift(name: string, value: unknown): unknown[] {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = [];
		if (!Array.isArray(savedData))
			throw new Error("Data to unshift should be an array");
		savedData.unshift(value);
		this.set(name, savedData);
		return savedData;
	}

	public add(name: string, value: number): number {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = 0;
		if (typeof savedData !== "number")
			throw new Error("Data to add should be a number");
		savedData += value;
		this.set(name, savedData);
		return savedData;
	}

	public subtract(name: string, value: number): number {
		let savedData = this.get(name);
		if (typeof savedData === "undefined") savedData = 0;
		if (typeof savedData !== "number")
			throw new Error("Data to subtract should be a number");
		savedData -= value;
		this.set(name, savedData);
		return savedData;
	}

	public delete(name: string): unknown {
		const data = this.getDefaultData();
		unset(data, name);
		this.adapter.set(this.name, JSON.stringify(data));
		return data;
	}

	public fetchAll = (): { [prop: string]: unknown } => this.getDefaultData();
	public map = this.fetchAll;
	public all = this.fetchAll;
	public getAll = this.fetchAll;

	public destroy = (): boolean => this.adapter.destroy(this.name);
}
