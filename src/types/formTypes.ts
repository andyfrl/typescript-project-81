import { Form } from "../classes/Form.js";

type HTMLPrimitive = string | number | boolean;
type FormContentCallback = (f: Form) => void;

export { type HTMLPrimitive, type FormContentCallback };