import { Directive } from "@angular/core";
import { FormGroup, Validator, NG_VALIDATORS } from "@angular/forms";


@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {
    validate(FormGroup: FormGroup) {
        let addressControl = FormGroup.controls['address'];
        let cityControl = FormGroup.controls['city'];
        let countryControl = FormGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>FormGroup.root).controls['onlineUrl'];
        

        if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) ||(onlineUrlControl && onlineUrlControl.value))
            return null;
        else {
            return {validateLocation: false}
        }
        
    }
}