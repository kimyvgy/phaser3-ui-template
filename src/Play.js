import Phaser from "phaser";

import Button from "./UI/Button";

class Play extends Phaser.Scene {
  constructor() {
    super({
      key: "Play"
    });
  }

  create() {
    this.createUI();

    this.cameras.main.fadeIn(250);
  }

  update(time, delta) {}

  pausePlay() {
    this.scene.launch("Pause");
    this.scene.pause();
  }

  createUI() {
    var pauseButton = new Button(20, 20, 2, this.pausePlay, this)
      //.setScale(2)
      .setOrigin(0, 0);

    pauseButton.y = -pauseButton.height - 20;
    this.tweens.add({
      targets: pauseButton,
      y: 20,
      duration: 500,
      ease: "Back"
    });
  }
}

export default Play;
