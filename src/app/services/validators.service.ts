import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  public isFieldOneEqualFieldTwo(field1: string, field2: string) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fiedlValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if( fiedlValue1 !== fieldValue2)
      {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;

    }

  }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched
  }

}
