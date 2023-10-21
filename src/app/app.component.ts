import { Component } from '@angular/core';
import { PopupService } from './popup';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-game';
  constructor(private _popupService: PopupService) {}
  public handleShowMenu(): void {
    this._popupService.open(
      PopupMenuComponent,
      {},
      {
        centered: true,
      }
    );
  }
}
