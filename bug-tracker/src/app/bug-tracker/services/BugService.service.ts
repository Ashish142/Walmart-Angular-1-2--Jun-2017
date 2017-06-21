import { Http } from '@angular/http';
import { BugOperations } from './BugOperations.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { IBug } from '../models/IBug';

@Injectable()
export class BugService{
	constructor(private _http : Http, private _bugOperations : BugOperations){

	}
	addNew(bugName : string) : Observable<IBug> {
		let newBug : IBug = this._bugOperations.createNew(0, bugName)
		return this._http
			.post('http://localhost:3000/bugs', newBug)
			.map(response => response.json())
	}
	getAll() : Observable<Array<IBug>>{
		return this._http
			.get('http://localhost:3000/bugs')
			.map(response => response.json())
	}
	toggle(bug : IBug) : Observable<IBug>{
		let toggledBug = this._bugOperations.toggle(bug);
		let endpoint = 'http://localhost:3000/bugs/' + toggledBug.id.toString();
		return this._http
			.put(endpoint, toggledBug)
			.map(response => response.json());
	}
}