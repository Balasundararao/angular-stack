function toggleOverlay(  overlayId, boxId ){
	var overlay = document.getElementById(overlayId);
	var specialBox = document.getElementById(boxId);

	console.log( specialBox );
	
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.opacity = .5;
		overlay.style.display = "block";
		specialBox.style.display = "block";
	}
}

	function makeAjax(){
		var jqxhr = $.ajax( "testservice.html" )
		.success(function(result,status,xhr) {

			//toggleOverlay("overlay", "successBox");
		})
		.fail(function() {
			//toggleOverlay("overlay", "errorBox");
		});
	}// Make Ajax



jQuery( document ).ready(function() {
	// click on upload of images on mobile	
	$("#uploadIcon").click(function(){
		$(this).next().trigger('click');
	});    	

	// $("#addImage").click(function(){
	// 	alert("HEllo");
	// });    	





}); // end jquery.ready..


 
