import { TAG_LIST, type ValidTagName } from "../constants/taglist.js";
import { type TagParams } from "../types/tagTypes.js";
class Tag {
	private parsedParamLine: string;

	constructor(private name: ValidTagName, private params: TagParams = {}, private inner = "") {
		this.parsedParamLine = this.deconstructObject(params);
	}

	deconstructObject(params: TagParams): string {
		return Object.entries(params)
			.map(([key, value]) => ` ${key}=${value}`)
			.join("");
	}
	toString() {
		const tagConfig = TAG_LIST[this.name];
		if (!tagConfig) {
			throw new Error("Tag doesn't exist!");
		}
		return ( tagConfig.isPaired ?
			`<${this.name}${this.parsedParamLine}>${this.inner}</${this.name}>` :
			`<${this.name}${this.parsedParamLine}>`
		);
	}
}
export { Tag };