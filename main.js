$(function() {

	// Data object for the compiler function
	var books = {
		author: "Gillian Flynn",
		book: "Gone Girl",
		genre: "Fiction, Thriller"
	};

	// Select our template
	var source = $('#book-template').html();

	// Create our compiler function
	var template = Handlebars.compile(source);
	// console.log(template);

	// Passing data object(context) to the compiler 
	// function to get our HTML
	var templateData = template(books);
	// console.log(templateData);

	// Take our compiled template/HTML appending to our div
	$('#book-content').append(templateData);


	// Iteration
	var source = $('#users-template').html();
	var template = Handlebars.compile(source);

	var users = { users: [
			{username: "Meghann", fullName: "Meghann", email: "Meghann@gmail.com"},
			{username: "Joe", fullName: "Joe", email: "Joe24@gmail.com"}
			
		]
	}

	var templateData = template(users);
	console.log(templateData);

	$('#content-placeholder').append(templateData);


	//Using AJAX!!!
	$.ajax({
		url:"/data.json",
		method: 'GET',
		dataType: 'json',
		success: function(data) {
			var source = $('#json-template').html(),
				template = Handlebars.compile(source),
				templateData = template(data);

				$('#json-content').append(templateData);
		}
	});

});


