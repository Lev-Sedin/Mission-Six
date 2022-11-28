

const panelUse = () =>{
    const panel = document.querySelector(".main-left__panel")
    const panelBtn = document.querySelector(".header__button")

    panelBtn.addEventListener("click",()=>{
        if(panel.classList.contains('main-left__panel-active'))
            panel.classList.remove('main-left__panel-active')
        else{
            panel.classList.add('main-left__panel-active')
        }
    });
}

panelUse()

const tabFunc = () =>{
    const tabs = document.querySelectorAll(".continent-btn")
    const tabsTitle = document.querySelector(".slider-box__name")
    const tabsPrice = document.querySelector(".slider-box__price")
    const tabsImage = document.querySelector(".slider-box__icon")
    const tabsPlace = document.querySelector(".slider-box__country")
    const orange = document.querySelector(".continent-icon__active")

    const tabsOptions = [
        {
            name: "Italy",
            price: "$2,500",
            image: 'images/slider/europe/rome.jpeg',
            place:"Rome",
        },
        {
            name: "Phi Phi Islands",
            price: "$1,480",
            image: 'images/slider/indonesia/indonesia1.png',
            place:"Thailand",
        },
        {
            name: "New York",
            price: "$3,200",
            image: 'images/slider/america/ny.jpeg',
            place:"America",
        }
        
    ]

    const changeContent = (index) => {
        tabsTitle.textContent = `${tabsOptions[index].name}`
        tabsPrice.textContent = `${tabsOptions[index].price}`
        tabsImage.setAttribute("src", tabsOptions[index].image)
        tabsPlace.textContent = `${tabsOptions[index].place}`
    }


    const changeActiveTabs = ((indexClickedTab)=>{
        tabs.forEach((tab, index) =>{

            if(index === indexClickedTab){
                tab.classList.add("continent-btn__active")
            }else{
                tab.classList.remove("continent-btn__active")
            }
        })
        changeContent(indexClickedTab)
    })

    tabs.forEach((tab, index) =>{
        tab.addEventListener("click", ()=>{
            changeActiveTabs(index);
        })
    })

    changeContent(1)
}

tabFunc()

const slaider = ()=>{
    let offset  = 0 //смещение от левого края
    const slider = document.querySelector(".slider-boxs");
    console.log(slider)

    document.querySelector('.chapter-button__left').addEventListener("click",function(){
        offset = offset + 323;
        if (offset > 323){
            offset = 0
        }
        slider.style.left = -offset + "px"
    });
    document.querySelector('.chapter-button__right').addEventListener("click",function(){
        offset = offset - 323;
        if (offset < 0){
            offset = 323
        }
        slider.style.left = -offset + "px"
    });
}

slaider()