/*

Write a clock class, with two methods: start and stop.

----------
start: upon invocation, invokes a callback (this.cb, defined in the constructor)
on an argument every second, with the argument to the callback being:

1, 2, 3,... 59, 60, 1, 2, 3,... 59, 60, 1, 2, 3, etc.

In other words, the callback gets invoked every second on the "seconds hand" of
the clock. Always start with 1 and don't utilize the seconds value the current
clock time.

The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
...
The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
etc.

----------
reset: upon invocation, completely stops the "clock".
Also resets the time back to the beginning.

Hint: look up setInterval and clearInterval.

*/

//within constructor
  //create a time var and initialize it to 1
  //create a func and initialize to null
//with start
  //reassign func to setInterval with logic of cb per sec and incrementing time
//stop
  //clear interval and reset time

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.time = 1;
    this.func = null
  }

  start() {
    this.func = setInterval(() => {
      this.cb(this.time);
      this.time++;
      if (this.time === 61) this.time = 1;
    }, 1000);
  }

  stop() {
    clearInterval(this.func);
    this.time = 1;
  }
}

module.exports = { SecondClock };
