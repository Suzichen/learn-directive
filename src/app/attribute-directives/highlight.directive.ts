import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[testHighlight]'
})
export class HighlightDirective {

    // 获取属性值
    @Input('testHighlight')
    highlightColor: string;
    // 获取默认颜色
    @Input()
    defaultColor: string;

    constructor(
        // 声明该元素
        private el: ElementRef
    ) { 
        
    }
// 鼠标移入事件
    @HostListener('mouseenter')
    onmouseEnter() {
// 默认颜色优先级：组件设置的颜色 > 模板定义的默认颜色 > 红色
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }
// 鼠标移出事件
    @HostListener('mouseleave')
    onmouseleave() {
        this.highlight(null);
    }
// 高亮
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}
