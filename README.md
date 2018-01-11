# Blockchain-Javascript-ES6-module
A simple blockchain with javascript

## Usage

### initialize
Initialize the Blockchain. Save your encrypter function in ```window.encrypter```

```js
window.encrypter = sha256(); /* your encrypter function */
let blockchain = new Blockchain();
```

### add Data

```js
blockchain.addBlock('data');
```

### check integrity

```js
blockchain.isChainValid()
/* returns true or false */
```