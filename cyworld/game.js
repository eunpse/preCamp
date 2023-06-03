const followUp = () => {
    let word = document.getElementById("word").innerText
    let myWord = document.getElementById("myWord").value;
    let lastWord = word[word.length -1]
    let firstWord = myWord[0]

    if (lastWord == firstWord) {
        document.getElementById("result").innerText = "성공!"
        document.getElementById("word").innerText = myWord;
        document.getElementById("myWord").value = "";
    } else if (myWord == 0){
        document.getElementById("result").innerText = "결과!"
        alert("단어를 입력해주세요.")
    } else {
        document.getElementById("result").innerText = "실패!"
        document.getElementById("myWord").value = "";
    }
}

const lotto = () => {
    let token = [];
    console.log(token)
    for(let i = 0; i < 6; i++){
        token[i] = String(Math.floor(Math.random() * 100))

        if(token[i] == 0 || token[i] == 100){
            token[i] = String(Math.floor(Math.random() * 100))
        }
    }

    for(i = 0; i < 6; i++){
        let num = "number" + String(i)
        document.getElementById(num).innerText = token[i]
    }
}