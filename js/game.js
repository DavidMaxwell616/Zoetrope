const game = new Phaser.Game(1200,752, Phaser.CANVAS, 'game', {
  preload,
  create,
});

function create() {
  game.stage.backgroundColor = '#4F8ADA';
  var x  = 0, y = 0;
    for (var clip = 1; clip < 7; clip++) {
      var item = game.add.sprite(x, y, 'sheet'+clip);
    item.animations.add('run');
    item.animations.play('run', 10, true);
    if(clip%3==0) {
      y+=item.height;
      x=0;
    }
    else
    x+=item.width;
  }
}

