



## pad0()

> 문자열 앞에 0 또는 원하는 문자를 원하는 갯수만큼 붙여주는 함수입니다.

```javascript
String.prototype.pad0 = function(len, c){
    let s = this, c = c || '0';
    while(s.length < len){
        s = c + s;
    }
    return s;
}
```

## isHex()

> 문자열이 16진수인지 판별하는 함수입니다.

```js
String.prototype.isHex = function(){
    var s = this, regex = /[0-9A-Fa-f]{6}/g;
    if(regex.test(s)){
        return true;
    }else{
        return false;
    }
}
```

## Hex2Dec()

> 16진수 문자열을 10진수 문자열로 변환하는 함수입니다.

```js
String.prototype.Hex2Dec = function(){
    var s = this;
    return parseInt(s, 16);
}
```

## Dec2Hex()

> 10진수 문자열을 16진수 문자열로 변환하는 함수입니다.

```js
String.prototype.Dec2Hex = function(){
    var s = this;
    return s.toString(16);
}
```


## convertColorFormat()

> RGB포맷을 16진수 포맷으로, 16진수 포맷을 RGB 포맷으로 변환하는 함수입니다.

```js
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
```