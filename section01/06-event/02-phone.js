// const changeFocus1 = () => {
//     let phone1 = document.getElementById("p1").value
//     if (phone1.length == 3) {
//         document.getElementById("p2").focus()
//     }
// }

// const changeFocus2 = () => {
//     let phone2 = document.getElementById("p2").value
//     if (phone2.length == 4) {
//         document.getElementById("p3").focus()
//     }
// }

const changeFocus = () => {
    let phone1 = document.getElementById("p1").value
    if (phone1.length == 3) {
        document.getElementById("p2").focus()
    }

    let phone2 = document.getElementById("p2").value
    if (phone2.length == 4) {
        document.getElementById("p3").focus()
    }

    let phone3 = document.getElementById("p3").value
    if(phone3.length == 4) {
        document.getElementById("auth").disabled = false;
    }
}

let isStarted = false

const timer = () => {
    console.log("timer start")
    let time = 3*60
    let cycle

    setInterval(function() {
        if(time >= 0){
            console.log(time)
    
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0")

            document.getElementById("time").innerText = min+":"+sec
            time = time - 1

        } else {
            isStarted = false
            clearInterval(cycle)
        }

    }, 1000)
}

const auth = () => {
    const token = String( Math.floor(Math.random() * 1000000) ).padStart(6,"0");
    document.getElementById("token").innerText = token

    if(isStarted == false){
        //타이머가 작동중이 아닐 때
        isStarted = true
        timer();
    } else {
        //타이머가 작동중일 때
    }
}