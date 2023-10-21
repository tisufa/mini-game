import * as Phaser from 'phaser';
import { Sprite } from '../classes/Sprite';

export const createBootScene = (width: number, height: number) => {
  return class BootScene extends Phaser.Scene {
    private btn: Sprite;
    constructor() {
      super({ key: 'Boot' });
    }

    create() {
      //Object scale
      const scaleObject = {
        default: 1.2,
        scale: 1.1,
        scale2: 1,
        scale3: 0.9,
      };
      const title = new Sprite(
        this,
        width / 2,
        height - 500,
        'logo',
        'logo_game.png'
      ).setScale(scaleObject.default);
      //timer event loop setScale
      const timer = this.time.addEvent({
        delay: 150,
        callback: () => {
          if (title.scale === scaleObject.default)
            title.setScale(scaleObject.scale);
          else if (title.scale === scaleObject.scale)
            title.setScale(scaleObject.scale2);
          else if (title.scale === scaleObject.scale2)
            title.setScale(scaleObject.scale3);
          else title.setScale(scaleObject.default);
        },
        callbackScope: this,
        loop: true,
      });
      this.btn = new Sprite(
        this,
        width / 2,
        height - 150,
        'bgButtons',
        'btn_play.png'
      ).setScale(0.9);
      this.btn.on('pointerdown', () => {
        timer.remove();
        this.scene.start('Game');
      });
    }
  };
};
