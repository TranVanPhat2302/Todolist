// mark completed todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// remove todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");
		$(this).val("");
	}
});

// toggle form visibility
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
