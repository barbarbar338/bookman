import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import get from "lodash.get";
import has from "lodash.has";
import set from "lodash.set";
import unset from "lodash.unset";

export interface BookmanOptions {
	defaultDir: string;
	databaseName: string;
	pretty?: boolean;
}

export const defaults: BookmanOptions = {
	databaseName: "main",
	defaultDir: ".bookman",
	pretty: true,
};

export class Database {
	private options: BookmanOptions;
	private json: any;

	constructor(options: BookmanOptions = defaults) {
		this.options = options;

		if (!existsSync(`./${this.options.defaultDir}`)) {
			mkdirSync(`./${this.options.defaultDir}`);
		}

		if (
			!existsSync(
				`./${this.options.defaultDir}/${this.options.databaseName}.json`,
			)
		) {
			writeFileSync(
				`./${this.options.defaultDir}/${this.options.databaseName}.json`,
				"{}",
			);
		}

		this.getData();
	}

	private getData(): void {
		const content = readFileSync(
			`./${this.options.defaultDir}/${this.options.databaseName}.json`,
			"utf-8",
		);
		const json = JSON.parse(content);
		this.json = json;
	}

	private setData(json: any): void {
		const content = this.options.pretty
			? JSON.stringify(json, null, 4)
			: JSON.stringify(json);
		writeFileSync(
			`./${this.options.defaultDir}/${this.options.databaseName}.json`,
			content,
		);
		this.json = json;
	}

	private checkIfArray<T>(key: string): T[] {
		let savedData: T[];

		savedData = this.get(key) as T[];
		if (typeof savedData === "undefined") savedData = [];

		if (!Array.isArray(savedData))
			throw new Error(
				`value is not an array. key: ${key}, value: ${savedData}`,
			);

		return savedData;
	}

	private checkIfNumber(key: string): number {
		let savedData: number;

		savedData = this.get(key) as number;
		if (typeof savedData === "undefined") savedData = 0;

		if (typeof savedData != "number")
			throw new Error(
				`value is not a number. key: ${key}, value: ${savedData}`,
			);

		return savedData;
	}

	public set<T>(key: string, value: T): T {
		set(this.json, key, value);

		this.setData(this.json);

		return get(this.json, key) as T;
	}

	public push<T>(key: string, value: T): T[] {
		const savedData = this.checkIfArray<T>(key);

		savedData.push(value);
		this.set(key, savedData);

		return savedData;
	}

	public pop<T>(key: string): T | undefined {
		const savedData = this.checkIfArray<T>(key);

		const value = savedData.pop();
		this.set(key, savedData);

		return value;
	}

	public shift<T>(key: string): T | undefined {
		const savedData = this.checkIfArray<T>(key);

		const value = savedData.shift();
		this.set(key, savedData);

		return value;
	}

	public unshift<T>(key: string, value: T): T[] {
		const savedData = this.checkIfArray<T>(key);

		savedData.unshift(value);
		this.set(key, savedData);

		return savedData;
	}

	public add(key: string, value: number): number {
		let savedData = this.checkIfNumber(key);

		savedData += value;
		this.set(key, savedData);

		return savedData;
	}

	public subtract(key: string, value: number): number {
		let savedData = this.checkIfNumber(key);

		savedData -= value;
		this.set(key, savedData);

		return savedData;
	}

	public async delete(key: string) {
		unset(this.json, key);
		this.setData(this.json);

		return this.json;
	}

	public getAll = () => this.json;
	public fetchAll = this.getAll;
	public map = this.getAll;
	public all = this.getAll;

	public get = <T>(key: string): T => get(this.json, key) as T;
	public fetch = this.get;

	public has = (key: string): boolean => has(this.json, key);

	public destroy(): boolean {
		writeFileSync(
			`./${this.options.defaultDir}/${this.options.databaseName}.json`,
			"{}",
		);
		this.json = {};

		return true;
	}
}
