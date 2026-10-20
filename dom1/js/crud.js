//html요소 가져오기

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const count = document.querySelector("#count");
// 할일 데이터를 저장하는 배열
let tasks = [
  {
    id: 1,
    text: "HTML 공부하기",
    done: false,
  },
  {
    id: 2,
    text: "CSS 공부하기",
    done: true,
  },
  // <객체 id="1" text= "HTML 공부하기" done="false" 로 보면 좋을거같다?>
];
// 다음에 사용할 id 번호
let nextId = 3;

// R - 목록 출력 (Read)
function randerTasks() {
  // console.log("read"); 밑에 호출 안하고 콘솔 하면 안뜸.
  // 기존 화면 비우기 (초기화)
  taskList.innerHTML = "";
  // 배열의 데이터를 하나씩 화면에 출력
  tasks.forEach((task) => {
    // console.log(task); 확인 완료
    const liE = document.createElement("li");
    // console.log(li); 꺼낸갯수만큼 나온다
    const spanE = document.createElement("span");
    spanE.className = "task-text";
    spanE.textContent = task.text;
    // 완료 여부에 따라 클래스 추가
    if (task.done) {
      spanE.classList.add("done");
    }
    // 추가 버튼을 누르면 li와 span을 집어넣어야한다.
    // 완료 체크 버튼
    const checkBtn = document.createElement("button");
    // console.log(checkBtn);
    // 삼합연산자 if else 를 뜻함
    checkBtn.textContent = task.done ? "완료 취소 " : "완료";
    // 불리언값이 머임
    // done이 true이라면 완료취소, false라면 완료
    // 완료 체크 버튼 클릭시 함수
    checkBtn.addEventListener("click", () => {
      task.done = !task.done;
      // console.log(task.done);
      randerTasks();
      // true <=> false
    });

    // 수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit-btn";
    console.log(editBtn);
    // 수정 버튼 클릭시 함수
    editBtn.addEventListener("click", () => {
      const nextText = prompt("수정 할 내용을 입력하세요.", task.text);
      console.log(nextText);
      //   task.text = nextText;
      if (nextText !== null && nextText.trim() !== "") {
        task.text = nextText;
      }
      randerTasks();
    });

    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-btn";
    console.log(deleteBtn);
    // 삭제 버튼 클릭시 함수
    deleteBtn.addEventListener("click", () => {
      const ok = confirm("정말 삭제 할까요?");
      if (ok) {
        tasks = tasks.filter((item) => {
          // 현재 삭제하려는 할 일을 제외하고 나머지만 남기기
          return item.id !== task.id;
          // return - 결과를 돌려준다.
        });

        // 걸러내겠다? 필터링 하겠다?
        randerTasks();
      }
    });

    // 버튼 담을 영역
    const actions = document.createElement("div");
    //목록에 내용과 버튼 넣기
    actions.className = "actions";
    actions.append(checkBtn, editBtn, deleteBtn);
    // actions.appendChild() 차일드 생략 가능
    console.log(actions);

    liE.append(spanE, actions);
    console.log(liE);
    taskList.append(liE);
  });
  // 전체 개수와 완료 개수
  const doneCount = tasks.filter((task) => {
    return task.done;
  }).length;
  console.log(doneCount);
  count.textContent = `전체 ${tasks.length}개 / 완료 ${doneCount}개`;
}

// C- 새 할일 추가
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // form 제출시 submit 이벤트로 인식을 하기때문에 새로고침이 발생한다. preventDefault 해야 새로고침을 막는다.
  const text = taskInput.value.trim();
  // 트림을 하지 않으면 띄어쓰기도 출력된다.
  // console.log(text);
  // 빈내용은 등록하지 않는 조건문
  if (text === "") {
    alert("할 일을 입력 하세요.");
    return;
    // 이 화면이 뜬 해당내용은 종료시켜라
  }
  //배열에 새 객체 추가
  tasks.push({
    id: nextId,
    text: text,
    done: false,
  });
  // 배열에 넣어라, 추가해라
  console.log(tasks);
  nextId++;
  //입력창 지우기
  taskInput.value = "";
  // 변경된 배열을 화면에 출력
  randerTasks();
});
// 처음 화면 출력
randerTasks();
// 한번 이렇게 호출해줘야 가진 기능을 실행한다.
// console.log(tasks.length);
