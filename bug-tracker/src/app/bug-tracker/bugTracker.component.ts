import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.css']
})
export class BugTrackerComponent{
	//state
	bugs : Array<IBug> = [];
	
	addNewClick(bugName:string){
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};

		this.bugs.push(newBug);
	}

	toggle(bug : IBug){
		bug.isClosed = !bug.isClosed
	}

	removeClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}