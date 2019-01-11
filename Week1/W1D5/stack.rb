
class Stack
    def initialize(stack)
        # create ivar to store stack here!
        @stack = stack
    end

    def push(el)
        # adds an element to the stack
        @stack + [el]
    end

    def pop
        # removes one element from the stack
        @stack.take(@stack.length - 1)
    end

    def peek
        # returns, but doesn't remove, the top element in the stack
        @stack[-1]
    end
end

# Test Case
stack = Stack.new([1,2,3,4,5,6])
p stack.push(1)
p stack.peek 
p stack.pop
