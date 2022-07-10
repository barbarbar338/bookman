import { BaseAdapter } from "./BaseAdapter";
import { BookmanOptions, LooseObject, IMongoModel } from "../types";
import { model, Model, Schema, connect } from "mongoose";
import { Database } from "../Database";

const MongoSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	value: {
		type: String,
		required: true,
	},
});

export class MongoDBAdapter extends BaseAdapter {
	private model: Model<IMongoModel>;

	constructor(opts: BookmanOptions) {
		super(opts);

		this.model = model<IMongoModel>(this.opts.defaultDir, MongoSchema);
	}

	public async set(value: string): Promise<LooseObject> {
		await this.model.updateOne(
			{ key: this.opts.databaseName },
			{ value },
			{ upsert: true },
		);

		const data = JSON.parse(value);
		return data;
	}
	public async get(): Promise<LooseObject> {
		let doc = (await this.model.findOne({
			key: this.opts.databaseName,
		})) as any;
		if (!doc) doc = { value: "{}" } as any;

		const data = JSON.parse(doc.value);
		return data;
	}
	public async destroy(): Promise<boolean> {
		await this.model.deleteMany({ key: this.opts.databaseName });

		return true;
	}
	public async init(db: Database): Promise<LooseObject> {
		connect(this.opts.mongodbURL as string, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const data = await this.get();
		db.json = data;

		return data;
	}
}
