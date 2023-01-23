const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.booked)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const chooseMovie = document.getElementById('movie');
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const hideSelect = document.getElementById('hideSelect');






// show-nav 


function slider() {
    document.body.classList.toggle('show-nav') ;
    if(
        document.body.classList.contains('show-nav')
    ) {
        toggle.innerHTML = `<i class="fa-solid fa-angle-up"></i>` 
    }
    else {
        toggle.innerText = 'Book Your Show'
    }

   


}
toggle.addEventListener('click' , slider);



function SlideOnClickingImage() {
    document.body.classList.add('show-nav') ;
    if(document.body.classList.contains('show-nav')) {
        toggle.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
}
    else{
        false
    }


}
img1.addEventListener('click' , SlideOnClickingImage);
img2.addEventListener('click' , SlideOnClickingImage);
img3.addEventListener('click' , SlideOnClickingImage);


















let ticketAmount = +chooseMovie.value ;

function updateCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


    const seatsIndex = [...selectedSeats].map(seat =>
        [...seats].indexOf(seat));


        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


        
        const selectedSeatsCount = selectedSeats.length ;

        count.innerText = selectedSeatsCount ;
        total.innerText = selectedSeatsCount*ticketAmount
}

//Selecting Movie 

chooseMovie.addEventListener('change', e => {
    ticketAmount = +e.target.value
    updateCount() ;
})



//On clicking seats 

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        e.target.classList.toggle('selected')

        updateCount();
    }
});











