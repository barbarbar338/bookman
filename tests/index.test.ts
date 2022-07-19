import { expect } from "chai";
import { Database } from "../src";

let db: Database;

describe("Create instance", () => {
	it("should create instance", (done) => {
		db = new Database();

		expect(typeof db).to.equal("object");
		expect(db instanceof Database).to.equal(true);

		done();
	});
});

describe("Database utilities", () => {
	it("set method", (done) => {
		const number_data = db.set("number_data", 123);
		const array_data = db.set("array_data", ["a", "b"]);
		const dummy_data = db.set("dummy_data", "hello");

		expect(number_data).to.equal(123);
		expect(array_data).to.include("a");
		expect(array_data).to.include("b");
		expect(dummy_data).to.equal("hello");

		done();
	});

	it("push method", (done) => {
		const array_data = db.push("array_data", "c");

		expect(array_data).to.include("a");
		expect(array_data).to.include("b");
		expect(array_data).to.include("c");

		done();
	});

	it("pop method", (done) => {
		const value = db.pop("array_data");
		const array_data = db.get("array_data");

		expect(value).to.equal("c");
		expect(array_data).to.include("a");
		expect(array_data).to.include("b");
		expect(array_data).not.to.include("c");

		done();
	});

	it("shift method", (done) => {
		const value = db.shift("array_data");
		const array_data = db.get("array_data");

		expect(value).to.equal("a");
		expect(array_data).to.include("b");
		expect(array_data).not.to.include("a");

		done();
	});

	it("unshift method", (done) => {
		const array_data = db.unshift("array_data", "a");

		expect(array_data).to.include("b");
		expect(array_data).to.include("a");

		done();
	});

	it("add method", (done) => {
		const number_data = db.add("number_data", 1);

		expect(number_data).to.equal(124);

		done();
	});

	it("subtract method", (done) => {
		const number_data = db.subtract("number_data", 4);

		expect(number_data).to.equal(120);

		done();
	});

	it("delete method", (done) => {
		const dummy_data = db.delete("dummy_data");

		expect(dummy_data).not.to.haveOwnProperty("dummy_data");

		done();
	});

	it("get method", (done) => {
		const number_data = db.get("number_data");
		const array_data = db.get("array_data");
		const dummy_data = db.get("dummy_data");

		expect(number_data).to.equal(120);
		expect(array_data).to.include("a");
		expect(array_data).to.include("b");
		expect(dummy_data).to.be.undefined;

		done();
	});

	it("has method", (done) => {
		const number_data = db.has("number_data");
		const array_data = db.has("array_data");
		const dummy_data = db.has("dummy_data");

		expect(number_data).to.be.true;
		expect(array_data).to.be.true;
		expect(dummy_data).to.be.false;

		done();
	});

	it("getAll method", (done) => {
		const data = db.getAll();

		expect(data).to.haveOwnProperty("number_data");
		expect(data).to.haveOwnProperty("array_data");

		done();
	});

	it("destroy method", (done) => {
		db.destroy();

		const data = db.getAll();

		expect(data).to.be.deep.equal({});

		done();
	});
});

describe("test deep value setting", () => {
	it("set", (done) => {
		const b = db.set("a.b", 1);
		const c = db.set("a.c", 2);

		expect(b).to.equal(1);
		expect(c).to.equal(2);

		done();
	});

	it("get", (done) => {
		const a = db.get("a");
		const b = db.get("a.b");
		const c = db.get("a.c");

		expect(a).to.deep.equal({ b: 1, c: 2 });
		expect(b).to.equal(1);
		expect(c).to.equal(2);

		done();
	});
});
