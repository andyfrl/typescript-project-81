import { test, expect } from 'vitest'
import { Tag } from '../src/classes/Tag.js'

test('test various tags', () => {
  expect(new Tag('br').toString()).toBe('<br>')
  expect(new Tag('br').toString()).toBe('<br>')
  expect(new Tag('img', { src: 'path/to/image' }).toString()).toBe('<img src="path/to/image">')
  expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe('<input type="submit" value="Save">')
  expect(new Tag('label', {}, 'Email').toString()).toBe('<label>Email</label>')
  expect(new Tag('div').toString()).toBe('<div></div>')
})
