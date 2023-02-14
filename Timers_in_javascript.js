/*
1. SetTimeout/ClearTimeout 

2. SetInterval/ClearInterval

3. SetImmediate/ClearImmediate :- When you want to execute a piece of code asynchronously but as soon as possible .
                                  Any function passed as the arguments is a callback that's executed in the next iteration of a event loop.

4. Process.nextTick :- When we pass a function to process.nextTick we instruct the engine to invoke the function at the end of the current
   operation before the next event loop ticks start .
   Its the way we can call the engine to process a function asynchronously after the current function but asap not queue it.

*/