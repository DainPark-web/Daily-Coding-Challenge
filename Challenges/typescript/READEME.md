compile: 
```
tsc (fileName)
tsc -w (fileName) //automatisch
```

vscode error
```
tsc --init
```



# Tip
## new Set between Typescript and Javascript
```ts
//typescript
Array.from(new Set([1,2,3,4,5]));
```

```javascript
//javascript
[...new Set([1,2,3,4,5])]
```