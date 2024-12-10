function rob(nums: number[]): number {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    const maxLootHouse = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        maxLootHouse.push(Math.max(nums[i] + maxLootHouse[i - 2], maxLootHouse[i -1]))
    }

    return maxLootHouse.pop()
}


console.log(rob([2, 9, 5, 10]))
