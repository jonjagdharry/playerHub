import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-player-bio',
    templateUrl: './player-bio.component.html',
    styleUrls: ['./player-bio.component.scss']
})
export class PlayerBioComponent implements OnInit {
    @Input() playerInfo;
    headshot;
    playerBio = null;
    modalRef: BsModalRef;


    constructor(
        private modalService: BsModalService
    ) { }

    ngOnInit() {
        if(this.playerInfo != null && this.playerInfo != undefined) {
            this.playerBio = this.playerInfo;
            this.headshot = this.playerBio.profileUrl;
        }
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
      }
}
