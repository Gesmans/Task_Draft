
//Functionality of the Close "x" Button
var close = document.getElementsByClassName("fa fa-times");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Addition of the Complete "tick" button
var tick = document.getElementById("tasks");
tick.addEventListener('click', function(ev) {
  if(ev.target.tagName === "LI") {
    ev.target.classList.toggle("fa-check");
  } 
}, false);



// Allows the addtion of list items to each To-Do List
function newItem() { 
    var li = document.createElement("li");
    li.classList.add('list');
    var input = document.getElementById("input-task").value;
    var t = document.createTextNode(input);

    li.appendChild(t);
    if (input === '') {
        alert("You must write Somthing!!")
    } else {
        document.getElementById("tasks").appendChild(li);
    }

    //Adds the Close button to each new List Item
    input.value = "";
    var span = document.createElement("i");
    var txt = document.createTextNode("");
    span.className = "fa fa-times";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

//Pending Tasks Calulation 
function showTask() {
  var tasks = document.getElementById("tasks");

  
}



//Clear All Button Function
function clearAll() {
  var li = document.getElementById("tasks");
  while (li.firstChild) {
    li.removeChild(li.firstChild);
}
}


//Delete Sticky note

function stickyDelete() {
  var del = document.getElementById("sticky-note");
  del.remove()

}

