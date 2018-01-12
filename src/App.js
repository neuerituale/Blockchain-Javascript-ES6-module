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
import Blockchain from "./Blockchain.js";

export default class App {

	constructor (){

		// encrypter global
		window.myHashFunction = sha256;

		// Blockchain
		this.blockchain = new Blockchain();

		// Buttons
		this.buttonValidate = document.getElementById('button-validate');
		this.buttonManipulate = document.getElementById('button-manipulate');
		this.buttonAdd = document.getElementById('button-add');

		// States
		this.stateValidate = document.getElementById('state-validate');
		this.stateManipulate = document.getElementById('state-manipulate');
		this.stateAdd = document.getElementById('state-add');

		// Other
		this.console = document.getElementById('console');
		this.data = document.getElementById('data');

		// Add events
		this.events();

		// Show
		this.showBlockchain();
	}

	events(){

		// Check Validation
		this.buttonValidate.addEventListener('click', (e) => {

			if(this.blockchain.isChainValid()) {
				this.stateValidate.classList.remove('error');
				this.stateValidate.classList.add('ok');
				this.stateValidate.innerHTML = 'Blockchain is valid';
			} else {
				this.stateValidate.classList.remove('ok');
				this.stateValidate.classList.add('error');
				this.stateValidate.innerHTML = 'Blockchain is invalid';
			}

		});

		// Add Data to Blockchain
		this.buttonAdd.addEventListener('click', (e) => {

			if(this.data.value) {

				// add to blockchain
				this.blockchain.addBlock(this.data.value);

				// clear data
				this.data.value = '';

				// set state
				this.stateAdd.innerHTML = 'data added.';

				// update console
				this.showBlockchain()

			} else {
				this.stateAdd.innerHTML = 'please insert Data.'
			}

		});

		// manipulate Data
		this.buttonManipulate.addEventListener('click', (e) => {

			if(this.blockchain.length > 1) {

				// Manipulate
				this.blockchain[1].data = '********** DANGER !!!11 **********';

				// state
				this.stateManipulate.innerHTML = 'data manipulated';

				// update console
				this.showBlockchain()

			} else {
				this.stateManipulate.innerHTML = 'please insert Data before.'
			}

		});

	}

	/**
	 * update Console
	 */
	showBlockchain(){
		this.console.innerHTML = JSON.stringify(this.blockchain, false, 4);
	}

}

// Run App
window.app = new App();