import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[testDelay]'
})
export class DelayDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) { }

    @Input()
    set testDelay(time: number) {
        setTimeout(() => {
            // 延时创建元素
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }, time);
    }

}
