import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";


 @Component({
    templateUrl: './events-list.component.html'
 })
export class EventsListComponent implements OnInit{
    events: IEvent[] | undefined;
    constructor(private route:ActivatedRoute ){
    }
    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }
}
