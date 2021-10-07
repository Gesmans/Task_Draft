


// Addition of the Complete "tick" button
// var tick = document.getElementById("tasks");
//tick.addEventListener('click', function(ev) {
 // if(ev.target.tagName === "LI") {
  //  ev.target.classList.toggle("fa-check");
 // } 
//}, false);


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




