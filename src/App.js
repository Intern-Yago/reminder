import { Notifyer } from "./Notifyer.js"
import { Timer } from "./Timer.js"

const App = {
    async start(){
        try{
            Timer.init()
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