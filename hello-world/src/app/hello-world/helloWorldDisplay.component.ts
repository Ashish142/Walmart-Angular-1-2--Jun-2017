import { Component, Input } from '@angular/core';

@Component({
	selector: 'hello-world-display',
	template : '<h1>{{data}}</h1>'
})
export class HelloWorldDisplayComponent  {
	
	@Input()
	data : string = '';
	
}