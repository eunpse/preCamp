let isStarted = false

//인증번호 전송 버튼 활성화
const phoneCheck = () => {
    let phone1 = document.getElementById("phone1").value
    if(phone1.length == 3){
        document.getElementById("phone2").focus()
    }
    let phone2 = document.getElementById("phone2").value
    if(phone2.length == 4){
        document.getElementById("phone3").focus()
    }

    let phone3 = document.getElementById("phone3").value
    if(phone3.length == 4){
        document.getElementById("authBtn").disabled = false
        document.getElementById("authBtn").style = "border: 1px solid #d2d2d2; color: #0068FF; background-color: white;"
    }
}

//인증확인 버튼 클릭
const authCheck = () => {
    alert("인증이 완료되었습니다.")

    document.getElementById("submit").disabled = false
    document.getElementById("submit").style = "border: 1px solid #0068FF; background-color: white; color: #0068FF;"
}

//가입하기 버튼 활성화
const submitCheck = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw = document.getElementById("pw").value
    let pw2 = document.getElementById("pw2").value

    let isValid = true

    if(!email){
        isValid = false
        document.getElementById("emailCheck").style = "visibility: visible"
    } else {
        document.getElementById("emailCheck").style = "visibility: hidden"
    }
    if(!name){
        isValid = false
        document.getElementById("nameCheck").style = "visibility: visible"
    } else {
        document.getElementById("nameCheck").style = "visibility: hidden"
    }
    if(!pw){
        isValid = false
        document.getElementById("pwCheck").style = "visibility: visible"
    } else {
        document.getElementById("pwCheck").style = "visibility: hidden"
    }
    if(!pw2){
        isValid = false
        document.getElementById("pw2Check").style = "visibility: visible"
    } else {
        document.getElementById("pw2Check").style = "visibility: hidden"
    }

    if( email && name && pw && pw2 ) {
        isValid = true
        alert("회원가입이 완료되었습니다.")
    } else {
        isValid = false
    }
    console.log(isValid)
}

//타이머
const timer = () => {
    let time = 3
    let cycle = setInterval(function(){
        
        if (time >= 0){
            let min = Math.floor(time/60)
            let sec = String(time%60).padStart(2, "0")
            
            document.getElementById("time").innerText = min+":"+sec
            time = time - 1
        } else {
            isStarted = false
            document.getElementById("authNum").innerText = "000000"
            //인증확인 버튼 비활성화
            document.getElementById("authCheck").disabled = true
            document.getElementById("authCheck").style = "none"
            clearInterval(cycle)
        }
            

    }, 1000)
}

//인증번호 전송
const authSend = () => {
    let authNum = String(Math.floor(Math.random()*1000000)).padStart(6, "0")

    document.getElementById("authNum").innerText = authNum

    if(!isStarted) {
        //타이머가 실행되지 않았을 때
        isStarted = true
        //인증확인 버튼 활성화
        document.getElementById("authCheck").disabled = false
        document.getElementById("authCheck").style = "border: 1px solid #d2d2d2; color: white; background-color: #0068FF;"
        timer()
        
    } else {
        //타이머가 실행됐을 때
        console.log("isStarted == false")
    }
}