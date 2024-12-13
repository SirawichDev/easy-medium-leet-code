export function ContainDuplicate(nums: number[]): boolean {
    const visitedNum: Record<number, number> = {}
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i]
        if (visitedNum[num]) {
            return true
        } else {
            visitedNum[num] = 1
        }
    }
    return false
}
