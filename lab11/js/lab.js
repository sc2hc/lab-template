
/**
 * Author:   Henry
 * Created:   10/17/2021
 * public domain
 *
 *
 **/

$("#output").html("<button id=my-button>Press me")
$("#my-button").click(function(){$("#output").append("<button id=my-button>Press me")})
