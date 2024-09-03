// 字串定位
 const str = 'You are the best engineer.'
// console.log(str.indexOf('best'))
// consloe.log(str.indexOf('bet'))

// ES6 的一些新方法

console.log(str.includes('best'))
console.log(str.startsWith('You'))
console.log(str.endsWith('eer.'))

//重复n次字符串
let str1 = '测试内容'
str1 = str1.repeat(100)
console.log(str1)

//字符串替换
let str2 = 'xxx love you ,yyy love you ,zzz love you'
str2 = str2.replaceAll('you','me')
console.log(str2)

//模板字符串
const title = '块级元素'
let divStr = `
   <div>
      <span>${title}</span>
   </div>
`