console.log("hello")
let name = "seeun"
console.log(name)
name = "세은"
console.log(name)

let classmates = ["은미", "서우", "수진"]
// undefined
classmates
// (3) ['은미', '서우', '수진']
classmates[1]
// '서우'
classmates.includes("은")
// false
classmates.includes("은미")
// true
classmates.push("세은")
// 4
classmates
// (4) ['은미', '서우', '수진', '세은']

// 이메일 쪼개기
const email = "codecamp@gmail.com"
email.includes("@")
let userMail = email.split("@")[0]
let company = email.split("@")[1]

let maskingMail = []
for(let i = 0; i < userMail.length - 4; i++){
    maskingMail.push(userMail[i]);
}
for(i = 0; i < 4; i++){
    maskingMail.push("*")
}
console.log(maskingMail)

let result = maskingMail.join("") + "@" + company
console.log(result)