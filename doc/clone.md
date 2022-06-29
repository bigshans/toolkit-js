# API for `clone`

## `dpClone`

Usage:

```javascript
const src = {
    b: 12,
    a: (b) => {
        console.log(b);
    }
};

const target = dpClone(src);
src.b = 13;
target.a(target.b); // 12
```

Deep copy.
