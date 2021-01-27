class KnightPathFinder

    MOVES = [
        [1,2],
        [-1, 2],
        [-1, -2],
        [1, -2],
        [2, 1],
        [-2, -1],
        [-2, 1],
        [2, -1]
    ]

    def initialize(start_pos)
        @start_pos = start_pos

        @considered_positions = [@start_pos]
    end

    def self.valid_moves(pos)
        valid = []
        x, y = pos
        MOVES.each do |move|
            if !(x + move[0] > 8 || x + move[0] < 0) && !(y + move[1] < 0 || y + move[1] > 8)
                valid << [x + move[0], y + move[1]]
            end
        end
        valid
    end

    def new_move_position(pos)
        moves = KnightPathFinder.valid_moves(pos)
        new_moves = []
        moves.each do |move|
            if !@considered_positions.include?(move)
                new_moves << move
                @considered_positions << move
            end
        end

        new_moves
    end

    def build_move_tree
        # breath-first approach
    end
end