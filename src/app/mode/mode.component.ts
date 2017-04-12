import { Component, Input } from '@angular/core';

@Component({
  selector: 'mode-component',
  templateUrl: "./mode.component.html",
  styleUrls: [ "./mode.component.css" ]
})

export class ModeComponent  { 
	private _passedThroughMode: string;
	private _modeSubject: any;

	constructor(){}

	ngOnInit() {
	}

	@Input()
		set modeSubject(modeSubject: any){this._modeSubject = modeSubject;}

	clickMode(mode: string){
		this._modeSubject.next({ mode: mode })
	}
}