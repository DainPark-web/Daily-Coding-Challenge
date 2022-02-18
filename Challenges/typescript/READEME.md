compile: 
```
tsc (fileName)
tsc -w (fileName) //automatisch
```

vscode error
```
tsc --init
```

```
"scripts": {
    "start": "tsc-watch --onSuccess \" node Challenges/typescript/dist/index.js \""
  },
  "devDependencies": {
    "tsc-watch": "^4.6.0"
  },
  "dependencies": {
    "@types/node": "^17.0.18",
    "ts-node": "^10.5.0",
    "typescript": "^4.5.5"
  }

```


```
"outDir": "./Challenges/typescript/dist",    


"include": ["./Challenges/typescript/src/**/*"],
  "exclude": ["node_modules"]

```

