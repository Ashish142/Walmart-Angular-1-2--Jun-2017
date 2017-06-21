import { Component } from '@angular/core';
import { add } from './Calculator';

@Component({
	selector : 'hello-world',
	template : `
		<label>Name : </label>
		<input type="text" [(ngModel)]="username"/>
		<input type="button" value="Greet" (click)="onGreetClick()"/>
		<hello-world-display [data]="message"></hello-world-display>
	`
})
export class HelloWorldComponent{
	message:string = '';

	username : string = '';

	onGreetClick(){
		this.message = `${this.username}, Have a nice day!`;
	}
}