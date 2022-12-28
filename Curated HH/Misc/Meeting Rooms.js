//strat
	//sort the input
	//create an output and initialize to 1
	//create an object to keep track of 'rooms' needed
	//create helper functions
		//check to see if a specific room has time slots available
			//takes in begin, end, room
		//add to add times to a room
			//takes in behin, end, room
	//iteriate through input times
		//iteriate through output
			//check if rooms has time slots
				//if yes then add and then break out of iteriation
			//if no time slots at all available
				//increment output
				//create a new room using output as key
	//return output 

  function meetingRooms(times) {
    times.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1]
      else return a[0] - b[0]
    })
    
    let output = 1;
    const rooms = {};
    rooms[output] = [];
  
    //helper function to see if array includes the time
    const check = (start, end, room) => {
      let arr = rooms[room];
      for (let i = start; i <= end; i++) {
        if (arr.includes(i)) return false
      }
      return true;
    }
    
    //helper function to add times to an array
    const add = (start, end, room) => {
      let arr = rooms[room];
      for (let i = start; i <= end; i++) {
        arr.push(i)
      }
    }
    
    //iteriating through time intervals
    for (let i = 0; i < times.length; i++) {
      //iteriating through rooms we currently have
      for (let j = 1; j <= output; j++) {
        const start = times[i][0], end = times[i][1]
        //checking if existing room has space
        if (check(start, end, j)) {
          add(start, end, j);
          break;
        }
        //if all rooms have no space then increment output and create a new room
        else if (j === output) {
          output++;
          rooms[output] = []
        }
      }
    }
  
    return output
  }