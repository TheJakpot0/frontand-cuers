function click(index){
    console.log(index)
}

for (let i = 0; i < 5 ; i++){
 let block = document.createElement("button")

    block.style.marginRight = '20px'
    block.innerText = `SESH ${i}`

    block.addEventListener('click', function(){
        click(i);
    })

    document.body.appendChild(block)
}

const scoreboard = document.querySelector('.scoreboard')

let newScor = scoreboard.cloneNode()

document.scoreboard.appendChild(newScor)