function newClone() {
    const lis = document.getElementById("sticky-list");  
    var area = document.createElement("div");

    var cln = `<li id="sticky-note" class="sticky">
    <a href="#" >
      <div id="sticky-delete" class="fa fa-trash" onclick="stickyDelete()"></div>
      <h2 contenteditable="true">To-Do List</h2>
      <img class="underline" src="/To-do List/Images/Underline.png"/>
      <div class="float-container">
        <div id="error" class="error">Please enter a Task...</div>
        <div id="tasker-header" class="tasker-header">
          <input contenteditable
            type="text"
            id="input-task"
            class="input"
            placeholder="Enter a Task..."
          />
          <button onclick="newItem()" id="click" class="fa fa-plus"></button>
        </div>
      </div>
      <ul id="tasks"></ul>
      <div class="sticky-footer">
        <p>You have<span class="pendingTasks"></span> Pending Tasks</p>
        <button onclick="clearAll()" type="button" class="button">Clear All</button>
      </div>
    </a>
  </li>`
  
  area.className = "alert";
    lis.appendChild(area).innerHTML = cln;
    console.log(lis);
    }

 