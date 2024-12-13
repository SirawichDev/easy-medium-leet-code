export default function climbStairs(n: number): number {
    const ways = [1, 1, 2, 3]

    if (n <= 3) {
        return n
    }
    for (let i = 4; i <= n; i++) {
        ways.push(ways[i - 1] + ways[i - 2])
    }

    return ways[n]
}

