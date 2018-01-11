# Blockchain-Javascript-ES6-module
A simple blockchain with javascript

## Usage
Save your encrypter function in ```window.encrypter```

### initialize
Initialize the Blockchain.

```js
window.encrypter = sha256(); /* your encrypter function */
let blockchain = new Blockchain(); /* Blockchain is an Array. */
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