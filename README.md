# Blockchain-Javascript-ES6-module
A simple blockchain with javascript as Node.js Module.
Use ```test.html``` to play around!

## Usage
Save your Hash function in ```window.myHashFunction```

### initialize
Initialize the Blockchain.

```js
window.myHashFunction = sha256(); /* your Hash function */
let blockchain = new Blockchain(); /* Blockchain extends Array. */
```

### add Data (create new Block)

```js
blockchain.addBlock('data');
```

### check integrity

```js
blockchain.isChainValid()
/* returns true or false */
```