import Phaser from "phaser";

class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "Boot"
    });
  }

  preload() {
    //ToDo: Load loader assets
    this.load.image("logo", "../assets/menu/logo.png");
    this.load.image("loadingBar", "../assets/menu/loadingBarD.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}

export default Boot;
