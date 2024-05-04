// Step1 : to check whether the mouse is inside the rectanglar or Not.
// Step2 : to check we are on left or right from center.
// Step3 : to check how much we are on left from center to change the intensity of the color.

let rect = document.querySelector("#center");
// Step1
rect.addEventListener("mousemove", (det) => { //det -> will give details about mouse. 
    let rectangleLocation = (rect.getBoundingClientRect()); //to get the exact location of rectangle

    // Step2
    let insideRectVal = (det.clientX - rectangleLocation.left) // to get the exact mouse location inside the rectangle.

    // Step3 : here we use gsap.utils.mapRange() 
    if (insideRectVal < rectangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectVal);
        console.log(redColor); //check the red color value that'll be. ex: rgb(236,0,0)
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        });
    } else {
        let blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectVal);
        console.log(blueColor);
        gsap.to(rect, {
            backgroundColor: `rgb( 0, 0,${blueColor})`,
            ease: Power4
        });
    }
});

rect.addEventListener("mouseleave", () => {
    gsap.to(rect, {
        backgroundColor: "white",
    });
});