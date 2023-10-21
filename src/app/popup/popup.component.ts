import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() header: string;
  @Input() isShowCloseButton: boolean;

  @ContentChild('footer') footerTemplate: TemplateRef<any>;

  @Output() onClose: EventEmitter<void>;
  @Output() onChange: EventEmitter<boolean>;
  constructor(public ngbActiveModal: NgbActiveModal) {
    this.onClose = new EventEmitter();
    this.onChange = new EventEmitter();
    this.isShowCloseButton = true;
  }
}
