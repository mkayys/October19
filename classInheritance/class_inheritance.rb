class Employee
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        
    end
end

class Manager < Employee
    def initialize(name, title, salary, boss)
        super(name, title, salary, boss)
        @employees = []
    end
end