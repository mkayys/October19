require_relative 'piece'

class Board
    attr_accessor :grid
    def initialize
        @grid = Array.new(8) { Array.new(8, nil) }
        place_pieces
    end

    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, piece)
        row, col = pos
        @grid[row][col] = piece
    end
    
    def place_pieces
        @grid.each_with_index do |row, i|
            row.each_with_index do |pos, j|
                if (i == 0) || (i == 1) || (i == 6) || (i == 7)
                    # @grid[i][j] = Piece.new
                    self[[i, j]] = Piece.new
                end
            end
        end
    end

    def move_piece(start_pos, end_pos)
        if self[start_pos].nil?
            raise "THERE IS NO PIECCCEE"
        end
        # piece can't move to end_pos
        # 1. if another piece of your color is there
        # 2. if it's not on the grid
        # 3. the piece can't move that way
        moving_piece = self[start_pos]
        self[end_pos] = moving_piece
        self[start_pos] = nil
        
    end

end