import { createNodeRedisClient, WrappedNodeRedisClient } from "handy-redis";
import { BaseAdapter } from "./BaseAdapter";
import { BookmanOptions, LooseObject } from "../types";
import type { ClientOpts } from "redis";

export class RedisAdapter extends BaseAdapter {
	public client: WrappedNodeRedisClient;

	constructor(options: BookmanOptions, redisOptions?: ClientOpts) {
		super(options);

		this.client = createNodeRedisClient(redisOptions);
	}

	public async set(value: string): Promise<LooseObject> {
		await this.client.set(
			`${this.opts.defaultDir}/${this.opts.databaseName}`,
			value,
		);

		const data = JSON.parse(value);
		return data;
	}
	public async get(): Promise<LooseObject> {
		const res = await this.client.get(
			`${this.opts.defaultDir}/${this.opts.databaseName}`,
		);

		const data = JSON.parse(res || "{}");
		return data;
	}
	public async destroy(): Promise<boolean> {
		await this.client.del(
			`${this.opts.defaultDir}/${this.opts.databaseName}`,
		);

		return true;
	}
	public init() {}
}
