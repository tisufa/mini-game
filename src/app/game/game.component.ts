import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { createMinesConfig } from './game.config';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const config = createMinesConfig();
    new Phaser.Game(config);
  }
}
