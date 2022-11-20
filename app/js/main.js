const panel = document.querySelector(".main-left__panel")
const panelBtn = document.querySelector(".header__button")

// panelBtn.addEventListener("click",()=>{
//     panel.classList.add('main-left__panel-active')
//     if(panel.classList.contains('main-left__panel-active'))
//         panel.classList.remove('main-left__panel-active')
// });
panelBtn.addEventListener("click",()=>{
    if(panel.classList.contains('main-left__panel-active'))
        panel.classList.remove('main-left__panel-active')
    else{
        panel.classList.add('main-left__panel-active')
    }
});
