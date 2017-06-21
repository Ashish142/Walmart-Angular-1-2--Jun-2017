import { Component, Input } from '@angular/core'
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	template :  `
		<section class="stats">
			<span class="closed">{{data | closedCount}}</span>
			<span> / </span>
			<span>{{data.length}}</span>
		</section>
	`,
	styles : ['.closed  { color : red; text-decoration : line-through}', '.stats  { font-size : 22pt}']
})
export class BugStatsComponent{

	@Input()
	data : Array<IBug> ;
}