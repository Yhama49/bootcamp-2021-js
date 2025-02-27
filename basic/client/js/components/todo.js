class Todo {
  constructor(parent, { id, name, done }) {
    this.parent = parent;
    this.props = { id, name, done };
    this.mounted = false;
  }

  mount() {
    if (this.mounted) return;
    // TODO: ここにTODOの削除ボタンが押されたときの処理を追記
    
    // TODO: ここにTODOのチェックボックスが押されたときの処理を追記
    const updateElements = document.getElementsByClassName("todo-toggle");
    console.log(updateElements);

    // 解決できなかったところ：なぜかここが0になる。
    console.log(updateElements.length);

    for (var i = 0; i < updateElements.length; i++) {
      console.log(i);
      console.log(updateElements[i]);
      // 解決できなかったところ：lengthが0になるので、この処理に入らない。ここでイベント登録したかった。
    }

    this.mounted = true;
  }

  render() {
    const { id, name, done } = this.props;
    const next = document.createElement("li");
    next.className = "todo-item";
    next.innerHTML = `
      <label class="todo-toggle__container">
        <input
          data-todo-id="${id}"
          type="checkbox"
          class="todo-toggle"
          value="checked"
          ${done ? "checked" : ""}
        />
        <span class="todo-toggle__checkmark"></span>
      </label>
      <div class="todo-name">${name}</div>
      <div data-todo-id="${id}" class="todo-remove-button">x</div>
    `;
    if (!this.element) {
      this.parent.appendChild(next);
    } else {
      this.parent.replaceChild(this.element, next);
    }
    this.element = next;
    this.mounted = false;
    this.mount();
  }
}

export default Todo;
