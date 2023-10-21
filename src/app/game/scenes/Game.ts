import * as Phaser from 'phaser';

export const createGameScene = (width: number, height: number) => {
  return class GameScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'Game',
      });
    }

    create() {
      const gridSize = 5;
      const tileWidth = width / gridSize;
      const tileHeight = height / gridSize;
      const gapSize = 5; // Adjust this value to set the gap size

      // Create a group to hold the tiles and lines
      const gridGroup = this.add.group();
      const boardWidth: any = this.game.config.width;
      const boardHeight: any = this.game.config.height;

      // Create the tiles and grid lines
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          const tile = this.add.rectangle(
            x * (tileWidth + gapSize) + tileWidth / 2,
            y * (tileHeight + gapSize) + tileHeight / 2 + 100,
            tileWidth,
            tileHeight,
            0x808080
          );

          // Add a border to the tile
          tile.setStrokeStyle(2, 0xffffff);

          tile.setInteractive();
          tile.on('pointerdown', () => this.onTileClicked(tile));
          gridGroup.add(tile);
        }
      }
    }

    onTileClicked(tile: Phaser.GameObjects.Rectangle) {
      // Check if the tile is a bomb (50% chance)
      const isBomb = Math.random() < 0.5; // 50% chance of being a bomb

      // Change the color of the clicked tile based on the isBomb variable
      if (isBomb) {
        tile.setFillStyle(0xff0000); // Red for bomb
        //Add pop up modal for lose
      } else {
        tile.setFillStyle(0x00ff00); // Green for no bomb
      }
    }

    override update() {}
  };
};
