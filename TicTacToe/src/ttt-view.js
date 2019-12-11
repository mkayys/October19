class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.box').each((i, li) => {
      let $li = $(li);
      $li.on('click', () => {
        // console.log($li);
        let pos = $li.data('pos');
        // console.log(pos);
        this.game.playMove(pos);
        this.makeMove($li);
      })
    })
  }

  makeMove($square) {
    $square.html(`${this.game.currentPlayer}`);
  }

  setupBoard() {
    const $grid = $('<ul></ul>');
    $grid.addClass('grid')
    this.$el.append($grid);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $box = $('<li></li>');
        $box.addClass('box');
        $box.data('pos', [i, j]);
        $grid.append($box);
      }
    }

  }
}

module.exports = View;
