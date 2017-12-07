



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