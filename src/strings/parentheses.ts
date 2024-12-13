export default function ValidParentheses(s: string): boolean {
	const stack: Array<string> = [];
	const hashMap: Record<string, string> = { "(": ")", "{": "}", "[": "]" };

	for (let i = 0; i < s.length; i++) {
		const charr = s[i];
		if (hashMap[charr]) {
			stack.push(hashMap[charr]);
		} else if (stack.pop() !== charr) {
			return false;
		}
	}
	return stack.length === 0; // ต้อง pop ออกมาให้หมด กันกรณี มีแต่เปิดไม่มีปิด
}
