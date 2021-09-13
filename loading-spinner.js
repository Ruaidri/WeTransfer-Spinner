// Stop / Start Boolean
let start = true;

// Create Spinner
'use strict';
function Spinner(){
	Spinner.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	Spinner.element.setAttribute('width','200');
	Spinner.element.setAttribute('height','200');
	circle.setAttribute('viewBox','0 0 200 200');
	circle.setAttribute('cx','100');
	circle.setAttribute('cy','100');
	circle.setAttribute('r','84');
	circle.setAttribute('stroke-width','8');
	circle.setAttribute('stroke','#2196f3');
	circle.setAttribute('fill','transparent');
	Spinner.element.appendChild(circle);
	Spinner.element.style.cssText='position:absolute;left:calc(50% - 50px);top:calc(50% - 50px)'; // center screen
	document.body.appendChild(Spinner.element)
}

//  Create button
// Leave initializer outside function so start/stop function  can access
let btn = document.createElement("button");
function Button(){
	btn.innerHTML = "Stop";
	btn.setAttribute('id','button');
	btn.setAttribute('onclick','SpinnerStop()');
	btn.style.cssText='position:absolute;left:calc(50%);top:calc(80%);border-radius:26px;border:1px solid #2196f3;padding:10px 30px;color:#2196f3;font-weight:600;background-color:#fff;min-width:100px;';
	document.body.appendChild(btn);
}

// Spin function
Spinner.id=null;
Spinner.element=null;
Spinner.show=function(){
	const total=528, speed=10;
	Spinner.element.style.display='block';
	ProgressBarMiddle();
	function ProgressBarMiddle(){
		let initial=0, offset=0;
		ProgressBarStart();
		function ProgressBarStart(){
			if(initial==total)ProgressBarEnd(); // when the circle is full (minus offset) swap animation
			else{
				if(start === true){ //stop spin while button set to stop
					initial+=2;offset+=8;
					Spinner.element.setAttribute('stroke-dasharray',initial+' '+(total-initial));
					Spinner.element.setAttribute('stroke-dashoffset',offset);
					Spinner.id=setTimeout(ProgressBarStart,speed);
				}
			}
		}
	}
	// Invert the direction of the loader
	function ProgressBarEnd(){
		let initial=total, offset=initial*2;
		ProgressBarStart();
		function ProgressBarStart(){
			if(initial==0)ProgressBarMiddle();
			else{
				if(start === true){ //stop spin while button set to stop
					initial-=4;offset+=4;
					Spinner.element.setAttribute('stroke-dasharray',initial+' '+(total-initial));
					Spinner.element.setAttribute('stroke-dashoffset',offset);
					Spinner.id=setTimeout(ProgressBarStart,speed);
				}
			}
		}
	}
};

// Start / Stop function
function SpinnerStop(){
	start = !start; // invert value
	if(!start){
		Spinner.element.setAttribute('stroke-dasharray',560+' '+0); // create full circle
		Spinner.element.setAttribute('stroke-dashoffset',0);
		btn.innerHTML = "Start";
	}
	else{
		Spinner.show();
		btn.innerHTML = "Stop";
	}
};
