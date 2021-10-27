import { Notifyer } from "./Notifyer.js"

const App = {
    async start(){
        try{
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