(function () {
  //создает и возвращает заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement("h2");
    appTitle.innerHTML = title;
    return appTitle;
  }
  //создание и возвращение формы для создания дела

  function createTodoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Введите название дела";
    buttonWrapper.classList.add("input-primary");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить дело";

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  //создание и возвращение списка

  function createTodoList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  function CreateTodoItem(name) {
    let item = document.createElement("li");
    let buttonGroup = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButoon = document.createElement("button");

    item.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    item.textContent = name;

    buttonGroup.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Готово";
    deleteButoon.classList.add("btn", "btn-danger");
    deleteButoon.textContent = "Удалить";

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButoon);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButoon,
    };
  };


  function createTodoApp(container, title = 'Список дел') {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!todoItemForm.input.value) {
        return;
      }
      let todoItem = CreateTodoItem(todoItemForm.input.value);

      todoItem.doneButton.addEventListener("click", function () {
        todoItem.item.classList.toggle("list-group-item-success");
      });
      todoItem.deleteButoon.addEventListener("click", function () {
        if (confirm("Вы уверены?")) {
          todoItem.item.remove();
        }
      });

      todoList.append(todoItem.item);
      //   todoList.append(CreateTodoItem(todoItemForm.input.value).item);
      todoItemForm.input.value = "";
    });
  }


  window.createTodoApp = createTodoApp;
})();
