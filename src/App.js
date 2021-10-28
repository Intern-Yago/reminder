import { Notifyer } from "./Notifyer.js"
import { Timer } from "./Timer.js"
import { Emitter } from "./Emitter.js"

const App = {
    async start(){
        try{
            const time = 25 * 60
            Timer.init(time)
            await Notifyer.init()

            Notifyer.notify({
                title: "Recado EsPCEx",
                body: "Acorda para vida e vai estudar, vagabundo"
            })
        }catch(err){
            console.log(err.message)
        }
    }
}

export{App}