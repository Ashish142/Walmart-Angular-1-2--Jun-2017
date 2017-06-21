import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	transform(data : Array<any>, attr : string, isDescending : boolean = false) : Array<any> {
		var comparer : IComparer = getComparer(attr);
		if (isDescending)
			comparer = getDescendingComparer(comparer);
		return data.sort(comparer);
	}
}

interface IComparer{
	(item1 : any, item2 : any) : number
}

function getDescendingComparer(comparer : IComparer) : IComparer{
	return function(item1, item2) : number{
		return comparer.apply(this, arguments) * -1;
	}
}

function getComparer(attrName) : IComparer {
	return function(item1, item2) : number {
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}