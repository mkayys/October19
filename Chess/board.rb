require_relative 'piece'

class Board

    def initialize
        @grid = Array.new(8) { Array.new(8, nil) }
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
                    pos = Piece.new
                end
            end
        end
    end

end