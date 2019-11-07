class Food
    attr_reader :type
    def initialize(type)
        @type = type
    end

    def bitten
        'AHH I am BEING EATEN'
    end
end