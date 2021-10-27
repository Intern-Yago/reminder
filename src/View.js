const View = {
    render({minutes,seconds}){
        const cronometro = document.getElementById("cronometro")
        cronometro.innerHTML= `
        <p>Lembrete em...</p>
        <span>${minutes}:${seconds}</span>
        `
    }
}

export {View}