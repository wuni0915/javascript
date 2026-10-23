window.addEventListener("scroll", ()=>{
    const sections = document.querySelectorAll("section")
    const dots = document.querySelectorAll(".dot")
    // goTop
    const gotopBtn = document.querySelector("#goTop")
    // console.log(sections, dots);
    console.log(document.documentElement.scrollTop);
    // 제일 높은곳 = 0 기준, 원하는 높이 확인 가능
    if(document.documentElement.scrollTop > 600){
        gotopBtn.classList.add("active")
        // 콘솔에서 위치숫자가 600보다 클때
    }else {
        gotopBtn.classList.remove("active");
    }
    //gotop버튼 클릭시 위로 가기 함수 //근데 이건 #도 있지않나 > 600에갔을때 띄우게 하기위한 함수로 사용해서 안되는건거같다.
    gotopBtn.addEventListener("click", ()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
        //scrollTo( { 바로 이거 쓰는게 문법인가} )글구 알아서 트랜지션 먹나보다...라고 생각했는데 html 스크롤비헤비어 스무스로 해서 그랬다. 자바스크립트 behavior: "smooth"로도 가능
    })
    sections.forEach((section, index)=>{
        // console.log(section, index);
        // 섹션 영역이 화면위쪽에서 얼마나 떨어져 있는 지 확인
        const top = section.getBoundingClientRect().top;
        // const top = section.getBoundingClientRect() 영역이 브라우저의 화면의 맨위에서 얼마나 떨어져있는지 알려주는 메서드.
        // console.log(top);
        // 화면 위쪽에서 가까워지면 해당 메뉴 활성화를 시킨다.
        if( top < window.innerHeight / 2){
            dots.forEach((dot)=>{
                dot.classList.remove("active")
            })
            dots[index].classList.add("active")
        }
        
        
    })
    
})