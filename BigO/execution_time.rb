# MY_MIN
# Phase 1 O(n^2)

def my_min(arr)
    min = arr.first
    arr.each_with_index do |ele1, i|
        if ele1 < min
            min = ele1
        end
        arr.each_with_index do |ele2, j|
            if j > i && min > ele2
                min = ele2
            end
        end
    end
    min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5

# Phase 2 O(n)

def my_min2(arr)
    min = arr.first
    arr.each do |ele|
        if ele < min
            min = ele
        end
    end
    min
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min2(list)  # =>  -5


# LARGEST_CONTIGUOUS_SUM
# Phase 1 0(n^3)

def largest_contiguous_subsum(arr)
    max = arr.first
    arr.each_with_index do |ele1, i|
        # arr.each_with_index
    end
end

list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])

# Phase 2 0(n)
