const t1 = gsap.timeline({paused: true, default: {duration: .05, ease: `Elastic.easeOut.config(1, 0.3)`}}); 
const container = document.querySelector(`.container`); 

t1.to(container, {clipPath: `polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)`})
t1.to( `.container2`,{clipPath: `polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)`}, `+=1`)
t1.to(container, {clipPath: `polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)`}, `+=0.5`)
t1.to(`h1`, {color: `white`})
t1.to(`.container2`, {clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)` })
container.addEventListener(`mouseover`, () => {
    t1.play()
})