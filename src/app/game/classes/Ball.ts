export class Ball {
  public ball: any;
  constructor(private scene: any, x: number, y: number, radius: number) {
    this.ball = scene.matter.add.image(x, y, 'ball');
    this.ball.setCircle(radius);
    this.ball.setFriction(0.005);
    this.ball.setBounce(0.6);
    this.ball.setVelocityX(1);
    this.ball.setAngularVelocity(0.15);
    scene.events.on('update', this.update, this);
  }

  update() {
    if (this.ball.y > 600) {
      this.ball.setPosition(50, 0);
      this.ball.setVelocity(0, 0);
    }
  }
}
