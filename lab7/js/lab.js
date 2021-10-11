
/**
 * Author:   Henry
 * Created:   9/26/2021
 * public domain
 *
 *
 **/


function sortUserName() {
  var userName = window.prompt("Hi please enter you name so I can fix it");
  console.log("username :", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

}

document.writeln("Hey I have fixed your name: ", sortUserName(),"</br>")
