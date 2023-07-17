import Phaser from "phaser";

class Story extends Phaser.Scene {
  constructor() {
    super({
      key: "Story"
    });
  }

  create() {
    this.scene.start("Play");
  }
}

export default Story;
