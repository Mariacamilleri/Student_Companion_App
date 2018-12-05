import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentCalendarPage } from './assignment-calendar';

@NgModule({
  declarations: [
    AssignmentCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentCalendarPage),
  ],
})
export class AssignmentCalendarPageModule {}
