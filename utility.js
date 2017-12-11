/*
    var num = 9;
    console.log(num.pad0(4));   // 0009
*/
String.prototype.pad0 = function(len, c){
    var s = this, c = c || '0';
    if(!Number.isInteger(len)){
        console.error(`"${len}" is NOT integer type...`);
        return s;
    }
    if(c.toString().length!=1){
        console.error(`"${c}" must be composed 1 character...`);
        return s;
    }
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
            var hex = s.substring(1,7);
            if(!hex.isHex()){
                console.error(`${s} is not hexadecimal...`)
            }else{
                return `rgb(${hex.substring(0,2).Hex2Dec()}, ${hex.substring(2,4).Hex2Dec()}, ${hex.substring(4,6).Hex2Dec()})`;
            }
        }
    }else if(s.substring(0,3) == 'rgb' || s.substring(0,3) == 'RGB'){
        if(s[3] != '(' || s[s.length-1] != ')'){
            console.error(`${s} is not RGB format..`);
        }else{
            var rgb = s.substring(4,s.length-1).split(',');
            return `#${rgb[0].Dec2Hex()}${rgb[1].Dec2Hex()}${rgb[2].Dec2Hex()}`;
        }
    }else{
        console.error(`Check your String... ${s}`);
    }
    return false;
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
String.prototype.Dec2Hex = function(){
    var s = this;
    return Number(s).toString(16).pad0(2);
}
String.prototype.commaFormat = function(){
    var s = this;
    return Number.isInteger(s) ? s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : s;
}

String.prototype.replaceAll = function(before, after){
    var s = this;
    return s.split(before).join(after);
}

String.prototype.someTimeAgo = function(){
    var s = Date.parse(this);
    const SEC = 1000;
    const MIN = SEC * 60;
    const HOUR = MIN * 60;
    const DAY = HOUR * 24;
    const MONTH = DAY * 30;
    const YEAR = DAY * 365;
    
    var now = new Date();
    var gap = Date.parse(now) - s;

    var str = '';

    if(gap / YEAR >= 1 ){
        str = Math.floor(gap/YEAR)+'년 전';
    }else if(gap / MONTH >= 1){
        str = Math.floor(gap/MONTH)+'달 전';
    }else if(gap / DAY >= 1){
        str = Math.floor(gap/DAY)+'일 전';
    }else if(gap/HOUR >= 1){
        str = Math.floor(gap/HOUR)+'시간 전';
    }else if(gap/MIN >=1){
        str = Math.floor(gap/MIN)+'분 전';
    }else if(gap/SEC >=1){
        str = Math.floor(gap/SEC)+'초 전';
    }else{
        str = 'ERROR';
    }

    return str;
}