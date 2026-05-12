import type { HTMLPrimitive } from '../types/formTypes.js'
import { Tag } from './Tag.js'
import { type TagFieldMap, type TagFieldType, type Partial } from '../types/tagTypes.js'
import { type FormContentCallback } from '../types/formTypes.js'

class Form extends Tag<'form'> {
  private data: Record<string, string>

  private constructor(template: Record<string, string>,
    formOptions: TagFieldMap['form']) {
    super('form', formOptions)
    this.data = template
  };

  static formFor(template: Record<string, string>,
    formOptions: TagFieldMap['form'],
    f: FormContentCallback): string {
    const { url, ...props } = formOptions
    const mergedProps = {
      ...Form.DEFAULTS.form,
      ...props,
      action: url ?? Form.DEFAULTS.form!.action,
    } as TagFieldMap['form']

    const formTemplate = new Form(template, mergedProps)

    f(formTemplate)

    return formTemplate.toString()
  }

  private static readonly DEFAULTS: Partial<TagFieldMap> = {
    form: { method: 'post', action: '#' },
    input: { name: '', type: 'text', value: '' },
    textarea: { cols: 20, rows: 40, name: '' },
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  input(name: string): void
  input<T extends TagFieldType>(name: string,
    options: { as?: T, label?: string, labelHtml?: object } & TagFieldMap[T]): void
  input<T extends TagFieldType>(name: string,
    options?: { as?: T, label?: string, labelHtml?: object } & TagFieldMap[T]): void {
    const { label, labelHtml, as, ...props } = options ?? {}
    const tagName = (as ?? 'input') as T

    if (this.data[name] === undefined) {
      throw new Error(`Field '${name}' does not exist in the template.`)
    }

    const text = label ?? this.capitalize(name)
    const labelAttrs = { for: name, ...labelHtml }

    const labelTag = new Tag('label', labelAttrs, text)

    const mergedProps = {
      ...Form.DEFAULTS[tagName],
      ...props } as Record<string, HTMLPrimitive>

    if (mergedProps.value !== undefined) mergedProps.value = this.data[name]
    if (mergedProps.name !== undefined) mergedProps.name = name

    this.children = this.children.concat(labelTag.toString())
    this.children = this.children.concat(new Tag(tagName, mergedProps, this.data[name]).toString())
  }

  submit(caption: string): void {
    const buttonProps = {
      type: 'submit',
      value: caption,
    }
    this.children = this.children.concat(new Tag('input', buttonProps).toString())
  }
}
export { Form }
