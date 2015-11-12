(function() {
	//'use strict';

	try {
		//Test is let is available in the browser
		eval('let someVariableName;');
	} catch(e) {
		console.log(e);
		document.getElementById('use-let').className='hide';
		document.getElementById('dont-use-let').className='';
	}
})();