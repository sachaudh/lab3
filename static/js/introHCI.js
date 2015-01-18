'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(".jumbotron p").toggleClass("active");
		var testjs = $('#testjs').text("Experience Chan! It's not a lot of questions. \nToo many questions is the Chan disease. \nThe best way is just to observe the noise of the world. \nThe answer to your questions? \nAsk your own heart.");
		testjs.html(testjs.html().replace(/\n/g, '<br/>'));
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(changeProject);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.fadeToggle();
       $(this).find("img").toggleClass("newClass");
       $(this).find("p").toggleClass("newClass");
    }
}

function changeProject(element) {
   var p = $('#project').val();

   $(p).animate({width: $('#width').val()});

   var newText = $('#description').val();
   $(p + " .project-description").text(newText);
}

