const ratingBtns = document.querySelectorAll('.rating-btn');
const ratingBoxCard = document.querySelector('.rating-box');
const thankYouCard = document.querySelector('.thank-you-box');
const givenScore = document.getElementById('rating');
let givenStars = 1;


const submitBtn = document.getElementById('submit-button');

function onSubmit() {
    thankYouCard.classList.remove('hide');
    givenScore.textContent = givenStars;
    ratingBoxCard.classList.add('hide');
}

submitBtn.addEventListener('click', onSubmit);

ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});


function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    givenStars = event.target.textContent;
}