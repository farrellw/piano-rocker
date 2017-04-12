import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})

export class AppComponent  { 
	public mode: string;
	public modeSubject: BehaviorSubject<any> = new BehaviorSubject<any>({ mode: 'classic' });
	private _modeSubscription: Subscription;

	constructor(){}

	ngOnInit() {
		this._modeSubscription = this.modeSubject.asObservable().subscribe(modeObject => {
			if(modeObject && modeObject.mode){
				this.mode = modeObject.mode;
			}
		});
 
	}

	style(){
		return this.mode;
	}

	ngOnDestroy() {
    	this._modeSubscription.unsubscribe();
  	}

}
