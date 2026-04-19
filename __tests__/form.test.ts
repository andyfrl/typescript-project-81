import { describe, expect, test, vi } from "vitest";
import { Form } from "../src/classes/Form.js";

const TEMPLATE = { name: 'rob', job: 'hexlet', gender: 'm' };
const DEFAULT_URL = { url: '#' };
const TEST_URL = { url: '/users' };

describe('test form creation', () => {
	test('should create default form with default action', () => {
		const newForm = Form.formFor(TEMPLATE, {}, vi.fn());
		const formHtml = newForm as HTMLFormElement;

		expect(formHtml).toBeDefined();
		expect(formHtml.getAttribute('action')).toBe(DEFAULT_URL.url);
		expect(formHtml.method).toBe('post');
	});

	test('should parse custom action URL correctly', () => {
		const newForm = Form.formFor(TEMPLATE, TEST_URL, vi.fn());
		const formHtml = newForm as HTMLFormElement;

		expect(formHtml.getAttribute('action')).toBe(TEST_URL.url);
	});

	test('should call submission handler on submit', () => {
		const newForm = Form.formFor(TEMPLATE, TEST_URL, vi.fn());
		const formHtml = newForm as HTMLFormElement;
		
		const mockSubmitHandler = vi.fn(); // on submit
		formHtml.onsubmit = mockSubmitHandler;

		formHtml.dispatchEvent(new Event('submit'));
		expect(mockSubmitHandler).toHaveBeenCalled();
	});
});