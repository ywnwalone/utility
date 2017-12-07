



# pad0

```javascript
String.prototype.pad0 = function(len, c){
    let s = this, c = c || '0';
    while(s.length < len){
        s = c + s;
    }
    return s;
}
```