let isStarted = false

let timer = () => {
    let time = 3*60

    let cycle
    cycle = setInterval(function() {
        if (time >= 0) {
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0")

            document.getElementById("timer").innerText = min+":"+sec;
            time = time - 1
        } else {
            document.getElementById("target").disabled = true;
            isStarted = false
            console.log("타이머 작동중")
            clearInterval(cycle)
        }
    }, 1000)
}

const auth = () => {
    const token = String( Math.floor(Math.random() * 1000000) ).padStart(6,"0");

    document.getElementById("number").innerText = token;
    
    if(isStarted == false){
        //타이머가 작동중이 아닐 때
        document.getElementById("target").disabled = false;
        isStarted = true
        timer();
    } else {
        //타이머가 작동중일 때
    }
}