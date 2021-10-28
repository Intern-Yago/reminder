import { View } from "./View.js"
import { Emitter } from "./Emitter.js"

const Timer = {
    time: 60*60,
    currentTimer: 0,
    interval:null,

    timeToMinutes: time => Math.floor(time/60),
    timeToSeconds: time => time%60,

    formatTime: time => String(time).padStart(2, "0"),

    init(time){
        Emitter.emit("countdown-start")
        Timer.time = time || Timer.time
        Timer.currentTimer = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)
    },

    countdown(){
        Timer.currentTimer--

        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTimer))
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTimer))

        View.render({
            minutes,
            seconds
        })

        if(Timer.currentTimer === 0){
            clearInterval(Timer.interval)
            Emitter.emit("countdown-end")
            return
        }
    }
}

export{Timer}