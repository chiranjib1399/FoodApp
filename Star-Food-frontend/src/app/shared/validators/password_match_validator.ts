import { AbstractControl } from "@angular/forms";

export const PasswordMatchValidator = (passwordControlName: string,confirmPasswordControlName: string)=>{
    const validator = (form: AbstractControl)=>{
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(confirmPasswordControlName);
        if(!passwordControl || !confirmPasswordControl) return;
        
        if(passwordControl.value != confirmPasswordControl.value){
           confirmPasswordControl.setErrors({notMAtch: true});
        }
        else{
            const err = confirmPasswordControl.errors;
            if(!err) return;

            delete err.notMAtch;
            confirmPasswordControl.setErrors(err);
        }
    }
    return validator;
}