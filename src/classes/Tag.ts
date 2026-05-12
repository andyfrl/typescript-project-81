import { TAG_LIST } from "../constants/taglist.js";
import { type TagFieldMap, type TagFieldType } from "../types/tagTypes.js";
class Tag<T extends TagFieldType> {
	private parsedParamLine: string;
	protected children: string = "";

	constructor(private type: TagFieldType, private params?: TagFieldMap[T], private content: string = "") {
		this.parsedParamLine = params ? this.deconstructObject(params) : "";
	}

	deconstructObject(params: TagFieldMap[T]): string {
		return Object.entries(params)
			.map(([key, value]) => ` ${key}="${value}"`)
			.join("");
	}

	toString() {
		const tagConfig = TAG_LIST[this.type];

		return ( tagConfig.isPaired ?
			`<${this.type}${this.parsedParamLine}>${this.content}${this.children}</${this.type}>` :
			`<${this.type}${this.parsedParamLine}>`
		);
	}
}
export { Tag };