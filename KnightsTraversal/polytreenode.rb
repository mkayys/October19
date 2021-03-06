class PolyTreeNode
    attr_reader :parent, :children, :value
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        @parent = node
        if !@parent.nil?
            node.children << self
        end
    end


end