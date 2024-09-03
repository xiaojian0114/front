let arr = [
    {name:'aaa' , color:'红色'},
    {name:'bbb' , color:'红色'},
    {name:'ccc' , color:'绿色'},
    {name:'ddd' , color:'绿色'},
]

let row = arr.find((row) => row.color = '红色')
console.log(row)

let obj = arr.findLast((obj) => obj.color = '红色')
console.log(obj)