class Item{
    constructor(selector){
        this.selector = document.querySelector(selector)
    }
}
class Slider extends Item{
    constructor(options){
        super(options.selector)
        
        this.name = options.name
        this.transition = options.transition
        this.direction = options.direction
        this.autoplay = options.autoplay
        this.interval = options.interval
    }
}
class Button extends Item{
    constructor(options){
        super(options.selector)
    }
}
class SliderBlock extends Item{
    constructor(options){
        super(options.selector)

        this.selector.style.transform = options.transform
        this.selector.style.transition = options.transition
        this.selector.style.flexDirection = options.direction
    }
}

const tr = 450
let t = -200
const tr1 = 230
let t1 = 90


let X = 'row'
let Y = 'column'



const slider = new Slider({
    selector: '.slider',
    name: 'slider',
    transition: 1,
    direction: X,
    autoplay: true,
    interval: 5000
})


const sliderBlock = new SliderBlock({
    selector: '.slider__block',
    transform: `translate(${t}px, 90px)`,
    transition: `${slider.transition}s`,
    direction: slider.direction
})


const next = new Button({
    selector: '.slider__button-next'
})
const prev = new Button({
    selector: '.slider__button-prev'
})


next.selector.addEventListener('click', function(){
    nextF()
})
prev.selector.addEventListener('click', function(){
    prevF()
})

function nextF(){
    if(slider.direction == 'row'){
        t = t - tr
        sliderBlock.selector.style.transform = `translate(${t}px, 90px)`
    }else if(slider.direction == 'column'){
        t1 = t1 - tr1
        sliderBlock.selector.style.transform = `translate(-200px, ${t1}px)`
    }
}
function prevF(){
    if(slider.direction == 'row'){
        t = t + tr
        sliderBlock.selector.style.transform = `translate(${t}px, 90px)`
    }else if(slider.direction == 'column'){
        t1 = t1 + tr1
        sliderBlock.selector.style.transform = `translate(-200px, ${t1}px)`
    }
}
if(slider.autoplay == true){
    function auto(){
        nextF()
        setTimeout(auto, slider.interval)
    }
    setTimeout(auto, slider.interval)
}