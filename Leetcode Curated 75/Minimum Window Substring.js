// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.



// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.


// Follow up: Could you find an algorithm that runs in O(m + n) time?

//input 2 strings
//output string
//WHERE output string is a continuous substring of s that contains all chars of t (shortest one available)

//strat
//create a cache of all chars within t
//create a count to keep track of which letters have been depleted from current 2 arrows

//declare 2 arrows begin and end - initialize to 0
//implement 2 arrows via a while loop
//if count === 0
//declare a current
//logic for cache
//logic for count
//logic for output
//increment begin
//else
//declare a current
//logic for cache
//logic for count
//increment end
//return output

var minWindow = function (s, t) {
  let begin = 0, end = -1;
  const cache = {};
  let output = '';

  for (let i = 0; i < t.length; i++) {
    cache[t[i]] ? cache[t[i]] += 1 : cache[t[i]] = 1
  }
  let count = Object.keys(cache).length;

  while (end <= s.length) {
    if (count === 0) {

      const current = s[begin];
      if (cache[current] != null) cache[current]++;
      if (cache[current] > 0) count++;

      const hold = s.slice(begin, end + 1)
      console.log(hold)
      if (output === '') output = hold
      else if (hold.length < output.length) output = hold;
      begin++;
    }
    else {
      end++;
      const current = s[end];
      if (cache[s[end]] !== null) cache[current]--;
      if (cache[s[end]] === 0) count--;
    }
  }
  return output;
};

console.log(minWindow("AB", "A"))

async function login(email, password) {
  const account = authenticate(email, password);
  if (account) {
    // A new breach was detected!
    if (sampleResponse.length > 0) {
      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          // hardcoded for now...
          breachedAccounts: sampleBreaches
        }
      };
    } else {
      return { success: true };
    }
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}


const check = async (account) => {
  let lastLogin = '';
  for (let i = 0; i < sampleUsers.length; i++) {
    if (sampleUsers[i].email == account) {
      lastLogin = sampleUsers[i].lastLogin
    }
    await fetch(`https://hackcheck.woventeams.com/api/v4/breachedaccount/${account}`)
      .then(data => data.json())
      .then(data => {
        if (data[0].IsSensitive === false &&
          data[0].DataClasses.includes('Passwords') &&
          data[0].AddedDate > lastLogin)
          return {
            success: true,
            meta: {
              suggestPasswordChange: true,
              breachedAccounts: [{
                name: data.name,
                domain: data.Domain,
                breachDate: data.BreachDate,
                addedDate: data.AddedDate
              }]
            }
          }
      })
  }
}
