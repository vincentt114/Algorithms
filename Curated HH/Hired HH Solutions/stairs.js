//recursion approach
const solution = (n) => {
    // Type your solution here
    if (n === 0) return 1;
    if (n < 0) return 0;
    return solution(n - 3) + solution(n - 2) + solution(n - 1)
};

//dynamic approach
const solution2 = (n) => {
    // Type your solution here
    let arr = new Array(n + 2);
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    return arr[n]
};