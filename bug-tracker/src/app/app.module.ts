import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugStatsComponent } from './bug-tracker/bug-stats/bugStats.component';
import { BugEditComponent } from './bug-tracker/bug-edit/bugEdit.component';


import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

import { BugOperations } from './bug-tracker/services/BugOperations.service';
import { BugStorage } from './bug-tracker/services/BugStorage.service';
import { BugService } from './bug-tracker/services/BugService.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule
  ],
  providers: [
    BugOperations,
    BugStorage,
    BugService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
