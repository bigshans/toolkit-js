# API for `json`

## `ptyLog`

Usage:

```javascript
ptyLog({hello: 'world'});
/*
{
  "hello": "world"
}
*/
```

## `JSONClone`

```javascript
const a = { k: 1 };
const b = JSONClone(a);
b.k++;
console.log(a.k !== b.k); // true
```
