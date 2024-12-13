export function ValidPalidrome(s: string): boolean {
	const cleanTxt = s.toLowerCase().replace(/[\W_]/g, "");

	let left = 0;
	let right = cleanTxt.length - 1;

	while (left < right) {
		if (cleanTxt[left] !== cleanTxt[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}
