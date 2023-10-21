import * as Phaser from 'phaser';
// import {Audio} from '../classes/Audio';

const logopng = '/assets/game/plinko/img/logo/logo.png';
const logojson = '/assets/game/plinko/img/logo/logo.json';
const aboutpng = '/assets/game/plinko/img/about/about.png';
const aboutjson = '/assets/game/plinko/img/about/about.json';
// import bgpng from '/assets/game/plinko/img/bg/bg.png';
const bgjson = '/assets/game/plinko/img/bg/bg3.json';
const bgPreloadpng = '/assets/game/plinko/img/bg/bgmenu.png';
const bgPreloadjson = '/assets/game/plinko/img/bg/bgmenu.json';
const bgButtonspng = '/assets/game/plinko/img/buttons/button.png';
const bgButtonsjson = '/assets/game/plinko/img/buttons/button.json';
const symbolspng = '/assets/game/plinko/img/symbols/symbols.png';
const symbolsjson = '/assets/game/plinko/img/symbols/symbols.json';
const symbols_blurpng = '/assets/game/plinko/img/symbols/symbols_blur.png';
const symbols_blurjson = '/assets/game/plinko/img/symbols/symbols_blur.json';
const linepng = '/assets/game/plinko/img/lines/line.png';
const linejson = '/assets/game/plinko/img/lines/line.json';
const soundpng = '/assets/game/plinko/img/sound/sound.png';
const soundjson = '/assets/game/plinko/img/sound/sound.json';
const autoSpinpng = '/assets/game/plinko/img/autoSpin/auto.png';
const autoSpinjson = '/assets/game/plinko/img/autoSpin/auto.json';

export const createPreloadScene = (width: number, height: number) => {
  return class PreloadScene extends Phaser.Scene {
    public progressBar: any;
    public progressBox: any;
    public loadingText: any;

    constructor() {
      super({ key: 'Preload' });
    }

    preload() {
      //load image
      // this.load.path = 'assets/';
      this.load.atlas('logo', logopng, logojson);
      this.load.atlas('about', aboutpng, aboutjson);
      // this.load.atlas('background', backgrounds, bgjson);
      this.load.atlas('bgPreload', bgPreloadpng, bgPreloadjson);
      this.load.atlas('bgButtons', bgButtonspng, bgButtonsjson);
      this.load.atlas('symbols', symbolspng, symbolsjson);
      this.load.atlas('symbols_blur', symbols_blurpng, symbols_blurjson);
      this.load.atlas('line', linepng, linejson);
      this.load.atlas('sound', soundpng, soundjson);
      this.load.atlas('autoSpin', autoSpinpng, autoSpinjson);

      //load audio
      // this.load.audio('backgroundDefault', backgroundDefaultmp3);
      // this.load.audio('reels', reelsmp3);
      // this.load.audio('reelStop', reelStopmp3);
      // this.load.audio('win', winmp3);
      // this.load.audio('button', buttonmp3);
      // this.load.audio('lose', losemp3);
      // this.load.audio('musicDefault', musicDefaultmp3);

      this.progressBar = this.add.graphics();
      this.progressBox = this.add.graphics();
      this.progressBox.fillStyle(0x222222, 0.8);
      // console.log("totsu", Config.width);
      this.progressBox.fillRect(
        (width as number) / 2 - 460,
        (height as number) / 2 - 90,
        900,
        50
      );
      //load text
      this.loadingText = this.make.text({
        x: (width as number) / 2,
        y: (height as number) / 2 - 5,
        text: '0%',
        style: {
          font: '30px PT Serif',
          color: '#ffffff',
        },
      });
      this.loadingText.setOrigin(0.5, 0.5);
      this.load.on('progress', (value: any) => {
        this.progressBar.clear();
        this.progressBar.fillStyle(0xff00ff, 1);
        this.progressBar.fillRect(
          width / 2 - 450,
          height / 2 - 80,
          880 * value,
          30
        );
        this.loadingText.setText(parseInt(value) * 100 + '%');
      });
      this.load.on('complete', this.onComplete, this);
      for (let i = 0; i < 100; i++) {
        // this.load.atlas('background' + i, bgpng, bgjson);
      }
    }

    create() {
      this.scene.start('Game');
    }

    onComplete() {
      // this.progressBar.destroy();
      // this.progressBox.destroy();
      // this.loadingText.destroy();
    }
  };
};
