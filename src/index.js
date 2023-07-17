import "./styles.css";
import Phaser from "phaser";

import { Plugin as NineSlicePlugin } from "phaser3-nineslice";

import Boot from "./Boot";
import Preloader from "./Preloader";
import MainMenu from "./MainMenu";
import Story from "./Story";
import Play from "./Play";
import Pause from "./Pause";

const config = {
  type: Phaser.AUTO,
  scale: {
    parent: "game-container",
    zoom: 1,
    width: 640,
    height: 480,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    mode: Phaser.Scale.NONE
  },
  backgroundColor: 0xf7b812,
  //pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
      //gravity: { y: 200 }
    }
  },
  scene: [Boot, Preloader, MainMenu, Story, Play, Pause],
  plugins: {
    global: [NineSlicePlugin.DefaultCfg]
  }
};

new Phaser.Game(config);
