

DIRECTIONS = [
    'north',
    'south',
    'east',
    'west'
]


class Sloth
    attr_reader :name, :food, :drinks
    # spec fails without attr_reader because we needed a getter
    def initialize(name)
        @name = name
        @food = []
        @drinks = {}
    end

    def eat(food)
        @food << food
        #food << food
        food
    end

    def run(direction)
        raise ArgumentError if !DIRECTIONS.include?(direction)
    end
end