import { IBug } from '../models/IBug';
import { BugOperations } from './BugOperations.service';
import { Injectable } from '@angular/core';


@Injectable()
export class BugStorage{
	private _currentBugId : number = 0;
	private _storage = window.localStorage;

	constructor(private _bugOperations : BugOperations){

	}

	addNew(bugName : string) : IBug {
		let newBug = this._bugOperations.createNew(++this._currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}

	private save(bug : IBug) : void {
		this._storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	toggle(bug : IBug ) : IBug {
		let toggledBug = this._bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}

	remove (bug : IBug) : void{
		this._storage.removeItem(bug.id.toString());
	}

	getAll() : Array<IBug>{
		var result : Array<IBug> = [];
		for(let index = 0; index < this._storage.length; index++){
			let data = this._storage.getItem(this._storage.key(index));
			let bug = JSON.parse(data);
			result.push(bug);
		}
		return result;
	}

}