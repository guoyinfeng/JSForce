/**
 * Created by YinFeng-Guo on 14-5-6.
 */
function testIndentation() {
    "use strict";
       var v1 = 0;
     var v2 = 1;
    if (v1 === v2) {
        console.log('2');
    }
    console.log('v1:' + v1);
    console.log('v2:' + v2);
}
testIndentation();