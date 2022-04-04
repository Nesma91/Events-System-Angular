import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  //the mutual used url
  //baseUrl: string = "http://localhost:8080/speakers/"

  //get all speakers
  getAllSpeakers(){
    return this.http.get<Speaker[]>(this.baseURL)
  }
  //add new speaker
  addNewSpeaker(speaker: Speaker, file: File){
    //create formData object to set in the header property of enctype (multipart/formData) to accept a binary data of a file like images
    let formDataObj : FormData = new FormData();
    formDataObj.append("_id", speaker._id);
    formDataObj.append("fullname", speaker.fullname);
    formDataObj.append("email", speaker.email);
    formDataObj.append("password", speaker.password);
    formDataObj.append("address", speaker.address);
    formDataObj.append("image", file, file.name);

    //send these data to the backend with this file image in the body and return the observable that is coming from post to the component that will use the function of addNewSpeaker
    return this.http.post<Speaker>(this.baseURL, formDataObj);
  }
  //get one speaker
  getSpeakerById(_id: string){
    //console.log(_id)
    return this.http.get<{data: Speaker}>(this.baseURL+_id);
  }

  //update a speaker
  updateSpeaker(speaker: Speaker){
    //console.log(speaker)
    return this.http.put<Speaker>(this.baseURL+speaker._id, speaker);
  }

  //delete one speaker
  deleteSpeaker(_id: string){
    return this.http.delete<Speaker>(this.baseURL, {body: {_id}});
  }

  constructor(public http: HttpClient, @Inject("baseUrl") public baseURL: string) {
    this.baseURL += "speakers/"
  }
}
