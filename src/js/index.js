const t1 = gsap.timeline({paused: true}); 
const container = document.querySelector(`.container`); 

t1.to(container, {clipPath: `polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)`})
t1.to(container, {clipPath: `polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)`}, `+=1`)

container.addEventListener(`mouseover`, () => {
    t1.play()
})