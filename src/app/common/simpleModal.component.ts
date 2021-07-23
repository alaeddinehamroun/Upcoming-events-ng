import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";


@Component ({
    selector: 'simple-modal',
    template: `
        <div id={{elementId}} #modalcontainer class="modal fade" tabinex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="closeModal()"> 
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body{ height: 250px; overflow: scroll ;}
    `
    ]
})
export class simpleModalComponent {
    @Input() title: string = "";
    @Input() elementId: string = "";
    @Input() closeOnbodyClick: string="" ;
    @ViewChild('modalcontainer')
    containerEl!: ElementRef;
    constructor(@Inject(JQ_TOKEN) private $: any){}
    closeModal() {
        if(this.closeOnbodyClick === "true" )
            this.$(this.containerEl.nativeElement).modal('hide');
    }
}