function lengthOfLongestSubstrings(s: string) {
    const hashMap = {}
    let windowStart = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i]

        console.log('hashMap[endChar]', hashMap[endChar] >= windowStart)
        if (hashMap[endChar] >= windowStart) {
            windowStart = hashMap[endChar] + 1 // 3
        }

        hashMap[endChar] = i // { a: 1, b: 3}
        maxLength = Math.max(maxLength, i - windowStart + 1) // 2

    }

    return maxLength
}

console.log(lengthOfLongestSubstrings('abacad')) // 4
