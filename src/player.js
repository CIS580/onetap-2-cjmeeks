"use strict";

/**
 * @module exports the Player class
 */
module.exports = exports = Player;

/**
 * @constructor Player
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Player(position) {
  this.state = "waiting";
  this.frame = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 16;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/link/not link/notlink up.png');
  this.timer = 0;
  var self = this;
  window.onmousedown = function(event){
    if(self.state == "waiting"){
      self.x = event.clientX;
      self.state = "walking";
    }

  }

}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Player.prototype.update = function(elapsedTime) {
  this.timer += elapsedTime;
  console.log(this.timer);
  switch (this.state) {
    case "walking":
      if(this.timer > 1000/16){
        this.frame = (this.frame+1)%4;
        this.timer = 0;
      }
      this.y -=1;
      break;
    default:

  }
}

/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Player.prototype.render = function(time, ctx) {
  console.log(this.frame);
  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.frame * this.width, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y-10, 2*this.width, 2*this.height
  );
}
