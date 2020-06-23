export default class Marble {
  constructor() {
    this.image = document.getElementById("img-marble");
  }

  draw(ctx) {
    ctx.drawImage(this.image, 10, 10, 16, 16);
  }

  update() {

  }
}