/**
 * Created by YinFeng-Guo on 14-5-5.
 */
var user = {
    "firstname":"Yinfneg",
    "lastname":"Guo",
    "age":20
}
var user1 = JSON.stringify(user);
var user2 = JSON.stringify(user, ["firstname","age","test"]);
var user3 = JSON.stringify(user, ["firstname","age"], "  ");
console.log('user::'+user1);
console.log('user::'+user2);
console.log('user::'+user3);
