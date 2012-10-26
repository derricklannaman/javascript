$(function(){

	$('#add').click(search_flickr);// when we click add button

	
});


function search_flickr()
{

	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=09f60941d3391d6e4507398abe2d26a3&tags=' + search + '&format=json&jsoncallback=?', flickrResults);
}

function flickrResults(data)
{

$.each(data.photos.photo, getPhoto);// getPhoto is a new photo

}

function getPhoto(index, item)
{
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo')
	var img = $('<img>');
	img.attr('src', src);
	div.append(img);
	$('#photos').prepend(div);
}









