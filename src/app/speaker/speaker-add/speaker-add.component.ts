import { SpeakerService } from './../../speaker.service';
import { Speaker } from './../../_models/speaker';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit, OnDestroy {
  //empty speaker to store the new data
  speaker: Speaker = new Speaker("", "", "", "", "", "");

  //declare variable to store the binary data of thr file that the user chose
  file: any;

  //create the function that takes the file and put it inside the file variable
  onFileChange(s: any){

    //deals with the first item file of the arrays of files because I make the user to choose just one file
    this.file = s.target.files[0];
  }

  //function that add the new student into the table of the speaker list
  add(){
    this.spkSer.addNewSpeaker(this.speaker, this.file).subscribe(data =>{
      console.log(data);
      this.router.navigate(["/speaker"])
    })
  }

  Subscription: Subscription | null = null

  constructor(public spkSer: SpeakerService, public router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.Subscription?.unsubscribe()
  }
}
