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
        MOVES.each do |move|
            if !@considered_positions.include?(move)
                valid << move
                @considered_positions << move
            end
        end
        valid
    end

    def new_move_position(pos)
        
    end
end