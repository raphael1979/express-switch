$(document).ready(function(){
	console.log("hello")
	$.ajax({
		url: "/data",
		success: function(data){
			var datajson=data.articles;
			$(datajson).each(function(){
				console.log(this);
				$(".receiver").append(this.title+"<br>"+this.content+"<br>");
			})

		},

		error: function(err){
			console.log(err);
		}
	});



});