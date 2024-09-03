let arr = [
    {name:'aaa' , color:'红色'},
    {name:'bbb' , color:'红色'},
    {name:'ccc' , color:'绿色'},
    {name:'ddd' , color:'绿色'},
]

let result = arr.filter((obj) => obj.color === '绿色')
console.log(result)