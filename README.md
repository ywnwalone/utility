



## pad0()

> 문자열 앞에 0 또는 원하는 문자를 원하는 갯수만큼 붙여주는 함수입니다.

```javascript
var str = "123";
console.log(str.pad0(4));       //  0000123
console.log(str.pad0(2));       //  00123
console.log(str.pad0(3,'a'));   //  aaa123
console.log(str.pad0(2,'^'));   //  ^^123
console.log(str.pad0('a'));     //  Error: "a" is NOT integer type...
console.log(str.pad0(2,'aa'));  //  Error: "aa" must be composed 1 character...
```

## isHex()

> 문자열이 16진수인지 판별하는 함수입니다.

```js
console.log('ffffff'.isHex());      //  true
console.log('FfFfFf'.isHex());      //  true
console.log('123'.isHex());         //  false
console.log('123123'.isHex());      //  true
console.log('1q2w3e'.isHex());      //  false
```

## Hex2Dec()

> 16진수 문자열을 10진수 문자열로 변환하는 함수입니다.

```js
console.log('ff'.Hex2Dec());    //  255
console.log('f'.Hex2Dec());     //  15
```

## Dec2Hex()

> 10진수 문자열을 16진수 문자열로 변환하는 함수입니다.

```js
console.log('10'.Dec2Hex());    //  a
console.log('255'.Dec2Hex());   //  ff
```


## convertColorFormat()

> RGB포맷을 16진수 포맷으로, 16진수 포맷을 RGB 포맷으로 변환하는 함수입니다.

```js
var rgb = 'RGB(0, 0, 0)';
var hex = '#ffffff';

console.log(rgb.convertColorFormat());      //  #000000
console.log(hex.convertColorFormat());      //  rgb(255, 255, 255);
console.log(rgb.convertColorFormat().convertColorFormat()); //  rgb(0, 0, 0);

```

## commaFormat()

> 숫자를 세자리씩 끊어서 ,를 붙여준다.

```js

console.log('123456'.commaFormat());        //  123,456
console.log('1234'.commaFormat());          //  1,234
```

## replaceAll(a,b)

> 바꾸고 싶은 모든 문자를 치환해준다.

```js

console.log('123123'.replaceAll('1','_'));      //  _23_23
console.log('abcdefg'.replaceAll('abc','^^^')); //  ^^^defg
```

## someTimeAgo()

> 몇 년전, 몇 달전, 며칠 전, 몇시간 전, 몇 분전, 몇 초전

```js
console.log('2017-12-10'.someTimeAgo());        // 1일 전
console.log('2017-11-10'.someTimeAgo());        // 1달 전
console.log('2016-12-10'.someTimeAgo());        // 1년 전
```