
/**
 * Author:   Henry
 * Created:   9/20/2021
 * public domain
 *
 *
 **/
myTransport = ["Car", "Bus"];

myMainRide = {
 make : "Honda",
 model : "Odyssey",
 color : "Blue",
 year : 2010,
 age : function(){
   return 2021- year;
 }
}
document.writeln("Getting around: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
