var isPalindrome = function(x) {
    let begin = 0;
    let end = x.length - 1;
    while (begin < end) {
        if (x[begin] !== x[end]) return false;
        begin += 1;
        end -= 1;
    }   
    return end;
};
