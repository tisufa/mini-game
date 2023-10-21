import * as Phaser from 'phaser';
import { createBootScene } from './scenes/Boot';
import { createGameScene } from './scenes/Game';
import { createPreloadScene } from './scenes/Preload';

export const createMinesConfig = (): Phaser.Types.Core.GameConfig => {
  const width = 768;
  const height = 768;

  const GameScene = createGameScene(width, height);
  const PreloadScene = createPreloadScene(width, height);
  const BootScene = createBootScene(width, height);

  return {
    type: Phaser.WEBGL,
    parent: 'mini-game',
    dom: {
      createContainer: true,
    },
    transparent: true,
    width: width, //window.innerWidth * 0.9,
    height: height, //window.innerHeight * 0.9,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
    fps: {
      min: 30,
      target: 60,
    },
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      parent: 'mini-game',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: width,
      height: height,
    },
    scene: [PreloadScene, BootScene, GameScene],
  };
};
