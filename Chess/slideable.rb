module Slideable

    HORIZONTAL_AND_VERTICAL = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    DIAGONAL = [
        [-1, 1],
        [-1, 1],
        [1, 1],
        [1, -1]
    ]

    def moves
        moves = []
        move_dirs.each do |dir|
            moves.concat(grow_moves(dir[0], dir[1]))
        end

    end

    def move_dirs
        # need this because when we first write moves, it uses move_dirs and will error otherwise
        raise NotImplementedError
    end

    def grow_moves(dx, dy)
        s_x, s_y = pos

         # cur_x, cur_y = pos
    # moves = []
    # loop do
    #   cur_x, cur_y = cur_x + dx, cur_y + dy
    #   pos = [cur_x, cur_y]

    #   break unless board.valid_pos?(pos)

    #   if board.empty?(pos)
    #     moves << pos
    #   else
    #     # can take an opponent's piece
    #     moves << pos if board[pos].color != color

    #     # can't move past blocking piece
    #     break
    #   end
    # end
    # moves
    end
end