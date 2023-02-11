let drawJS = {};

(function(pen) {

    pen.drawStar = function(o = {}) {

        // get context
        let selector = (o.id) ? '#' + o.id : 'canvas';

        let canvas = document.querySelector(selector);

        if (canvas) {

            let context = canvas.getContext("2d");

            // set shape properties
            let numPoints = o.numPoints || 5;
            // set inner and outer radius
            let outerRadius = o.outerRadius || 100;
            let innerRadius = o.innerRadius || 50;
            let cx = o.cx || 0;
            let cy = o.cy || 0;
            let rotate = o.rotate || 0;

            // set centerpoint
            context.lineWidth = o.lineWidth || 1;
            context.strokeStyle = o.stroke || '#000';

            // start the path
            context.beginPath();

            // write a function called drawLine.

            // move to moves the pen to the start position.
            // lineTo keeps the penDown.
            const draw = (radius, angle, action) => {
                // use cosine to get horizontal coordinate
                let x = cx + radius * Math.cos(angle);
                // use sin to get vertical coordinate
                let y = cy + radius * Math.sin(angle);
                context[action](x, y);
            };
            
            draw(outerRadius, rotate, 'moveTo');

            let angle = 2 * Math.PI / numPoints;

            for (var i = 0; i <= numPoints; i++) {

                let outerAngle = i * angle + rotate;
                let innerAngle = outerAngle + angle / 2;

                draw(outerRadius, outerAngle, 'lineTo');
                draw(innerRadius, innerAngle, 'lineTo');
            }
            // add the outline
            context.stroke();

            // add the fill
            if (o.fill) {
                context.fillStyle = o.fill;
                context.fill();
            }
        }
    };
})(drawJS);