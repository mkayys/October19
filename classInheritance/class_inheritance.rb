class Employee
    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        self.salary * multiplier
    end
end

class Manager < Employee
    def initialize(name, title, salary, boss)
        super(name, title, salary, boss)
        @employees = []
    end
end