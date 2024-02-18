AOS.init();
//header

// slider images array

const sliderImgs = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');
            
            setTimeout(() => {
                
                if(index == sliderGrids.length - 1){
                    if(currentImage >= sliderImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }
    
                    sliderImage.src = `img/${sliderImgs[currentImage]}`;
    
                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })
    
                }

            }, 100);

        }, index * 100);
    })
}

// nav

const navbar = document.querySelector('.navbar');

// Get modal elements
var modal = document.getElementById("confirmationModal");
var span = document.getElementsByClassName("close-button")[0];
var confirmBtn = document.getElementById("confirmBtn");
var cancelBtn = document.getElementById("cancelBtn");

// Function to open modal
function showModal(placeName) {
    document.getElementById("confirmText").textContent = `Do you want to book a guide for ${placeName}?`;
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the new elements
var confirmationMessage = document.getElementById("confirmationMessage");
var closeBtn = document.getElementById("closeBtn");

confirmBtn.onclick = function() {
    // Assume booking logic is successful

    // Hide the initial booking form/message
    document.querySelector(".modal-content > h2").style.display = "none"; // Hide the "Confirm Booking" title
    document.getElementById("confirmText").style.display = "none"; // Hide the question
    confirmBtn.style.display = "none"; // Hide the confirm button
    cancelBtn.style.display = "none"; // Hide the cancel button

    // Show the confirmation message
    confirmationMessage.style.display = "block";

     // Optionally delay the closeModal call if you want the user to see the confirmation message
     setTimeout(closeModal, 3000); // Close modal after 3 seconds
}


// Cancel button and Close (X) button logic
cancelBtn.onclick = closeModal;
span.onclick = closeModal; // Assuming 'span' is your close button

// Adjust the global click listener to use closeModal for consistency
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
// Function to close the modal and reset its content
var currentlyDisplayedGuideDetails = null; // Global variable to track the displayed guide details

function closeModal() {
    modal.style.display = "none";

    // Hide the currently displayed guide details
    if (currentlyDisplayedGuideDetails) {
        currentlyDisplayedGuideDetails.style.display = 'none';
        currentlyDisplayedGuideDetails = null; // Reset the tracker
    }

    // Reset modal to initial state
    document.querySelector(".modal-content > h2").style.display = ""; // Show the "Confirm Booking" title
    document.getElementById("confirmText").style.display = ""; // Show the question
    confirmBtn.style.display = ""; // Show the confirm button
    cancelBtn.style.display = ""; // Show the cancel button
    confirmationMessage.style.display = "none"; // Hide the confirmation message
}



// When the user clicks on Cancel, close the modal
cancelBtn.onclick = function() {
    modal.style.display = "none";
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('.book-guide-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        const placeName = this.getAttribute('data-place');
        showModal(placeName);

        const tourCard = this.closest('.tour-card');
        const guideDetails = tourCard.querySelector('.guide-details');

        // Show guide details and track it
        guideDetails.style.display = 'block';
        currentlyDisplayedGuideDetails = guideDetails; // Track the currently displayed guide details
    });
});





window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})