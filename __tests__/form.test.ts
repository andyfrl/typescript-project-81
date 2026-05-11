import { describe, expect, test, vi } from "vitest";
import { Form } from "../src/classes/Form.js";

const TEMPLATE = { name: 'rob', job: 'hexlet', gender: 'm' };

describe('test form creation', () => {
	test('should create default form with default action', () => {
		const newForm = Form.formFor(TEMPLATE, {}, vi.fn());

		expect(newForm).toBeDefined();
	});

	test('should throw an error for non-existing field', () => {
		const TEST_CALLBACK = (f: Form) => {
			f.input('age', { as: 'textarea', rows: 50, cols: 50 });
		};
		const runForm = () => {
			Form.formFor(TEMPLATE, { url: '/users' }, TEST_CALLBACK);
		};
		expect(runForm).toThrow("Field 'age' does not exist in the template.");
	});

});