import { Speaker } from './../../_models/speaker';
import { SpeakerService } from './../../speaker.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  speaker: Speaker | null = null

  constructor(public spkSer: SpeakerService, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
     // console.log( this.activeRoute.params)
      //console.log(data)
      this.spkSer.getSpeakerById(data["_id"]).subscribe(({data}) => this.speaker = data)
    })
  }

}
