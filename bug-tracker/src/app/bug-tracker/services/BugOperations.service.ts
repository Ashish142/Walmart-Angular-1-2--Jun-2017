import { IBug } from '../models/IBug';

export class BugOperations{
	createNew(id, bugName) : IBug{
		return {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		}
	}

	toggle(bug){
		return {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed,
			createdAt : bug.createdAt
		};
	}
}