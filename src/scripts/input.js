export default class InputHandler {
  constructor(marble) {
    this.marble = marble;
    this.keys;

    window.addEventListener("keydown", e => {
      e.preventDefault();
      this.keys = (this.keys || []);
      this.keys[e.keyCode] = (e.type == "keydown");
    })

    window.addEventListener("keyup", e => {
      e.preventDefault();
      this.keys[e.keyCode] = (e.type == "keydown");
    })
  }

  handleInput(deltaTime) {
    if (this.keys && this.keys[87]) { this.marble.tiltUp(deltaTime); }
    if (this.keys && this.keys[83]) { this.marble.tiltDown(deltaTime); }
    if (this.keys && this.keys[65]) { this.marble.tiltLeft(deltaTime); }
    if (this.keys && this.keys[68]) { this.marble.tiltRight(deltaTime); }
  }
}