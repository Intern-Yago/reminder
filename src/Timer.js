const Timer = {
    time: 0.1*60,
    currentTimer: 0,
    interval:null,
    init(){
        Timer.currentTimer = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },

    countdown(){
        Timer.currentTimer--
        console.log(Timer.currentTimer)
        if(Timer.currentTimer === 0){
            clearInterval(Timer.interval)
            return
        }
    }
}

export{Timer}