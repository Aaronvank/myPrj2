define(function(){
	function Footer(){}
		Footer.prototype.show = function(){
			$("#footer").load("/html/component/footer.html",function(){})
		}
	return new Footer();
})