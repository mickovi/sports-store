import {
  ValidationResults,
  ValidationRule,
  ValidationRuleSet,
  ValidationStatus,
} from "./validation_types";

export class Validator<T> {
  constructor(
    public rules: ValidationRuleSet<T>,
    public breakOnInvalid = true
  ) {}

  /* 
    The validate method accepts a value to validate, applies the rules, and builds
    a ValidationResult<T> object that describes the outcome.
  */
  async validate(data: any): Promise<ValidationResults<T>> {
    const vdata = Object.entries(this.rules).map(async ([key, rules]) => {
      const status = new ValidationStatus(data?.[key] ?? "");
      const rs = Array.isArray(rules) ? rules : [rules];
      for (const r of rs) {
        if (!status.isInvalid || !this.breakOnInvalid) {
          await r(status);
        }
      }
      return [key, status];
    });
    const done = await Promise.all(vdata);
    return Object.fromEntries(done);
  }

  validateOriginal(data: any): ValidationResults<T> {
    const vdata = Object.entries(this.rules).map(([key, rules]) => {
      const status = new ValidationStatus(data?.[key] ?? "");
      (Array.isArray(rules) ? rules : [rules]).forEach(
        async (rule: ValidationRule) => {
          if (!status.isInvalid || !this.breakOnInvalid) {
            await rule(status);
          }
        }
      );
      return [key, status];
    });
    
    return Object.fromEntries(vdata);
  }
}

/* 
  The isValid method checks the validation results produced for a value and determines whether
   all of the properties are valid.
*/
export function isValid<T>(result: ValidationResults<T>) {
  return Object.values<ValidationStatus>(result).every(
    (r) => r.isInvalid === false
  );
}

/* 
  The getData method extracts the data from the validation results, which will be used to ensure
  that the application only uses properties for which validation rules have been defined and values
  that have passed validation.
*/
export function getData<T>(result: ValidationResults<T>): T {
  return Object.fromEntries(
    Object.entries<ValidationStatus>(result).map(([key, status]) => [
      key,
      status.value,
    ])
  ) as T;
}
