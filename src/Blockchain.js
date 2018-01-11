/**
 * COPYRIGHT NOTICE
 *
 * Copyright (c) 2018 Neue Rituale GbR
 * @author Julian Winkel <code@neuerituale.com>
 * @version 1.0.0
 * @license MIT
 *
 * This file is part of the Blockchain project.
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

export class Block {

	constructor(key, timestamp, data, previousHash = ''){
		this.key = key;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}

	/**
	 * Calculate Hash
	 */
	calculateHash() {
		return window.encrypter(
			this.key +
			this.timestamp.toISOString() +
			JSON.stringify(this.data).toString() +
			this.previousHash
		).toString();
	}

}

export default class Blockchain extends Array{

	constructor() {
		super();
		this.push(Blockchain.createGenesisBlock());
	}

	/**
	 * Create A Genesis Block
	 * @returns {Block}
	 */
	static createGenesisBlock(){
		return new Block(0, new Date, 'Genesis Block', '0');
	}

	/**
	 * Return Last Block from Blockchain
	 * @returns {*}
	 */
	getLastBlock(){
		return this[this.length - 1];
	}

	/**
	 * Add a new Block to Blockchain
	 * @param data
	 * @returns {Block}
	 */
	addBlock(data){

		// create Block
		let block = new Block(
			this.length,
			new Date,
			data,
			this.getLastBlock().hash
		);

		this.push(block);
		return block;
	}

	/**
	 * Check Blockchain integrity
	 * @returns {boolean}
	 */
	isChainValid() {

		let previousBlock = '';

		return this.every((block, i) => {

			// Skip Genesis Block
			if(i === 0) { previousBlock = block; return true; }

			// Check current Block integrity
			if (block.hash !== block.calculateHash()) {
				return false;
			}

			// Check previous Block hash
			if (block.previousHash !== previousBlock.hash) {
				return false;
			}

			previousBlock = block;
			return true;

		});
	}

}
