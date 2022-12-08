// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
modal.onclick = function(event) {
  console.log(event);
  if (event.target == modal) {
  modal.style.display = "none";
  }
}

document.getElementById('signbtn').onclick = function (){
  var user = document.getElementById('nameuser').value;
  document.getElementById('userlogged').textContent = user;
  modal.style.display = "none";
}

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }