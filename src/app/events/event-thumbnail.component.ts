import { Component,Input, Output,EventEmitter } from "@angular/core";
import { IEvent } from "./shared";


@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail {min-height: 210px; }
        .pad-left {margin-left: 10px; }
        .well div {color: #bbb; }
        `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent | any;
    getStartTimeStyle(): any{
        if(this.event && this.event.time === '8:00 am')
            return {color: '#003300', 'font-weight': 'bold'};
        return {}
    }
}

