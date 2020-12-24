import { writeFileSync, readFileSync, unlinkSync } from "fs";

export class FS {
	set(name: string, value: string, defaultDir: string): void {
		return writeFileSync(`./${defaultDir}/${name}.json`, value);
	}
	get(name: string, defaultDir: string): string {
		return readFileSync(`./${defaultDir}/${name}.json`, "utf-8");
	}
	destroy(name: string, defaultDir: string): boolean {
		unlinkSync(`./${defaultDir}/${name}`);
		return true;
	}
}
