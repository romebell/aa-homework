def sluggish_octopus(fishy)
    return fishy if fishy.length <= 1
    prc = Proc.new { |x,y| x <=> y }

    loop do
        sorted = true

        (fishy.length - 1).times do |i|
            if prc.call(fishy[i].length, fishy[i + 1].length) == 1
                fishy[i], fishy[i + 1] = fishy[i + 1], fishy[i]
                sorted = false
            end
        end
        break if sorted 
    end
    res = fishy
    res.last
end

def quick_sort(array)
    return array if array.size < 2
    prc = Proc.new { |x,y| x <=> y }
    
    pivot = [array.first]
    left = array[1..-1].select { |el| prc.call(el.length, pivot.length) == -1 }
    right = array[1..-1].select { |el| prc.call(el.length, pivot.length) != -1 }
    res = left + pivot + right
end

def clever_octopus(array)
    results = nil
    array.each do |fish|
        results = fish if results.nil?
        results = fish if results.length < fish.length
    end
    results
end

def dominant_octopus(fishy)
   quick_sort(fishy).last
end



def slow_dance(movement, tiles_array)
    tile_index = nil 

    tiles_array.each_with_index do |move, location_idx|
        if move == movement
            tile_index = location_idx
        end
    end

    tile_index
end

def fast_dance(movement, new_tiles_data_structure)
    res = nil
    new_tiles_data_structure.each do |direction, location_idx|
        res = location_idx if direction == movement
    end
    res
end

if __FILE__ == $PROGRAM_NAME
    fishy = ['fish', 'fiiish', 'fiiiiish', 'fiiiissshhhhhh','fiiiish', 'fffish', 'ffiiiiisshh', 'fsh' ]
    new_tiles_data_structure = {"up"=>0, "right-up"=>1, "right"=>2, "right-down"=>3, "down"=>4, "left-down"=>5, "left"=>6, "left-up"=>7 }
    tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up" ]

    p sluggish_octopus(fishy)
    p dominant_octopus(fishy)
    p clever_octopus(fishy)
    
    p slow_dance("up", tiles_array)
    p slow_dance("right-down", tiles_array)
    p fast_dance("up", new_tiles_data_structure)
    p fast_dance("right-down", new_tiles_data_structure)
end