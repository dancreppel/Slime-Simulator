import Entity from './entity';
import Slime from './slime';

export default class Game {
  constructor (options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.entities = [];
    this.moveDirX = 0;
    this.moveDirY = 0;

  }

  createPlayer () {
    // center pos in the middle of the canvas object
    let pos = [this.DIM_X / 2, this.DIM_Y / 2];
    this.player = new Slime({
      pos,
      dim: [20, 20],
      src: "assets/sprites/test-slime.png"
    });

    this.entities.push(this.player);
  }

  generateMap () {

  }

  generateEntities () {
    // * For testing
    this.rock = new Entity ({
      pos: [500, 500],
      dim: [200, 150],
      src: 'assets/sprites/rock.jpg'
    });

    this.entities.push(this.rock);
  }

  render (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.entities.forEach(entity => entity.draw(ctx));
  }

  start () {
    this.setKeyBinds();
    this.generateEntities();
    this.createPlayer();
    debugger;
    // refresh 60 times per second
    setInterval(() => {
      this.render(this.ctx);
      this.moveEntities();
    }, 16.667)
  }

  setKeyBinds () {
    // handle keydownfor arrow keys
    document.addEventListener('keydown', e => {
      e.preventDefault();
      switch (e.key) {
        case 'ArrowUp':
          this.moveDirY = 10;
          break;
        case 'ArrowDown':
          this.moveDirY = -10;
          break;
        case 'ArrowLeft':
          this.moveDirX = 10;
          break;
        case 'ArrowRight':
          this.moveDirX = -10;
          break;
        default:
          break;
      }
    });

    // handle keyup for arrow keys
    document.addEventListener('keyup', e => {
      e.preventDefault();
      const horKeys = ['ArrowLeft', 'ArrowRight'];
      const verKeys = ['ArrowUp', 'ArrowDown']; 

      if (horKeys.includes(e.key)) {
        this.moveDirX = 0;
      }

      if (verKeys.includes(e.key)) {
        this.moveDirY = 0;
      }
    })
  }

  moveEntities () {
    // * testing
    this.entities.forEach(entity => {
      entity.move(this.moveDirX, this.moveDirY);
    })
  }
}