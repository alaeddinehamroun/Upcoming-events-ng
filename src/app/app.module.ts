import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import {
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventListResolver,
  EventRouteActivator,
  EventDetailsComponent,
  CreateEventComponent


} from './events/index'
import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { navBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    navBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
              ToastrService,
              EventRouteActivator,
              EventListResolver,
              { 
                provide: 'canDeactivateCreateEvent', 
                useValue: checkDirtyState
              }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel?')
  return true
  }