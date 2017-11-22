import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { UnlessDirective } from './structural-directives/unless.directive';
import { DelayDirective } from './structural-directives/delay.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
