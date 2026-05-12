import type { HTMLPrimitive } from "../types/formTypes.js";
import { Tag } from "./Tag.js";
import { type TagFieldMap, type TagFieldType, type Partial } from "../types/tagTypes.js";
import { type FormContentCallback } from "../types/formTypes.js";

class Form extends Tag<'form'> {
	private data: Record<string, string>;

	private constructor(template: Record<string, string>,
						formOptions: TagFieldMap['form']) {
		super('form', formOptions);
		this.data = template;
	};

	static formFor(template: Record<string, string>,
				   formOptions: TagFieldMap['form'],
				   f: FormContentCallback): string {
		const { url, ...props } = formOptions;
		const mergedProps = {
			...Form.DEFAULTS['form'],
			...props,
			action: url ?? Form.DEFAULTS.form!.action,
		} as TagFieldMap['form'];

		const formTemplate =  new Form(template, mergedProps);
		
		f(formTemplate);

		return formTemplate.toString();
	}

	private static readonly DEFAULTS: Partial<TagFieldMap> = {
		form: { method: 'post', action: '#' },
		input: { type: 'text', value: '' },
		textarea: { cols: 20, rows: 40 }
	};
	
	input(name: string): void;
	input<T extends TagFieldType>(name: string, 
		options: { as?: T } & TagFieldMap[T]): void;
	input<T extends TagFieldType>(name: string, 
		options?: { as?: T } & TagFieldMap[T]): void {

		const { as, ...props } = options ?? ({} as { as?: T } & TagFieldMap[T]);
		const tagName = (as || 'input') as T;
		
		if (this.data[name] === undefined) {
			throw new Error(`Field '${name}' does not exist in the template.`);
		}

		const labelTag = new Tag('label', { for: name }, 
			name.charAt(0).toUpperCase() + name.slice(1));

		const mergedProps = {
			name: name,
			...Form.DEFAULTS[tagName],
			...props } as Record<string, HTMLPrimitive>;
		
		if (mergedProps['value'] !== undefined) mergedProps['value'] = this.data[name];
		
		this.children = this.children.concat(labelTag.toString());
		this.children = this.children.concat(new Tag(tagName, mergedProps, this.data[name]).toString());
	}

	submit(caption: string): void {
		const buttonProps = {
			type: 'submit',
			value: caption
		};
		this.children = this.children.concat(new Tag('input', buttonProps).toString());
	}
	
}
export { Form };