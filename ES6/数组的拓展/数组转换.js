// from:对象转数组
let obj = {
    0:'a',
    1:'b',
    length:2,
}

let arrs = Array.from(obj)
console.log(arrs)

//flat:数组扁平化
let arrs1 = [1 , 2, [3 ,4 ,[5]]]
arrs1 = arrs1.flat(3)
console.log(arrs1)

//sort：数组排序
let arrs2 = [3 , 4 ,1 ,8, 5]
arrs2.sort((e1 ,e2) => {
   
        return e2 - e1
    })

console.log(res)

