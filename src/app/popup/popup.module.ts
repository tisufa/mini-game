import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [PopupComponent],
  providers: [PopupService],
  exports: [PopupComponent],
})
export class PopupModule {}
