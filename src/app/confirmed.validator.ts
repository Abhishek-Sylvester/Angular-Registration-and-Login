import { AbstractControl, FormControl, FormGroup, isFormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
    export function passwordMatch(password:string, confirmpassword:string):ValidatorFn
    {
        return function(form: AbstractControl)
        {
            const passwordValue = form.get(password)?.value;
            const confirmPasswordValue = form.get(confirmpassword)?.value;
           
            
            

            console.log(passwordValue)
            console.log(confirmPasswordValue);

            if(passwordValue != confirmPasswordValue)
            {
                return { passwordMismatchError: true};
            }

            else
            {
                return null;
            }

           
            
        }

    }

    export class CustomValidators {
        static MatchValidator(source: string, target: string): ValidatorFn {
          return function (control: AbstractControl): ValidationErrors | null  {
            const sourceCtrl = control.get(source)?.value;
            const targetCtrl = control.get(target)?.value;
            console.log("Password: "+sourceCtrl);
            console.log("Confirm password: "+targetCtrl);

            if(sourceCtrl == targetCtrl)
            {
                console.log("passwords match");
                return null;

            }
            else
            {
                console.log("passwords do not match");
                alert("passwords do not match");
                return {mismatch:true};
                
            }
      
            
          };
        }

        static noSpaceAllowed(control:FormControl)
         {
             if(control.value != null && control.value.indexOf('') != -1 )
            {
                return{noSpaceAllowed:true}
            }

            return null;
         }
      }
