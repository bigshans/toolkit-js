# toolkit-js

## Introduction

Here are some simple and useful functions that do not require additional dependencies.

## Install

```shell
npm install @bigshans/toolkit-js
# or
yarn add @bigshans/toolkit-js
# or
pnpm add @bigshans/toolkit-js
```

## Usage

Method 1:

```javascript
const { files } = require('@bigshans/toolkit-js');
const projectFiles = files.readFileRecursive(process.cwd());
```

Method 2:

```javascript
const { readFileRecursive } = require('@bigshans/toolkit-js');
const projectFiles = readFileRecursive(process.cwd());
```

Also supports typescript.

## API

- [files](./doc/files.md)
- [array](./doc/array.md)
- [json](./doc/json.md)
