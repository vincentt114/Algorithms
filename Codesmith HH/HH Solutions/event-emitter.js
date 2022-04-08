/* 
Make an EventEmitter class that mimics the functionality of event listeners.
EventEmitter will have two methods:
- an 'on' method that will take in a function name and function declaration
- a 'trigger' method that takes in a function name and optional arguments
When 'trigger' is invoked, it should execute the function passed in, 
according to functions assigned with the 'on' method.
Example:
  const instance = new EventEmitter();
  let counter = 0;
  instance.on('increment', () => counter++); // counter should be 0
  instance.trigger('increment'); // counter should be 1
  instance.trigger('increment'); // counter should be 2
Caveats:
- If we repeatedly call .on with the same event name, it should
  continue to call the old function(s) as well. 
  Meaning, we can have multiple listeners for one event.
- If `obj.trigger` is called with additional arguments, pass those to the listeners.
- It is not necessary to write a way to remove listeners. 
*/


function EventEmitter() {
  // set a listeners object property.
  // here is where we will keep track of any listeners we have configured
  // as well as the func(s) to run when triggered
  this.listeners = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  // if the funcName isn't yet added to our emitter's listeners, 
  // create a new key in EventEmitter.listeners for the funcName with the value of an empty array
  if (!this.listeners[funcName]) {
    this.listeners[funcName] = [];
  }
  // push function definition into funcName's array
  this.listeners[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  // check if funcName exists in EventEmitter's listeners
  // if so, call each function in funcName's array with args passed in
  if (this.listeners[funcName]) {
    this.listeners[funcName].forEach(func => func(...args));
  }
};

module.exports = EventEmitter;