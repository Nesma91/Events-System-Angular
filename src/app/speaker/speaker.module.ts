import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerEditComponent
  ],
  exports: [
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerDetailsComponent,
    SpeakerEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SpeakerModule { }
