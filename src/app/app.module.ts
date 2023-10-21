import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { PopupMenuModule } from './popup-menu/popup-menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, PopupMenuModule, GameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
