function flashChecker() {
	var isIE = !-[ 1, ];
	if (isIE) {
		try {
			var swf1 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			return true;
		} catch (e) {
			return false;
		}
	} else {
		try {
			var swf2 = navigator.plugins['Shockwave Flash'];
			if (swf2 == undefined) {
				return false;
			} else {
				return true;
			}
		} catch (e) {
			return false;
		}
	}
}
$("document").ready(
		function() {
			if (!flashChecker()) {
				
				$("#span-btn")
						.html(
								"<a class='btn btn-primary' href='user-challenge.action?retype="
										+ $('#input-retype').val() + "&reid="
										+ $('#input-reid').val()
										+ "&order=0'>开始挑战</a>");
			}
		})