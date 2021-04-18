import { Document } from "mongoose";

export interface BookmanOptions {
	defaultDir: string;
	databaseName: string;
	mongodbURL?: string;
}

export interface LooseObject {
	[prop: string]: unknown;
}

export interface IMongoModel extends Document {
	key: string;
	value: string;
}
