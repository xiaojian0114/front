var arrs = [1 , 2, 3, 4, 5]
arrs.forEach((e) => {
    console.log(e)
})

// 遍历所有 扩展两倍
let result = arrs.map((e) => {
    return e * 2
})
console.log(result)