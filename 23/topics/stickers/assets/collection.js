$(document).ready(function() {
    var imagesData; // variable to store the JSON data

    // Load the JSON data and create the images
    $.getJSON('assets/collection.json', function(data) {
        imagesData = data; // store the data in the variable

        // create the images
        createImages(imagesData);
    });

    function createImages(data) {
        $('#image-container').empty(); // remove any existing images

        $.each(data, function(index, imageData) {
            // Create a new image element
            var img = $('<img class="dragme">');

            // Set the source and alt text for the image
            img.attr('src', imageData.img);
            img.attr('alt', 'Image ' + (index + 1));

            // Preload the image to get its natural dimensions
            var imgElement = new Image();
            imgElement.src = imageData.img;
            imgElement.onload = function() {
                // Scale down the width and height by 20%
                var scaledWidth = imgElement.naturalWidth * 0.5;
                var scaledHeight = imgElement.naturalHeight * 0.5;

                img.width(scaledWidth);
                img.height(scaledHeight);

                // Set the position
                img.css({
                    'position': 'absolute',
                    'left': Math.floor(Math.random() * (0.9 * window.innerWidth - scaledWidth)) + 'px',
                    'top': Math.floor(Math.random() * (0.9 * window.innerHeight - scaledHeight)) + 'px'
                });

                // Add the image element to the document
                $('#image-container').append(img);}

            // Add the event listeners to make the image draggable
            var coordX = 0,
                coordY = 0;
            var offsetX = 0,
                offsetY = 0;
            var drag = false;

            // Make the image draggable
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

            // Release the drag on mouse up
            $(document).mouseup(function(e) {
                drag = false;
            });

            // Check if action is 'spin' and add double-click event for spinning
            if (imageData.action === 'spin') {
                // Add double-click event for toggling spinning animation
                img.dblclick(function() {
                    if ($(this).hasClass('spin')) {
                        // Stop spinning
                        $(this).removeClass('spin');
                    } else {
                        // Start spinning
                        $(this).addClass('spin');
                    }
                });
            }

			if (imageData.action === 'spin2') {
                // Add double-click event for toggling anticlockwise spinning animation
                img.dblclick(function() {
                    if ($(this).hasClass('spin2')) {
                        // Stop anticlockwise spinning
                        $(this).removeClass('spin2');
                    } else {
                        // Start anticlockwise spinning
                        $(this).addClass('spin2');
                    }
                });
            }

            // Check if action is 'run' and add double-click event for back and forth movement
            if (imageData.action === 'run') {
                // Add double-click event for toggling back and forth movement
                img.dblclick(function() {
                    if ($(this).hasClass('run')) {
                        // Stop back and forth movement
                        $(this).removeClass('run');
                    } else {
                        // Start back and forth movement
                        $(this).addClass('run');
                    }
                });
            }

				// Check if action is 'fade' and add double-click event for fading effect
				if (imageData.action === 'fade') {
					// Add double-click event for toggling fade effect
					img.dblclick(function() {
						if ($(this).hasClass('fade')) {
							// Stop fading effect
							$(this).removeClass('fade');
						} else {
							// Start fading effect
							$(this).addClass('fade');
						}
					});
}

if (imageData.action === 'jump') {
	// Add double-click event for toggling jumping effect
	img.dblclick(function() {
		if ($(this).hasClass('jump')) {
			// Stop jumping effect
			$(this).removeClass('jump');
		} else {
			// Start jumping effect
			$(this).addClass('jump');
		}
	});
}
        });
    }
});
