window.addEventListener("load", ()=>{
    // console.log("Hi");
    const open = document.querySelector("#open")
    // console.log(open)
    const detail = document.querySelector("#detail")
    const closeBtn = document.querySelector("#close")
    open.addEventListener("click", ()=>{
        detail.style.display = "block"
        // 스타일속성에서 디스플레이 속성에서 = 할당해라 할당이 = 이거임. 
        open.style.display = "none"
    })
    closeBtn.addEventListener("click", ()=>{
        detail.style.display = "none"
        open.style.display = "block"
        // open.style.
    })

})
// 윈도우 다 읽고 난 다음에 실행해라, defer를 안쓰고 하는법 ()={읽는다는 전제를 가져가야하는거니 여기 안에서 작업 해야한다}