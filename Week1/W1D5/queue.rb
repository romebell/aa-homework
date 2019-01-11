class Queue
    def initialize
        @line = []
    end 

    def enqueue(el)
        @line.push(el)
    end

    def dequeue
        @line.shift
    end

    def peek
        @line[0]
    end 
end

# Test Cases
apple_store = Queue.new
p apple_store.enqueue("Rome")
p apple_store.peek
p apple_store.enqueue("Kevin")
p apple_store.peek
p apple_store.enqueue("Mike")
p apple_store.peek
p apple_store.dequeue
p apple_store.peek
p apple_store.enqueue("Joseph")


