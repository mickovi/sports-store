/* 
  The ValidationStatus class represents the validation status of a single model property, 
  which will allow rules to validate the data.
*/
export class ValidationStatus {
  private invalid: boolean = false;

  constructor(public readonly value: any) {}

  get isInvalid(): boolean {
    return this.invalid;
  }

  setInvalid(newValue: boolean) {
    this.invalid = newValue || this.invalid;
  }

  messages: string[] = [];
}

/* 
  The ValidationRule type describes a rule that receives a ValidationStatus object and 
  validates the data value it defines.
*/
export type ValidationRule = (status: ValidationStatus) => void | Promise<void>;

/* 
  The ValidationRuleSet<T> type describes the set of rules that are applied to a model class, T. 
  Each property defined by the model class must have at least one validation rule.
*/
export type ValidationRuleSet<T> = {
  [key in keyof Omit<Required<T>, "id">]: ValidationRule | ValidationRule[];
};

/* 
  The ValidationResults<T> type describes the validation results for a model object, with a 
  ValidationStatus object defined for each model property.
*/
export type ValidationResults<T> = {
  [key in keyof Omit<Required<T>, "id">]: ValidationStatus;
};
