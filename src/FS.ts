import { writeFileSync, readFileSync, unlinkSync } from "fs";

export class FS {
	set(name: string, value: string): void {
		return writeFileSync(`./.bookman/${name}.json`, value);
	}
	get(name: string): string {
		return readFileSync(`./.bookman/${name}.json`, "utf-8");
	}
	destroy(name: string): boolean {
		unlinkSync(`./${name}`);
		return true;
	}
}
