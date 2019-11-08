class Parent
  def say
    p 'hello'
  end
end

class Child < Parent
  def say(message)
    super()
  end
end

Child.new.say('Hi Rubyist!') # => "Hi Rubyist!"