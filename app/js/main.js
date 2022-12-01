

const panelUse = () =>{
    const panel = document.querySelector(".main-left__panel")
    const panelBtn = document.querySelector(".header__button")
    const info = document.querySelector(".main-left__info")
    console.log(info)


    panelBtn.addEventListener("click",function(){
        if (panel.classList.contains('main-left__panel-active')){
            info.classList.remove("main-left__info__active")
            panel.classList.remove('main-left__panel-active')
        }else{
            panel.classList.add('main-left__panel-active')
            info.classList.add("main-left__info__active")
        }
    })
}

panelUse()

const tabFunc = () =>{
    const tabs = document.querySelectorAll(".continent-btn")
    const infoTab = document.querySelectorAll('.slider-boxs')




    tabs.forEach(function(item){
        item.addEventListener("click",function(){
            let tab = item;
            let tabId = tab.getAttribute("data-tab")
            let tabZone = document.querySelector(tabId)


            if(! tab.classList.contains("continent-btn__active")){
                tabs.forEach(function(item){
                    item.classList.remove('continent-btn__active');
    
                });
                infoTab.forEach(function(item){
                    item.classList.remove('slider-boxs__active');
    
                });
    
                tab.classList.add('continent-btn__active');
                tabZone.classList.add('slider-boxs__active');
            }


        })
    })


}

tabFunc()

const slaider = ()=>{
    let offset  = 0 //смещение от левого края
    const slider = document.getElementById("tab-1");
 

    document.querySelector('.chapter-button__left').addEventListener("click",function(){
        offset = offset + 323;
        if (offset > 480){
            offset = 0
        }
        slider.style.left = -offset + "px"
    });
    document.querySelector('.chapter-button__right').addEventListener("click",function(){
        offset = offset - 323;
        if (offset < 0){
            offset = 480
        }
        slider.style.left = -offset + "px"
    });
}
slaider()

const slaider2 = ()=>{
    let offset  = 0 //смещение от левого края
    const slider = document.getElementById("tab-2");
    console.log(slider)

    document.querySelector('.chapter-button__left').addEventListener("click",function(){
        offset = offset + 323;
        if (offset > 480){
            offset = 0
        }
        slider.style.left = -offset + "px"
    });
    document.querySelector('.chapter-button__right').addEventListener("click",function(){
        offset = offset - 323;
        if (offset < 0){
            offset = 480
        }
        slider.style.left = -offset + "px"
    });
}
slaider2()

const slaider3 = ()=>{
    let offset  = 0 //смещение от левого края
    const slider = document.getElementById("tab-3");
    console.log(slider)

    document.querySelector('.chapter-button__left').addEventListener("click",function(){
        offset = offset + 323;
        if (offset > 480){
            offset = 0
        }
        slider.style.left = -offset + "px"
    });
    document.querySelector('.chapter-button__right').addEventListener("click",function(){
        offset = offset - 323;
        if (offset < 0){
            offset = 480
        }
        slider.style.left = -offset + "px"
    });
}
slaider3()