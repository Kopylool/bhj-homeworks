class TodoList {
    constructor(taskListClass,inputClass,buttonClass) {
        this.container = document.querySelector(taskListClass);
        this.input = document.querySelector(inputClass);
        this.button = document.querySelector(buttonClass);
        this.Storage = window.localStorage;
        this.input.required = true;
        this.key = 0;
        this.InputText();
        this.ButtonInput();
        this.GetItemsFromStorage();
    }


    
GetItemsFromStorage() {
    for (let i=0;i<100;i++) {
        let el = this.Storage.getItem(String(i));
        if (el != null) {
            this.key=i;
            let task = document.createElement("div");
            task.innerHTML = JSON.parse(el);
            task.className = "task";
            task.dataset.key = i;
            this.InitialTask(task);
            this.container.appendChild(task);
        }
    }
}
CheckInputValid() {
    if (this.input.value.trim() != '') {
        return true;
    }
    this.input.value = '';
    return false;
}

ClearInput() {
    this.input.value = '';
}

InitialTask(task) {
    let aTask = task.querySelector(".task__remove");
    aTask.onclick = () => {
        this.removeTask(task);
        return false;
    } 
}

    InputText() {
        this.input.addEventListener("keydown", (e) => {
            if (e.key==="Enter") {
                if (this.CheckInputValid()) {
                    this.addTask();
                }  
            }
        });
    }

    ButtonInput() {
        this.button.addEventListener("click",e => {
            if (this.CheckInputValid()) {
                this.addTask();
            } 
        })
    }

    removeTask(el) {
        this.container.removeChild(el);
        this.Storage.removeItem(String(el.dataset.key));
    }


    addTask() {
        let messageText = this.input.value;
        let message = document.createElement("div");
        message.className = "task";
        message.dataset.key = this.key;
        message.innerHTML = `<div class="task__title">${messageText}
      </div>
      <a href="#" class="task__remove">&times;</a>`;
      this.InitialTask(message);
      try {
        this.key+=1;
        this.Storage.setItem(this.key,JSON.stringify(message.innerHTML));
        this.container.appendChild(message);
        this.ClearInput();
      } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
         alert('Превышен лимит');
         this.Storage.clear();
        }
      }
    }

}
new TodoList(".tasks__list",".tasks__input",".tasks__add");