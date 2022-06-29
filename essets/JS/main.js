// var imgFeature = document.querySelector('.img-feature')
// var banners = document.querySelectorAll('.dot-list-images')
// var btnPrev = document.querySelector('.btn-prev')
// var btnNext = document.querySelector('.btn-next')

// var currentIndex = 0
// function updateImagesByIndex(index) {
//   // REMOVE ACTIVE CLASS
//   document.querySelectorAll('.dot-list-images').forEach(item => {
//     item.classList.remove('active')
//   });

//   currentIndex = index
//   imgFeature.src = banners[index].getAttribute('src')
//   banners[index].parentElement.classList.add('active')
// }

// banners.forEach((bannersElement, index) => {
//   bannersElement.addEventListener('click', e => {
//     updateImagesByIndex(index)
//   })
// })

// btnPrev.addEventListener('click', e => {
//   if (currentIndex == 0) {
//     currentIndex = banners.length - 1
//   } else {
//     currentIndex++
//   }

//   updateImagesByIndex(currentIndex)

// })

// updateImagesByIndex(0)

// COUNTDOWN TIMER
function addZeroBeforeElementLessThanTen() {
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
}

function updateTimer() {
    future = Date.parse("jun 12, 2022 01:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    addZeroBeforeElementLessThanTen()
    document.getElementById("timer")
        .innerHTML =
        '<div>' + h + '<span></span></div>' +
        '<div>' + m + '<span></span></div>' +
        '<div>' + s + '<span></span></div>';
}
setInterval('updateTimer()', 1000);
// END COUNTDOWN TIMER