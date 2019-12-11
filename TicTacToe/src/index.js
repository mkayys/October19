const View = require('./ttt-view');
const Game = require('./game');

  $(() => {
    const game = new Game();
    const $el = $('.ttt');
    new View(game, $el);
  });
