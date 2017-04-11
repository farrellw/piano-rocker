import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'keyboard-component',
  templateUrl: "./keyboard.component.html",
  styleUrls: [ "./keyboard.component.css" ],
  host: {
        '(document:keypress)': 'handleKeyboardEvents($event)',
        '(document:keyup)': 'keyUpEvent($event)',
    }
})

export class KeyboardComponent  { 
	public key: Object;
	public notes: Object;

	constructor(){}

	ngOnInit() {
		this.key = {
			'a': false,
			's': false,
			'd': false,
			'f': false,
			'g': false,
			'h': false,
			'j': false,
			'k': false,
			'l': false,
			';': false,
		}

		this.notes = {
			'a': "../app/sounds/sounds/203470__tesabob2001__e3.mp3",
			's': "../app/sounds/sounds/203501__tesabob2001__f-3.mp3",
			'd': "../app/sounds/sounds/203493__tesabob2001__g3.mp3",
			'f': "../app/sounds/sounds/203460__tesabob2001__a-4.mp3",
			'g': "../app/sounds/sounds/203462__tesabob2001__b4.mp3",
			'h': "../app/sounds/sounds/203481__tesabob2001__c-4.mp3",
			'j': "../app/sounds/sounds/203482__tesabob2001__d-4.mp3",
			'k': "../app/sounds/sounds/203471__tesabob2001__e4.mp3",
			'l': "../app/sounds/sounds/203500__tesabob2001__f-4.mp3",
			';': "../app/sounds/sounds/203491__tesabob2001__g-4.mp3"
		}
	}

	handleKeyboardEvents(event: KeyboardEvent) { 
    	this.key[event.key] =  true
    	var audio: any = new Audio(this.notes[event.key])
		// audio.load();
		audio.play();

  	}

  	keyUpEvent(event: KeyboardEvent){
  		this.key[event.key] = false
  	}

}
