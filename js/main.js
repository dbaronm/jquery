$( document ).ready(function() {
	$('.list').click(onClickElement); //onClickElement es un nombre inventado
	$("#link").click(onLinkClick);
	var add = $("#add");
	var del = $("#del");
	add.click(onAddClick);

	del.click(onDelClick);
		
	
	function onAddClick() {
		$("#link").addClass("elem1");
	}
	function onDelClick() {
		$("#link").removeClass("elem1");
	}
	function onClickElement() {
/*
		$(".otro").css({
			"background-color":"orange",
			"font-size":"30px"
		});
		//Llama a los elemento con .list uno por uno
		$(this).css({
			"background-color":"red",
			"font-size":"3em"
		})
		
		//Llama a todos los elementos que contengan la clase
		$(".list").css({
			"background-color":"red",
			"font-size":"3em"
		})
*/
}	
	function onLinkClick() {
			//$("[href='#']").attr("href","https://www.google.com");
		}
});