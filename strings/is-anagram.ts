function isAnagram(s: string, t: string) {
    if (s.length !== t.length) {
        return false
    }
    const sHash = {}
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]
        sHash[sChar] = sHash[sChar] + 1 || 1 // if existing + 1 else init it = 1
    }

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i]
        if (!sHash[tChar]) {
            return false
        } else {
            sHash[tChar]--
        }
    }

    return true
}

console.log(isAnagram('rat', 'tar'))


