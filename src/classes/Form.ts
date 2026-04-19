import type { FormTemplateParams, FormSubmissionCallback } from "../types/formTypes.js";
class Form {
	private template: FormTemplateParams;
	private submitUrl: string;
	private submissionHandler: FormSubmissionCallback;

	private constructor(template: FormTemplateParams,
						urlObj: { url?: string },
						submissionHandler: FormSubmissionCallback) {
		this.template = template;
		this.submitUrl = urlObj.url ?? '#';
		this.submissionHandler = submissionHandler;
	};

	static formFor(template: FormTemplateParams,
				   urlObj: { url?: string },
				   submissionHandler: FormSubmissionCallback): HTMLFormElement {
		const formInstance = new Form(template, urlObj, submissionHandler);

		const formHtml = document.createElement('form') as HTMLFormElement;
		formHtml.action = formInstance.submitUrl;
		formHtml.method = 'post';
		return formHtml;
	}
	
}
export { Form };