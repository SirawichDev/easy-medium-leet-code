export default function TwoSums(arr: Array<number>, target: number): number[] {

    const hashMap: Record<number, number> = {}
    const stack: Array<number> = []

    for (let i:number = 0; i < arr.length; i ++) {
        const num = arr[i]
        const result = target - num
        if (hashMap[result] !== undefined) {
            stack.push(hashMap[result])
            stack.push(i)
        }
        hashMap[num] = i
    }
    return stack
}
// {2: 0, 7: 1}
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
