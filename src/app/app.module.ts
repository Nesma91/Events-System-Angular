import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { StudentModule } from './student/student.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { SpeakerModule } from './speaker/speaker.module';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import { SpeakerAddComponent } from './speaker/speaker-add/speaker-add.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
//import { authInterceptorProviders } from './_helpers/auth.interceptor';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "student", component: StudentListComponent, children: [
    {path: "details/:_id", component: StudentDetailsComponent}
  ]},
  {path: "speaker", component: SpeakerListComponent, children: [
    {path: "details/:_id", component: SpeakerDetailsComponent}
  ]},
  {path: "student/add", component: StudentAddComponent},
  {path: "speaker/add", component: SpeakerAddComponent},
  {path: "student/edit/:_id", component: StudentEditComponent},
  {path: "speaker/edit/:_id", component: SpeakerEditComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "**", component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StudentModule,
    SpeakerModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    ReactiveFormsModule
  ],
providers: [{provide: "baseUrl", useValue: "http://localhost:8080/"}/*, authInterceptorProviders*/],
  bootstrap: [AppComponent]
})


export class AppModule { }
