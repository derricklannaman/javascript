var index = 0;
var results = null;
var count = (display_photo, index);

$(function()
{
	$('#add').click(search_flickr);

});

function search_flickr() 
{
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=99ac2d8b7d085534e98f6d7fc52155c5&tags='+search+'&format=json&jsoncallback=?',flickrResults);
}

function flickrResults(data) 
{
// start timer and call a function diplayphoto. save data to global variable called data. global call count. 
	setInterval(display_photo, 1000);
	results = data;
}

function display_photo()
{

	var photo = results.photos.photo[index]; //this is your photo. but now construct below. 
	getPhoto(photo);
}

function getPhoto (item) {
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src',src);
	div.append(img);
	index++; //default setting to add one to itself 
}




