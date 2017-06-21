import { Component } from '@angular/core';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.template.html',
	styleUrls : ['bugTracker.css']
})
export class BugTrackerComponent{
	//state
	bugs : Array<any> = [];
	
	addNewClick(bugName:string){
		let newBug = {
			name : bugName,
			isClosed : false
		};

		this.bugs.push(newBug);
	}
}