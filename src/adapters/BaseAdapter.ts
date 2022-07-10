import { Database } from "../Database";
import { BookmanOptions, LooseObject } from "../types";

export abstract class BaseAdapter {
	public opts: BookmanOptions;

	constructor(opts: BookmanOptions) {
		this.opts = opts;
	}

	public abstract set(value: unknown): Promise<LooseObject> | LooseObject;

	public abstract get(): Promise<LooseObject> | LooseObject;

	public abstract destroy(): Promise<boolean> | boolean;

	public abstract init(db: Database): Promise<LooseObject> | LooseObject;
}
