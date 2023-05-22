import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);

}

// 未完了リストから指定の要素を削除
const delteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
}

// 未完了リストに追加
const createIncompleteList = (text) => {

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row"

  // pタグ生成
  const p = document.createElement("p");
  p.className = "task-name"
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素を取得
    const addCompleteTarget = completeButton.closest("li");
    console.log(addCompleteTarget);

    // TODO内容テキストを取得
    const addText = completeButton.previousElementSibling.innerText;

    // liタグ以下を初期化
    addCompleteTarget.textContent = null;

    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row"

    // pタグ生成
    const p = document.createElement("p");
    p.className = "task-name"
    p.innerText = text;

    // button(戻す)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {

      createIncompleteList(text);

      document.getElementById("complete-list").removeChild(backButton.closest("li"));
    });

    // DOMとして組み立て
    div.appendChild(p);
    div.appendChild(backButton);
    li.appendChild(div);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);

    // 押下されたボタンのリストを削除する
    delteFromIncompleteList(completeButton.closest("li"));
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押下されたボタンのリストを削除する
    delteFromIncompleteList(deleteButton.closest("li"));
  });

  // DOMとして組み立て
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

}


document.getElementById("add-button").addEventListener("click", () => onClickAdd());
