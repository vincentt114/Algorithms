// Your team has been contracted by a telecommunications company that is trying to upgrade junction boxes. Some of the junction boxes have already been upgraded and others not. Your task is to identify the oldest boxes that need to be upgraded first but leaving the newer model boxes so they will not be prioritized.
// All the junction boxes are identified by an alphanumeric identifier, followed by space delimited version instance information. The older generation uses space delimited lowercase english strings to identify the version, but the new generation uses space delimited positive integers. Your task is to sort the boxes in the following order:

// 1. The older generation junction boxes should be returned first, sorted by lexicographic ordering of alphabetic version.
// 2. If there are ties in the older generation, ties should be broken by the alphanumeric identifier.All
// 3. The newer generation boxes must come after the older generation, in the original order they were given in the InputDeviceInfo.apply

// Write a function or method to return a list of all strings representing the correctly prioritized orders according to the FileSystem.apply

//input array of strings
//output array of strings
  //same as input but reordered as follows:
    //the "older boxes" (identified as having only letters after the identifier) go before the newer boxes (identified as having only numbers after the identifier)
    //older boxes are sorted amongst themselves via the letter body
      //if the same than by identifier
        //numbers before letters
    //newer go in the same order

  //strat
    //delcare 2 arrays new and old
    //iteriate through input
      //declare a check var and initialize it to current element split 2nd element
      //run !isNan(Number(check))
        //if true push into newer
        //else into older
    //run sort on older
      //declare a body -> a.slice of index of " " + 1 
      //declare b body -> b.slice of index of ' ' + 1
      //declare compare as a.localecompare(b)
      //if (compare) return compare
      //else 
        //declare a identifier as a.split(' ')[0]
        //declare b identifier as b.split(' ')[0]
        //return a.localecompare(b)
    //return [...older, ...newer]
      
const sortBoxes = boxList => {
  const older = [];
  const newer = [];

  for (let i = 0; i < boxList.length; i++) {
    const check = boxList[i].split(' ')[1]
    if (!isNaN(Number(check))) newer.push(boxList[i])
    else older.push(boxList[i])
  }

  older.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1)
    const bBody = b.slice(b.indexOf(' ') + 1)
    const check = aBody.localeCompare(bBody);
    // console.log(aBody)
    if (check) return check;
    else {
      aIdentify = a.slice(0, a.indexOf(' '))
      bIdentify = b.slice(0, b.indexOf(' '))
      return aIdentify.localeCompare(bIdentify)
    }
  })

  return [...older, ...newer]
  console.log(older)

}

  const test1 = ['ykc 82 01', 'eo first  qpx', '09z cat hamster', '06f 12 25 6', 'az0 first qpx', '236 first z cat dog rabbit snake'];
  console.log(sortBoxes(test1))