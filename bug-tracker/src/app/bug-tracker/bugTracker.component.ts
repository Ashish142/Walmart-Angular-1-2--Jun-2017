import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorage } from './services/BugStorage.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.css']
})
export class BugTrackerComponent implements OnInit{
	//state
	bugs : Array<IBug> = [];

	constructor(private _bugStorage : BugStorage){

	}
	
	ngOnInit(){
		this.bugs = this._bugStorage.getAll();
	}

	
	onNewBug(bugName:string){
		let newBug : IBug = this._bugStorage.addNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	toggle(bugToToggle : IBug){
		let toggledBug = this._bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	removeClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}