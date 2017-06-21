import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugStatsComponent } from './bug-tracker/bug-stats/bugStats.component';

import { TrimTextPipe } from './bug-tracker/pipes/trimText.Pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    ClosedCountPipe,
    BugStatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
