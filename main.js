class Item{
    constructor(selector, sliderBlock, next, prev){
        this.selector = document.querySelector(selector)
        this.sliderBlock = document.querySelector(sliderBlock)
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
    }
}
class Slider extends Item{
    constructor(options){
        super(options.selector, options.sliderBlock, options.next, options.prev)
        
        this.name = options.name
        this.transition = options.transition
        this.direction = options.direction
        this.autoplay = options.autoplay
        this.interval = options.interval

        this.sliderBlock.style.transform = options.transform
        this.sliderBlock.style.transition = `${options.transition}s`
        this.sliderBlock.style.flexDirection = options.direction

        this.t = -200
        this.tr = 450
        this.t1 = 90
        this.tr1 = 230


        if(this.autoplay == true){
            function auto(){
                slider.nextF()
                setTimeout(auto, options.interval)
            }
            setTimeout(auto, options.interval)
        }

        
        this.next.addEventListener('click', function(){
            slider.nextF()
        })
        this.prev.addEventListener('click', function(){
            slider.prevF()
        })
    }
    nextF(){
        if(slider.direction == 'row'){
            this.t = this.t - this.tr
            this.sliderBlock.style.transform = `translate(${this.t}px, 90px)`
        }else if(slider.direction == 'column'){
            this.t1 = this.t1 - this.tr1
            this.sliderBlock.style.transform = `translate(-200px, ${this.t1}px)`
        }
    }
    prevF(){
        if(slider.direction == 'row'){
            this.t = this.t + this.tr
            this.sliderBlock.style.transform = `translate(${this.t}px, 90px)`
        }else if(slider.direction == 'column'){
            this.t1 = this.t1 + this.tr1
            this.sliderBlock.style.transform = `translate(-200px, ${this.t1}px)`
        }
    }
}


const slider = new Slider({
    selector: '.slider',
    sliderBlock: '.slider__block',
    next: '.slider__button-next',
    prev: '.slider__button-prev',
    name: 'slider',
    transition: 1,
    direction: 'row',
    autoplay: true,
    interval: 5000,
})