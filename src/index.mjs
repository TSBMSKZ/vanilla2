import "./styles.css";

const onClickAdd = () => {
  //テキストの値を変数に格納
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //divタグ生成
  const div = document.createElement("div");
  console.log(div);
};
document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
