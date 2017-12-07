/*
    var num = 9;
    console.log(num.pad0(4));   // 0009
*/
String.prototype.pad0 = function(len, c){
    var s = this, c = c || '0';
    while(s.length < len){
        s = c + s;
    }
    return s;
}