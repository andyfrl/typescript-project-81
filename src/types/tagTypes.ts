interface TagFieldMap {
	form: { url?: string, action?: string; method?: string }
	input: { type?: string; value?: string; placeholder?: string; class?: string };
	textarea: { rows?: number; cols?: number; value?: string; placeholder?: string; class?: string };
	br: object;
	img: { src: string };
	div: object;
	label: { for?: string };
}

type TagFieldType = keyof TagFieldMap;

type Partial<T> = {
	[P in keyof T]?: T[P];
}

export { type TagFieldMap, type TagFieldType, type Partial };