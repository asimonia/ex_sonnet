var sonnet = document.getElementById("sonnet").innerHTML;

// Find and output the starting position of the word "orphans"
console.log(sonnet.indexOf("orphans"));


// Output the number of characters in the sonnet
console.log(sonnet.length);


// Replace the first occurance of the string "winter" with "yuletide"
console.log(sonnet.replace('winter', 'yultide'));


// replace all occurrences of the string 
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

var newstring = replaceAll(sonnet, ' the ', ' a large ');

// Set the content of the sonnet div with the new string

function changeIt () {
	var getSonnet = document.getElementById("sonnet");
	getSonnet.innerHTML = newstring;
}


