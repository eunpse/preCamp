let friend = {
    name: "철수",
    age: 13,
    camp: "코드캠프"
}

let students = [
    {name: "짱구", pet: "강아지", house: "구로구"},
    {name: "철수", pet: "고양이", house: "관악구"},
    {name: "유리", pet: "토끼", house: "성북구"}
]

students[0].name
// '짱구'
students[2].pet
// '토끼'



const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]

let i = 0
for(i; i < fruits.length; i++) {
    console.log(fruits[i].number + " " + fruits[i].title)
}