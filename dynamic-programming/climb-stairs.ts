function climbStairs(n: number) {
    if (n <= 3) {
        return n
    }
    const ways = [1, 1, 2, 3]
    for (let i = 4; i <= n; i++) {
        ways.push(ways[i - 1] + ways[i - 2])
    }

    return ways[n]
}

console.log(climbStairs(6))

