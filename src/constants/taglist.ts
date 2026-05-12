export const TAG_LIST = {
  input: { isPaired: false, hasParams: true },
  form: { isPaired: true, hasParams: true },
  textarea: { isPaired: true, hasParams: true },
  label: { isPaired: true, hasParams: true },
  br: { isPaired: false, hasParams: false },
  div: { isPaired: true, hasParams: true },
  img: { isPaired: false, hasParams: true },
} as const

export type ValidTagName = keyof typeof TAG_LIST
