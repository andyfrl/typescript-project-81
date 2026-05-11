### Hexlet tests and linter status:
[![Actions Status](https://github.com/andyfrl/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/andyfrl/typescript-project-81/actions)
[![CI](https://github.com/andyfrl/typescript-project-81/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/andyfrl/typescript-project-81/actions/workflows/ci.yml)

[![Coverage][coverage-badge]][coverage-link]

🚀 TS-Form-Generator
A lightweight TypeScript library for generating static HTML forms.

## 📋 Basic Usage
### 1. Define Template and Options
```typescript
	const template = { name: 'rob', job: 'hexlet', gender: 'm' };
	const options = { method: 'post', url: '#' };
```
### 2. Define callback for Inputs and Submit
```typescript
	const cb = (f) => {
		f.input('job', { as: 'textarea', rows: 50, cols: 50 });
		f.input('name');
		f.submit('Wow');
	};
```
### 3. Import Class and Generate Form
```typescript
	import { HexletCode } from 'hexlet/code';

	const form = HexletCode.formFor(template, options, cb);
```


<!-- References at the very bottom -->
[coverage-badge]: https://gist.githubusercontent.com/andyfrl/dacc87f8304d552a0e898e1688431a3d/raw/badge.svg
[coverage-link]: https://github.com/andyfrl/typescript-project-81/actions