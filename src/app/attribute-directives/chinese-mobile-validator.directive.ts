import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[mobile]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ChineseMobileValidatorDirective,
            multi: true
        }
    ]
})
export class ChineseMobileValidatorDirective implements Validator {
    @Input() ChineseMobileValidator: string;
    
    constructor() { }

    validate(control: AbstractControl): { [error: string]: any } {
        let val = control.value;// 获取输入框的值    
        let flag=/^1(3|4|5|7|8)\d{9}$/.test(val);
        console.log(flag);
        if(flag){
            // 清空错误信息
            control.setErrors(null);
            return null
        }else{
            // 设置错误信息
            control.setErrors({mobileValidator:false});
            return {mobileValidator:false};
        }
    }
}
