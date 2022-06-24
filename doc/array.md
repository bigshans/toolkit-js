# API for `array`

## `ranger`

Usage:

```javascript
const arr = [1, 2, 3, 4, 5];
for (const i of ranger(3)) {
  console.log(arr[i]);
}

for (const i of ranger(2, 4)) {
  console.log(arr[i]);
}
```
