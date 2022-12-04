


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


const diagramm = ()=>{
    const ctx = document.getElementById("myChart").getContext("2d");


        const labels=[
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ];


        const data = {
            labels,
            datasets:[
                {
                    data:[21,18,19,12,20,28,22],
                    label: "Registered",
                    backgroundColor:"#F86549",
                    borderWidth:1,
                    borderRadius:75,
                    borderSkipped:false,
                    barPercentage:0.3,
                    
                },
                {
                    data:[42,29,31,25,39,37,29],
                    label: "Guest",
                    backgroundColor:"#EDEFEF",
                    borderWidth:1,
                    borderRadius:75,
                    borderSkipped:false,
                    barPercentage:0.3,
            },
        ],
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
            plugins: {
                legend:{
                    display:true,
                    align:"end",
                    labels:{
                        usePointStyle:true,
                        pointStyle:'circle',
                        display:true,
                        color:"#8E9FB9",
                        font:{
                            size:16,
                        },
                    },
                },
            },
            responsive: true,
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    ticks:{
                        color:"#AAB0C0"
                    },
                    stacked: true,
                    grid:{
                        display:false,
                    }
                },
                y: {
                    ticks:{
                        color:"#AAB0C0",
                        min: 10,
                        max: 40,
                        stepSize: 10
                    },
                    biginAtZero:true,
                    stacked: false,
                    grid:{
                        color: "#F5F4F9",
                    }
                }
            }
            }
        };

    const myChart = new Chart(ctx, config)

}

diagramm()
