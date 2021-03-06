

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
        @drinks = Hash.new(0)
    end

    def eat(food)
        food.bitten
        @food << food
        #food << food
        food
    end

    def run(direction)
        raise ArgumentError if !DIRECTIONS.include?(direction)
        "I am climibing in #{direction}"
    end

    def drink(type, amount)
        @drinks[type] += amount
    end

    private
    def secret_sloth
        "Shhh"
    end
end