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

		this.bugs = [...this.bugs, newBug];
	}

	toggle(bugToToggle : IBug){
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? {
			name : bug.name,
			isClosed : !bug.isClosed
		} : bug);
	}

	removeClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}