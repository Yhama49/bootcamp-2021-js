import store from "../store.js";
import { createTodoAction} from "../flux/index.js";

class TodoForm {
  constructor() {
    this.button = document.querySelector(".todo-form__submit");
    this.form = document.querySelector(".todo-form__input");
  }

  mount() {
    //  作成ボタンが押されたら todo を作成するような処理を追記する
    const submit = document.getElementById("submit");
    submit.addEventListener("click", function() {
      const name = document.getElementById("name");
      store.dispatch(createTodoAction(name.value));
    });
  }
}

export default TodoForm;
