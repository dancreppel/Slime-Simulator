import Entity from './entity';
import Slime from './slime';
import Map from './map';

export default class Game {
  constructor (options) {
    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.entities = [];
    this.creatures = [];
    this.moveDirX = 0;
    this.moveDirY = 0;

  }

  createPlayer () {
    // center pos in the middle of the canvas object
    let pos = [this.DIM_X / 2, this.DIM_Y / 2];
    this.player = new Slime({
      pos,
      dim: [30, 30],
      src: "assets/sprites/slime.png"
    });

    // this.entities.push(this.player);
    this.creatures.push(this.player);
  }

  generateMap () {
    this.sandBox = new Map({
      height: 5000,
      wall: "assets/sprites/rock.png",
      floor: "assets/sprites/grass.png",
      outside: "assets/sprites/dirt.jpg",
    });
  }

  generateEntities () {
    // * For testing
    // this.rock = new Entity ({
    //   pos: [500, 500],
    //   dim: [200, 150],
    //   src: 'assets/sprites/rock.jpg'
    // });
    // this.entities.push(this.rock);

    // this.entities = this.sandBox.wallEntities;

  }

  render (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.sandBox.draw(ctx);
    this.entities.forEach(entity => entity.draw(ctx));
    this.creatures.forEach(creature => creature.draw(ctx));
  }

  start () {
    this.setKeyBinds();
    this.generateMap();
    this.generateEntities();
    this.createPlayer();
    // refresh 60 times per second
    setInterval(() => {
      this.render(this.ctx);
      // regular move
      this.move(false);
      // if a collision occurs, reverse move
      if (this.checkCollision() || this.sandBox.outOfBounds(this.player)) {
        this.move(true);
      }
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

  move (reverse) {
    // * testing
    if (reverse) {
      this.entities.forEach((entity) =>
        entity.move(-this.moveDirX, -this.moveDirY)
      );

      this.sandBox.move(-this.moveDirX, -this.moveDirY);
    } else {
      this.entities.forEach((entity) =>
        entity.move(this.moveDirX, this.moveDirY)
      );

      this.sandBox.move(this.moveDirX, this.moveDirY);
    }
    // this.player.move();
    // this.creatures.forEach(creature => creature.move(this.moveDirX, this.moveDirY));
  }

  checkCollision () {
    return this.entities.some(entity => entity.isCollision(this.player));
  }
}