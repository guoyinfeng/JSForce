/**
 * Created by YinFeng-Guo on 14-4-29.
 */
exports.add = function(){
    var sum = 0,
        i = 0,
        args = arguments,
        l = args.length;
    while(i < l){
        sum += args[i++]
    }
    return sum;
}