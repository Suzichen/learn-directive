import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { UnlessDirective } from './structural-directives/unless.directive';
import { DelayDirective } from './structural-directives/delay.directive';
import { ChineseMobileValidatorDirective } from './attribute-directives/chinese-mobile-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    DelayDirective,
    ChineseMobileValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
