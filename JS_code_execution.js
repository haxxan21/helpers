console.log("Add this code to queue");

setTimeout(function() {                                                //This goes and sits in the queue.
                           console.log("Running next event from the queue.");
                 },0);

function a(x) {
     console.log("Function a added to the stack!");
     b(x);
     console.log("Function a removed from the stack!");
}

function b(x) {
      console.log("Function b is added to the stack.");
      console.log("Value passed is "+x);
      console.log("Function b is removed from the stack.");
}

console.log("starting work for this stack");
a(22);
console.log("Stopping work for this stack. stack would be empty after this.");