import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import {
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventListResolver,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  durationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver


} from './events/index'
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  collapibleWellComponent,
  simpleModalComponent,
  ModalTriggerDirective,
  

} from './common/index'
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { navBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare let toastr: Toastr
declare let jQuery: Object
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    navBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapibleWellComponent,
    durationPipe,
    simpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventService,
              { 
                provide: TOASTR_TOKEN, 
                useValue: toastr
              },
              { 
                provide: JQ_TOKEN, 
                useValue: jQuery
              },
              EventResolver,
              EventListResolver,
              AuthService,
              { 
                provide: 'canDeactivateCreateEvent', 
                useValue: checkDirtyState
              },
              VoterService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel?')
  return true
  }