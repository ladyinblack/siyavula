/** Media query event handler */
if (matchMedia) {
	var screensize = window.matchMedia("(max-width: 768px)");
	screensize.addListener(DeviceChange);
	DeviceChange(screensize);
}

/** Media query change */
function DeviceChange(dc) {
	if (screensize.matches) {
		/** Generating Table of Contents */
		/* Styling the page */
		var h1 = document.getElementsByTagName('h1');
		var h2 = document.getElementsByTagName('h2');
		var allTitles = document.getElementsByClassName('title');
		
		/** Creating attributes for essential elements */
		h1[0].setAttribute('id', 'exponents');
		h2[0].setAttribute('id', 'intro');
		h2[1].setAttribute('id', 'revexpolaws');
		
		// create nav elements 
		var elBody = document.getElementsByTagName('body');
		var firstDiv = document.getElementsByTagName('div')[0];
		var nextElement = firstDiv.firstChild.nextSibling.firstChild;
		
		var elNav = document.createElement('nav');
		var elOl1 = document.createElement('ol');
		var elOl2 = document.createElement('ol');
		var elDiv = document.getElementsByTagName('div');
		
		/** GENERATE TABLE OF CONTENTS */
		for (var i = 0; i < h1.length; i++) {
			var h1TextNode = document.createTextNode(h1[i].firstChild.data);
			var elLi1 = document.createElement('li');
			var elLink1 = document.createElement('a');
			var getAttrib1 = h1[i].getAttribute('id');
			elLink1.setAttribute('href', '#' + getAttrib1);
			elLink1.appendChild(h1TextNode);
			elLi1.appendChild(elLink1);
			elOl1.appendChild(elLi1);
			elNav.appendChild(elOl1);
			elBody[0].insertBefore(elNav, firstDiv);
		}
		
		for (var j = 0; j < h2.length; j++) {
			var h2TextNode = document.createTextNode(h2[j].firstChild.data);
			var elLi2 = document.createElement('li');
			var elLink2 = document.createElement('a');
			var getAttrib2 = h2[j].getAttribute('id');
			elLink2.setAttribute('href', '#' + getAttrib2);
			elLink2.appendChild(h2TextNode);
			elLi2.appendChild(elLink2);
			elOl2.appendChild(elLi2);
			elLi1.appendChild(elOl2);
			elOl1.appendChild(elLi1);
			elNav.appendChild(elOl1);
			elBody[0].insertBefore(elNav, firstDiv);
		}
		
		/** THE VISIT NOTES SECTION */
		var visitDiv = document.getElementsByClassName('visit');
		for (var i = 0; i < visitDiv.length; i++) {
			var h4Visit = document.createElement('h4');
			var h4Strong = document.createElement('strong');
			var textVisit = document.createTextNode('VISIT:');
			h4Strong.appendChild(textVisit);
			h4Visit.appendChild(h4Strong);
			visitDiv[i].insertBefore(h4Visit, visitDiv[i].firstChild.nextSibling);
		}
		
		/** THE TIPS SECTION */
		var tipsDiv = document.getElementsByClassName('tip');
		
		for (var i = 0; i < tipsDiv.length; i++) {
			var h4Tip = document.createElement('h4');
			var h4Strong = document.createElement('strong');
			var textTip = document.createTextNode('TIP:');
			h4Strong.appendChild(textTip);
			h4Tip.appendChild(h4Strong);
			tipsDiv[i].insertBefore(h4Tip, tipsDiv[i].firstChild.nextSibling);
		}
		
		/** THE NOTES SECTION */
		var notesDiv = document.getElementsByClassName('note');
		
		for (var i = 0; i < notesDiv.length; i++) {
			var h4Note = document.createElement('h4');
			var h4Strong = document.createElement('strong');
			var textNote = document.createTextNode('NOTE:');
			if ((notesDiv[i].className != visitDiv[0].className) && (notesDiv[i].className != tipsDiv[0].className)) {
				h4Strong.appendChild(textNote);
				h4Note.appendChild(h4Strong);
				notesDiv[i].insertBefore(h4Note, notesDiv[i].firstChild.nextSibling);
			}
		}
	}
	else {
		// no change 
	}
}
