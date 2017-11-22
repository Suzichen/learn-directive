import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [
        `.ng-group {
            margin: 10px auto;
            background-color: #eee;
        }`, 
        `.card {
            padding: 2rem;
            font-size: 2rem;
            font-family: 'Helvetica', sans-serif;
            font-weight: 300;
            background: #337AB7;
            color:#FFFFFF;
            margin: 1rem;
            display: inline-block;
        }`
    ]
})
export class AppComponent {
    public color: string;
}
