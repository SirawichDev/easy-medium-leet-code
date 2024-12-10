function  ValidParentheses(s: string) {

    const stack = []
    const hashMap = {'(':')', '{':'}', '[': ']'}

    for (let i = 0;i<s.length;i++) {
        const charr = s[i]
        if (hashMap[charr]) {
            stack.push(charr)
        } else if (hashMap[stack.pop()] !== charr) {
            return false
        }
    }
    return true

}


console.log(ValidParentheses('{[}'))
