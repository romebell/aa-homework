require 'byebug'
class Map
    def initialize
        @map = []
    end 

    def set(key, value)
        # byebug
        if @map.empty? 
            @map << [key, value]
        else 
            @map << [key, value] if get(key).nil?
        end 
    end 

    def get(key)
        @map.each do |pair|
            map_key = pair[0]
            value = pair[1]
            return value if map_key == key 
        end
        nil
    end 
    
    def delete(key)
        @map.each_with_index do |pair, i|
            map_key = pair[0]
            @map.delete_at(i) if map_key == key 
        end 
    end 

    def show
        @map
    end 
end 

# Test Cases
my_map = Map.new
#  [1, "Rome"], [10, "Kevin"], [3, "Hueng"]
p my_map
my_map.set(1, "Rome")
my_map.set(2, "Yoni")
my_map.set(1, "Kevin")
p my_map.show
p my_map.get(1)
p my_map.get(4)
my_map.delete(1)
p my_map.show 
my_map.set(1, "Kevin")
p my_map.show