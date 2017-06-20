import { Component } from '@angular/core';

@Component({
	selector : 'hello-world',
	template : `
		<label>Name : </label>
		<input type="text" [(ngModel)]="username"/>
		<input type="button" value="Greet" (click)="onGreetClick()"/>
		<h1>{{message}}</h1>
	`
})
export class HelloWorldComponent{
	message:string = '';

	username : string = '';

	onGreetClick(){
		this.message = `${this.username}, Have a nice day!`;
	}
}