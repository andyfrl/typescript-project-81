import { describe, expect, test } from "vitest";
import { Form } from "../src/classes/Form.js";

const TEMPLATE = { name: 'rob', job: 'hexlet', gender: 'm' };
const DEFAULT_URL = { url: '#' };

describe('test html snapshots with different option sets', () => {
	
	test('should create input with default options', () => {
		const TEST_CALLBACK = (f: Form) => {
			f.input('name');
			f.input('job', { as: 'textarea' });
		};
		const form = Form.formFor(TEMPLATE, DEFAULT_URL, TEST_CALLBACK);
		expect(form).toMatchSnapshot();
	});

	test('should create input with class option', () => {
		const TEST_CALLBACK = (f: Form) => {
			f.input('name', { class: 'user-input' });
  			f.input('job');
		};
		const form = Form.formFor(TEMPLATE, DEFAULT_URL, TEST_CALLBACK);

		expect(form).toMatchSnapshot();
	});

	test('should create input with overridden defaults', () => {
		const TEST_CALLBACK = (f: Form) => {
			f.input('job', { as: 'textarea', rows: 50, cols: 50 });
		};
		const form = Form.formFor(TEMPLATE, { url: '/users' }, TEST_CALLBACK);

		expect(form).toMatchSnapshot();
	});

	test('should create inputs and submit with custom caption', () => {
		const TEST_CALLBACK = (f: Form) => {
			f.input('name');
  			f.input('job');
			f.submit('Wow');
		};
		const form = Form.formFor(TEMPLATE, {method: 'post'}, TEST_CALLBACK);

		expect(form).toMatchSnapshot();
	});

});