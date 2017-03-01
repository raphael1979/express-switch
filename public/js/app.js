$(document).ready(function(){
	$.ajax({
		url: "/data",
		success: function(data){
			var datajson=data.articles;
			$(datajson).each(function(){
				console.log(this);
				$(".retour").append(this.title+"<hr>"+this.content+"<hr>");
			})

		},

		error: function(err){
			console.log(err);
		}
	});



});