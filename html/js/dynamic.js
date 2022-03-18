
// Sets the width of the side navigation box
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}

// Sets the width of the side navigation to 0 (when you close it)
function closeNav(){
    document.getElementById("mySidenav"),style.width = "0";

}

// Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  // Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  //liked to button on index page
  
function rateMyCat(){
  let output = '';
  let rating = prompt(`On a scale of 1 to 5, how cute are my cats?`)

  for(let i = 0; i < rating; i = i + 1){

    output = output + '<img src="js/meowterSpace.jpg" height="550px">';

  }
  
  return document.write(output);

}
