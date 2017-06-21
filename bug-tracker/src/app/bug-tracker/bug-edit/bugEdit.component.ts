import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">New Bug Name :</label>
			<input type="text" ng-model="newBugName" #txtBugName>
			<input type="button" value="Add New" (click) = "addNewClick(txtBugName.value)">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	newBug : EventEmitter<string> = new EventEmitter<string>();

	addNewClick(bugName){
		this.newBug.emit(bugName);
	}
}