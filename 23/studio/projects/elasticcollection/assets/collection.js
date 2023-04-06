$(document).ready(function() {
	var imagesData; // variable to store the JSON data
  
	// Load the JSON data and create the images
	$.getJSON('assets/collection.json', function(data) {
	  imagesData = data; // store the data in the variable
  
	  // create the images
	  createImages(imagesData);
	});
  
	// Click event listener for the "Flowers" button
	$('#has-flower-button').click(function() {
	  var showFlower = $(this).data('showFlower'); // get the current state of the button
  
	  if (showFlower) {
		// if the button was already clicked and the flowers are currently shown, show all images again
		createImages(imagesData);
		$(this).data('showFlower', false);
		$(this).text('花');
	  } else {
		// if the button was not clicked before or the flowers are currently hidden, show only images with hasFlower: true
		var flowerImagesData = imagesData.filter(function(imageData) {
		  return imageData.hasFlower;
		});
		createImages(flowerImagesData);
		$(this).data('showFlower', true);
		$(this).text('花');
	  }
	});

	// Click event listener for the "Be Happy" button
	$('#be-happy-button').click(function() {
		var showHappy = $(this).data('showHappy'); // get the current state of the button
	
		if (showHappy) {
		  // if the button was already clicked and the flowers are currently shown, show all images again
		  createImages(imagesData);
		  $(this).data('showHappy', false);
		  $(this).text('快樂');
		} else {
		  // if the button was not clicked before or the flowers are currently hidden, show only images with hasFlower: true
		  var happyImagesData = imagesData.filter(function(imageData) {
			return imageData.beHappy;
		  });
		  createImages(happyImagesData);
		  $(this).data('showHappy', true);
		  $(this).text('快樂');
		}
	  });

	  // Click event listener for the "Be Safe" button
	$('#be-safe-button').click(function() {
		var showSafe = $(this).data('showSafe'); // get the current state of the button
	
		if (showSafe) {
		  // if the button was already clicked and the flowers are currently shown, show all images again
		  createImages(imagesData);
		  $(this).data('showSafe', false);
		  $(this).text('平安');
		} else {
		  // if the button was not clicked before or the flowers are currently hidden, show only images with hasFlower: true
		  var safeImagesData = imagesData.filter(function(imageData) {
			return imageData.beSafe;
		  });
		  createImages(safeImagesData);
		  $(this).data('showSafe', true);
		  $(this).text('平安');
		}
	  });
  
  function createImages(data) {
    $('#image-container').empty(); // remove any existing images

    $.each(data, function(index, imageData) {
        // Create a new image element
        var img = $('<img class="dragme" src="' + imageData.img + '">');
var imgWidth = img.width();
var imgHeight = img.height();

img.css({
    'position': 'absolute',
    'left': Math.floor(Math.random() * (0.9 * window.innerWidth - imgWidth)) + 'px',
    'top': Math.floor(Math.random() * (0.9 * window.innerHeight - imgHeight)) + 'px'
});

        // Add the image element to the document
        $('#image-container').append(img);

        // Add the event listeners to make the image draggable
        var coordX = 0,
            coordY = 0;
        var offsetX = 0,
            offsetY = 0;
        var drag = false;

        img.mousedown(function(e) {
            // calculate event X, Y coordinates
            offsetX = e.clientX;
            offsetY = e.clientY;

            // assign default values for top and left properties
            if (!$(this).css('left')) {
                $(this).css('left', '0px');
            }
            if (!$(this).css('top')) {
                $(this).css('top', '0px');
            }

            // calculate integer values for top and left properties
            coordX = parseInt($(this).css('left'));
            coordY = parseInt($(this).css('top'));
            drag = true;

            // move image element
            $(document).mousemove(function(e) {
                if (drag) {
                    // move image element
                    $(img).css({
                        'left': coordX + e.clientX - offsetX + 'px',
                        'top': coordY + e.clientY - offsetY + 'px'
                    });
                }
            });
            return false;
        });

        $(document).mouseup(function(e) {
            drag = false;
        });

        img.dblclick(function() {
            $(this).toggleClass('glow');

			var audio = new Audio(imageData.audio);
 			 audio.play();

            var description = $('<p class="description speech">' + "This is an image of " + imageData.imgDescription + '</p>');
			var descWidth = description.width();
			var descHeight = description.height();

			var maxLeft = 0.8*window.innerWidth - descWidth;
			var maxTop = 0.6*window.innerHeight - descHeight;

			// calculate random left and top values within the viewport
			var left = Math.max(Math.floor(Math.random() * maxLeft), 0);
			var top = Math.max(Math.floor(Math.random() * maxTop), 0);

			// set the CSS properties of the description element
			description.css({
			'left': left + 'px',
			'top': top + 'px'
			});
            img.parent().append(description);

            description.fadeIn(500).delay(3000).fadeOut(500, function() {
                description.remove();
            });

			var clock = $('<p class="clock speech1">' + "Sent on " + imageData.date + " at " + imageData.time + '</p>');
			var descWidth = clock.width();
			var descHeight = clock.height();

			var maxLeft = 0.8*window.innerWidth - descWidth;
			var maxTop = window.innerHeight - descHeight;

			// calculate random left and top values within the viewport
			var left = Math.max(Math.floor(Math.random() * maxLeft), 0);
			var top = Math.max(Math.floor(Math.random() * maxTop), 0);

			// set the CSS properties of the description element
			clock.css({
			'left': left + 'px',
			'top': top + 'px'
			});
            img.parent().append(clock);

            clock.fadeIn(500).delay(3000).fadeOut(500, function() {
                clock.remove();
            });

			var translation = $('<p class="translation speech2">' + "He is saying " + imageData.translation + '</p>');
			var descWidth = translation.width();
			var descHeight = translation.height();

			var maxLeft = 0.8*window.innerWidth - descWidth;
			var maxTop = window.innerHeight - descHeight;

			// calculate random left and top values within the viewport
			var left = Math.max(Math.floor(Math.random() * maxLeft), 0);
			var top = Math.max(Math.floor(Math.random() * maxTop), 0);

			// set the CSS properties of the description element
			translation.css({
			'left': left + 'px',
			'top': top + 'px'
			});
            img.parent().append(translation);

            translation.fadeIn(500).delay(3000).fadeOut(500, function() {
                translation.remove();
            });
        });
    });
};
})
