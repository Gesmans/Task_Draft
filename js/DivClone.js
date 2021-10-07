function newClone() {
    const lis = document.getElementById("sticky-list");  
    var area = document.createElement("div");

    var cln = `<li id="sticky-note" class="sticky">
    <a href="#" >
      <div id="sticky-delete" class="fa fa-trash" onclick="stickyDelete()"></div>
      <h2 contenteditable="true">To-Do List</h2>
      <img class="underline" src="/To-do List/Task_Draft/Images/Underline.png"/>
      <div class="float-container">
        <div id="error" class="error">Please enter a Task...</div>
        <form id="tasker-header" class="todo-form" onclick="addItem(event)">
          <input type="text" id="input-task" class="input" placeholder="Enter a Task..."/>
          <button type="submit" id="click" class="fa fa-plus" onclick="addTodo()"></button>
        </form>
      </div>
      <ul id="tasks" class="todo-items">
    
      </ul>
      <div class="sticky-footer">
        <p>You have<span class="pendingTasks"></span> Pending Tasks</p>
        <button onclick="removeArray()" type="button" class="button">Clear All</button>
      </div>
    </a>
  </li>`
  
  area.className = "alert";
    lis.appendChild(area).innerHTML = cln;
    console.log(lis);
    }

 