class Sloth
    attr_reader :name, :food, :drinks
    # spec fails without attr_reader because we needed a getter
    def initialize(name)
        @name = name
        @food = []
        @drinks = {}
    end
end