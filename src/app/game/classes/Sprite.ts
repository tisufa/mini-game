import * as Phaser from 'phaser';

//Class Sprite
export class Sprite extends Phaser.GameObjects.Sprite {
  constructor(scene: any, x: number, y: number, texture: any, frame: any) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    this.setInteractive();
  }
}
