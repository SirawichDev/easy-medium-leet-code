export default function LengthOfLongestSubstrings(s: string): number {
    const hashMap: Record<string, number> = {}
    let windowStart = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i]

        if (hashMap[endChar] >= windowStart) {
            windowStart = hashMap[endChar] + 1 
        }

        hashMap[endChar] = i
        maxLength = Math.max(maxLength, i - windowStart + 1)

    }

    return maxLength
}
