import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from './../../_models/speaker';
import { SpeakerService } from './../../speaker.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit, OnChanges, OnDestroy {
 spkId = ""

 speaker: Speaker =new Speaker("", "", "", "", "", "");
 subscription: Subscription | null = null

  constructor(public spkSer: SpeakerService, public activateRoute: ActivatedRoute, public router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  save(){
     this.subscription = this.spkSer.updateSpeaker(this.speaker).subscribe(data =>{
      console.log(data);
      this.router.navigate(["/speaker"])
    });
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.spkSer.getSpeakerById(data["_id"]).subscribe(({data}) =>this.speaker = data);
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
