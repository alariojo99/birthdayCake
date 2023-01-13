
const container = document.getElementById('container')

const cakeBtn = document.getElementById('cake-btn')
const candleBtn = document.getElementById('candle-btn')
const lighterBtn = document.getElementById('lighter-btn')
const removeBtn = document.getElementById('remove-btn')

const blowBtn = document.getElementById('blow-btn')


let buttonClicked = ''

cakeBtn.addEventListener('click', function(){
    buttonClicked = 'cakeBtn'
})

candleBtn.addEventListener('click', function(){
    buttonClicked = 'candleBtn'
})

lighterBtn.addEventListener('click', function(){
    buttonClicked = 'lighterBtn'
})

removeBtn.addEventListener('click', function(){
    buttonClicked = 'removeBtn'
})


blowBtn.addEventListener('click', function(){
    buttonClicked = 'blowBtn'
})


container.addEventListener('click', function(e){
    if ((buttonClicked === 'cakeBtn')&&(e.target.matches('button')===false)){
        const cake = document.createElement('img')
        cake.src='img/chocolatecake_nb2.png'
        cake.setAttribute('class', 'cake')
        cake.style.left = (e.x-260) + 'px'
        cake.style.top = (e.y-720) + 'px'

        container.append(cake)
    }else if ((buttonClicked === 'candleBtn')&&(e.target.matches('button')===false)&&(e.target.className === 'cake')){
        const candle = document.createElement('img')
        candle.src = 'img/candle2.png'
        candle.setAttribute('class','candle')
        candle.style.left = (e.x-14) + 'px'
        candle.style.top = (e.y-112) + 'px'

        container.append(candle)
    }else if ((buttonClicked === 'lighterBtn')&&(e.target.matches('button')===false)&&(e.target.className === 'candle')){
        const light = document.createElement('img')
        light.src = 'img/flame.png'
        light.setAttribute('class','light')
        light.style.left = (e.x-15) + 'px'
        light.style.top = (e.y-50) + 'px'

        container.append(light)
    }else if ((buttonClicked === 'removeBtn')&&(e.target.matches('button')===false)){
        if((e.target.className==='light')||(e.target.className==='candle')||(e.target.className==='cake')){
            console.log(e.target)
            e.target.remove()
        }
    }else if(buttonClicked === 'blowBtn'){

        const lights = document.querySelectorAll('.light')


        for(let i=0; i <lights.length; i++){
            lights[i].src = 'img/humo.png'
            lights[i].setAttribute('class','light')
            lights[i].classList.toggle('smoke')
            
        }

    }
})

//Apagar velas
function deleteLights(){
    const lights = document.querySelectorAll('.light')

    for(let i=0; i <lights.length; i++){
        lights[i].remove()
    }

}

