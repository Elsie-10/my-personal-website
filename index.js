document.addEventListener("DOMContentLoaded", function(){ 
    let heading= document.getElementById('template1')
    console.log(heading)
    let display=document.getElementsByTagName('h1')
    console.log(display[0])
   display[0].addEventListener('click' ,function() {
    heading.textContent="Pleased you want to know more..."
    heading.style.color="blue"
    heading.style.backgroundColor="grey"
     })
     const headings = document.querySelectorAll('section h1');

    // Loop through each heading and add event listeners for mouseover and mouseout
    headings.forEach(heading => {
        // When the mouse enters the heading, change its color
        heading.addEventListener('mouseover', function() {
            heading.style.color = 'blue'; // Change to green (or any color of your choice)
        });

        // When the mouse leaves the heading, revert the color to the original
        heading.addEventListener('mouseout', function() {
            heading.style.color = ''; // Revert to the original color
        });
    });
        })


    
        

