import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe } from 'ng2-translate';
import template from './home.component.html';

@Component({
    selector: 'home',
    template
})
export class HomeComponent implements OnInit {
    constructor(public translate: TranslateService) { }

    ngOnInit() { }
}