const timer = () => {
    let time = 3*60

    setInterval(function() {
        if (time >= 0) {
            time = time - 1

            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0")

            document.getElementById("min").innerText = min;
            document.getElementById("sec").innerText = sec;
            
        }
    }, 1000)
}