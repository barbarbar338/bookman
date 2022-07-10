import {
	writeFileSync,
	readFileSync,
	unlinkSync,
	existsSync,
	mkdirSync,
} from "fs";
import { BaseAdapter } from "./BaseAdapter";
import { LooseObject } from "../types";
import { Database } from "../Database";

export class FSAdapter extends BaseAdapter {
	public set(value: string): LooseObject {
		writeFileSync(
			`./${this.opts.defaultDir}/${this.opts.databaseName}.json`,
			value,
		);

		const data = JSON.parse(value);
		return data;
	}

	public get(): LooseObject {
		const file = readFileSync(
			`./${this.opts.defaultDir}/${this.opts.databaseName}.json`,
			"utf-8",
		);

		const data = JSON.parse(file);
		return data;
	}

	public destroy(): boolean {
		unlinkSync(`./${this.opts.defaultDir}/${this.opts.databaseName}`);

		return true;
	}

	public init(db: Database): LooseObject {
		if (!existsSync(`./${this.opts.defaultDir}`)) {
			mkdirSync(`./${this.opts.defaultDir}`);
		}

		if (
			!existsSync(
				`./${this.opts.defaultDir}/${this.opts.databaseName}.json`,
			)
		) {
			writeFileSync(
				`./${this.opts.defaultDir}/${this.opts.databaseName}.json`,
				"{}",
			);
		}

		const data = this.get();
		db.json = data;

		return data;
	}
}
