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


/*
    RGB => HEX || HEX => RGB
*/
String.prototype.convertColorFormat = function(){
    var s = this;
    if(s[0] == '#'){
        if(s.length != 7){
            console.error('Hex color must be composed 6 characters... ex)#FFFAAA ');
        }else{
            //s.substring(1,7) 이 hex인지 판별
            var hex = s.substring(1,7);
            if(!hex.isHex()){
                console.error(`${s} is not hexadecimal...`)
            }else{
                return `rgb(${hex.substring(0,2).Hex2Dec()}, ${hex.substring(2,4).Hex2Dec()}, ${hex.substring(4,6).Hex2Dec()})`;
            }
        }
    }else if(s.substring(0,3) == 'rgb' || s.substring(0,3) == 'RGB'){
        // length로 판별 불가. 
        if(s[4] != '(' || s[s.length] != ')'){
            console.error('It is not RGB format..');
        }
    }else{
        console.error('Check your String...');
    }
}
String.prototype.isHex = function(){
    var s = this, regex = /[0-9A-Fa-f]{6}/g;
    if(regex.test(s)){
        return true;
    }else{
        return false;
    }
}

String.prototype.Hex2Dec = function(){
    var s = this;
    return parseInt(s, 16);
}