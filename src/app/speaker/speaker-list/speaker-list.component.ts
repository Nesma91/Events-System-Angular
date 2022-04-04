import { SpeakerService } from './../../speaker.service';
import { Speaker } from './../../_models/speaker';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit, OnDestroy {
  spkDetails: Speaker | null = null
  spkEditId = ""

  subscription: Subscription | null = null

  speakers: Speaker[] = [];

  deleteSpk(_id: string){
    this.spkSer.deleteSpeaker(_id).subscribe(data => {console.log("Speaker Deleted")})
  }

  constructor(public spkSer: SpeakerService) { }

  ngOnInit(): void {
    this.subscription = this.spkSer.getAllSpeakers().subscribe(data => this.speakers = data)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
