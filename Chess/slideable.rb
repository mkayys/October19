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

        move_dirs.each do |dir|

        end

    end

    def move_dirs
        # need this because when we first write moves, it uses move_dirs and will error otherwise
        raise NotImplementedError
    end

    def grow_moves(dx, dy)
        s_x, s_y = pos

        
    end
end