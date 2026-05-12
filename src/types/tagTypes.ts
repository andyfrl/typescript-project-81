interface TagFieldMap {
  form: { url?: string, action?: string, method?: string }
  input: { name?: string, type?: string, value?: string, placeholder?: string, class?: string }
  textarea: { name?: string, rows?: number, cols?: number, value?: string, placeholder?: string, class?: string }
  br: object
  img: { src: string }
  div: object
  label: { for?: string, label: string, labelHtml: object }
}

type TagFieldType = keyof TagFieldMap

type Partial<T> = {
  [P in keyof T]?: T[P];
}

export { type TagFieldMap, type TagFieldType, type Partial }
