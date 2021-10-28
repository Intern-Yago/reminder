const Emitter = {
    events:{},

    on(event, cb){
        Emitter.events[event] = Emitter.events[event] || [];
        Emitter.events[event].push(cb)
    },

    emit(event, ...rest){
        if(event in Emitter.events === false){
            return
        }
        
        Emitter.events[event].forEach((e) => {
            e(...rest)
        });
    }
}

Emitter.on('click',() => console.log("Clicou!"))

Emitter.events.click()

export {Emitter}