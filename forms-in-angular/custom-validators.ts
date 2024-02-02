import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import moment from "moment";

export function dob(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        console.log(control);
        let currentDateInMs = (new Date(moment().format("L"))).getTime();
        let inputDateInMs = (new Date(moment(control.value).format("L"))).getTime();
        return inputDateInMs >= currentDateInMs? { dob:{ value: control.value } } : null;
    }
};