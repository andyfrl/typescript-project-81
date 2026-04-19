interface FormTemplateParams {
	[key: string]: string | number;
}

type FormSubmissionCallback = (event: Event) => void;

export { type FormTemplateParams, type FormSubmissionCallback };