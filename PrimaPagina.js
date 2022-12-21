
const enable = function() {
let check = document.getElementById("check");
let btn = document.getElementById("btn");
		if(check.checked) {
			btn.disabled =false;
		} else {
            btn.disabled="true";
        }
	}
	/*finishButton.onclick = function () {
		location.assign(
		  //apicistorti
		  `/results Page.html?numDomCorrette=${numDomCorrette}&numDomSbagliate=${numDomSbagliate}&numeroTotaleDomande=${numeroTotaleDomande}`
		);
	  };*/
	  const pulsante = document.getElementById("btn")
	  pulsante.onclick = function(){
		location.assign( 
			"/benchmark Page.html"
			
		)
	  }
