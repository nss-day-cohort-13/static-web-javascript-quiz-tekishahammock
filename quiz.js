
// JAVASCRIPT FOR MAKING OUR TREE GROW

// We want spaces to equal the tree height - 1.
// We want the tree characters to equal double the height - 1.
  // OR we want it to equal loopCount + 1
// Then we need to concatinate the whole thing to equal one line of code on the console log.

// EVENT LISTENER (ONLY APPLIES TO SUBMIT BUTTON)
var createTree = document.getElementById("button");
createTree.addEventListener("click", makeTree);

// FUNCTION FOR MAKING TREE GROW
function makeTree( event ) {
  // Only necessary because I put everything in a form
  event.preventDefault();
  // This app would have still worked without placing the form values in an object,
  // and leaving them as plain variables, but still need the practice for the future.
  var tree = {};
  tree.height = document.getElementById("height").value;
  tree.character = document.getElementById("character").value;

  // READING THE VALUES OF THE INPUTS AND DETERMINING WHAT TO DO
  // I wanted to force the user to enter the requested information,
  // so the app will execute alerts and display glaring red backgrounds
  // for all any missing inputs.

  // I recognize that my method for coloring the backgrounds dependant on the
  // "if statement" is probably a really crap way of doing it, but it works, so...
  if ( tree.height === '' ) {
    document.getElementById("height").style.backgroundColor = "red";
    alert("Please fill in the height so that we can make your tree grow!");
  } else if ( tree.character === '' ) {
    document.getElementById("character").style.backgroundColor = "red";
    alert("Please fill in a character so that we can make your tree grow!");
  } else if ( isNaN(tree.height) ) {
    document.getElementById("height").style.backgroundColor = "red";
    alert("Please give us a number for height!");
  } else {
    for ( var i = 0; i < tree.height; i++ ) {
      var myTree = ' '.repeat( tree.height - i ) + tree.character.repeat( ( i * 2 ) + 1 );
      document.getElementById("height").style.backgroundColor = "#fff";
      document.getElementById("character").style.backgroundColor = "#fff";
      console.log( myTree );
    }
  }
}
