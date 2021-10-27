import { View } from "./View.js"

const Timer = {
    time: 0.1*60,
    currentTimer: 0,
    interval:null,

    timeToMinutes: time => Math.floor(time/60),
    timeToSeconds: time => time%60,

    init(){
        Timer.currentTimer = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },

    countdown(){
        Timer.currentTimer--
        console.log(Timer.currentTimer)

        View.render({
            minutes: 25,
            seconds: 10
        })

        if(Timer.currentTimer === 0){
            clearInterval(Timer.interval)
            return
        }
    }
}

export{Timer}