
const enable = function() {
let check = document.getElementById("check");
let btn = document.getElementById("btn");
		if(check.checked) {
			btn.disabled =false;
		} else {
            btn.disabled="true";
        }
	}
