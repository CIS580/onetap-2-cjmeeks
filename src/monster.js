"use strict";

module.exports = exports = Monster;

function Monster(position){
  this.state = "walking";
  this.frame = 0;
  this.x = position.x;
  this.y = position.y;
  this.width  = 16;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/beasts/beast side.png');
  this.timer = 0;
  var self = this;
}

Monster.prototype.update = function(elapsedTime){
  this.timer += elapsedTime;
  switch (this.state) {
    case "walking":
      if(this.timer > 1000/16){
        this.frame = (this.frame+1)%4;
        this.timer = 0;
      }
      this.x +=1;
      break;
    default:

  }
}
