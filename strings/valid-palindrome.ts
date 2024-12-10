function ValidPalidrome(s: string): boolean {
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

console.log(ValidPalidrome("race a car"))

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
