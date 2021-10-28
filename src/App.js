import { Notifyer } from "./Notifyer.js"
import { Timer } from "./Timer.js"
import { Emitter } from "./Emitter.js"

const App = {
    async start(){
        try{
            await Notifyer.init()

            Emitter.on("countdown-start",()=>{
                Notifyer.notify({
                    title: "Recado EsPCEx",
                    body: "Acorda para vida e vai estudar, vagabundo"
                })
            })
            
            Emitter.on("countdown-end", ()=>{
                Timer.init()
            })

            Timer.init(0.2*60)
            
        }catch(err){
            console.log(err.message)
        }
    }
}

export{App}