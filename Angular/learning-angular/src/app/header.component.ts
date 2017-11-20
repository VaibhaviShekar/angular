import { Component, Input } from '@angular/core';


@Component({
    selector:'eg-header',
    template:`<h3>{{2+2}}</h3>
              <h1>{{head}} {{body}}</h1>`
})

export class HeaderComponent{
    @Input()
    head;
    body='new example';
}