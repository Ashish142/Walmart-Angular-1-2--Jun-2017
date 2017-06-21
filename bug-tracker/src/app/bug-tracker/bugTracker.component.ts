import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugService } from './services/BugService.service';

import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.css']
})
export class BugTrackerComponent implements OnInit{
	//state
	bugs : Array<IBug> = [];

	constructor(private _bugService : BugService ){

	}
	
	ngOnInit(){
		
		this._bugService
			.getAll()
			.subscribe(data => this.bugs = data);
	}

	
	onNewBug(bugName:string){
		this._bugService
			.addNew(bugName)
			.subscribe(newBugData => this.bugs = [...this.bugs, newBugData]);
	}

	toggle(bugToToggle : IBug){
		this._bugService
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
		
	}

	removeClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}