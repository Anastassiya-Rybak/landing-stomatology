// Кнопка "Перезвонить мне" в шапке сайта. Появление окошка с запросом номера для связи.

const callMe = document.getElementById('header-btn-call-me');
const feedbackWindow = document.getElementById('feedback-window-in-header-wrapper');

const feedbackWindowHeaderOverlay = document.getElementById('feedback-window-in-header-overlay');
const btnCloseHeader = document.getElementById('btn-in-feedback-window-close');

callMe.addEventListener('click', () => {
    feedbackWindow.classList.add('active');
});

const closeFeedbackWindowInHeader = () => {
    feedbackWindow.classList.remove('active');
}

btnCloseHeader.addEventListener('click', closeFeedbackWindowInHeader);
feedbackWindowHeaderOverlay.addEventListener('click', closeFeedbackWindowInHeader);

// Кнопка "Записаться" в первом блоке. Появление окошка с запросом номера для записи.

const appointmentMe = document.getElementById('make-an-appointment');
const appointmentWindow = document.getElementById('appointment-window-in-first-block-wrapper');

const appointmentWindowFirstBlockOverlay = document.getElementById('appointment-window-in-first-block-overlay');
const btnCloseFirstBlock = document.getElementById('btn-close-in-appointment-window-in-first-block');

appointmentMe.addEventListener('click', () => {
    appointmentWindow.classList.add('active');
});

const closeAppointmentkWindowInFirstBlock = () => {
    appointmentWindow.classList.remove('active');
}

btnCloseFirstBlock.addEventListener('click', closeAppointmentkWindowInFirstBlock);
appointmentWindowFirstBlockOverlay.addEventListener('click', closeAppointmentkWindowInFirstBlock);

// Кнопка "Записаться" во втором блоке. Появление окошка с запросом номера для записи.

const appointmentMe2 = document.getElementById('big-button-Make-an-appointment');
const appointmentWindow2 = document.getElementById('appointment-window-in-second-block-wrapper');

const appointmentWindowFirstBlockOverlay2 = document.getElementById('appointment-window-in-second-block-overlay');
const btnCloseFirstBlock2 = document.getElementById('btn-close-in-appointment-window-in-second-block');

appointmentMe2.addEventListener('click', () => {
    appointmentWindow2.classList.add('active');
});

const closeAppointmentkWindowInFirstBlock2 = () => {
    appointmentWindow2.classList.remove('active');
}

btnCloseFirstBlock2.addEventListener('click', closeAppointmentkWindowInFirstBlock2);
appointmentWindowFirstBlockOverlay2.addEventListener('click', closeAppointmentkWindowInFirstBlock2);




// Переменные по слайдеру в третьем блоке
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

// Start slider
let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
      
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
      
const prepareCurentSlide = int => {
    activeDot(index);
    activeSlide(index);
}
      
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurentSlide(index);
    }else { 
        index++;
        prepareCurentSlide(index);
    }
}
      
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurentSlide(index);
    }else { 
        index--;
        prepareCurentSlide(index);
    }
}
      
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
    index = indexDot;
    prepareCurentSlide(index);
    })
}); 

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
// end slider


// Переменные для модального окна в третьем блоке 
const btnShare = document.querySelector('.btn-in-card');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-in-madal-window-close');

// Start modal window
btnShare.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// End modal window


// 111 Переменные для модального окна в третьем блоке 
const btnShare1 = document.getElementById('btn-in-card-1');
const modal1 = document.getElementById('wrapper-modal-1');

const overlay1 = document.getElementById('overlay-1');
const btnClose1 = document.getElementById('btn-in-madal-window-close-1');

// Start modal window
btnShare1.addEventListener('click', () => {
    modal1.classList.add('active');
});

const closeModal1 = () => {
    modal1.classList.remove('active');
}

btnClose1.addEventListener('click', closeModal1);
overlay1.addEventListener('click', closeModal1);


// 222 Переменные для модального окна в третьем блоке 
const btnShare2 = document.getElementById('btn-in-card-2');
const modal2 = document.getElementById('wrapper-modal-2');

const overlay2 = document.getElementById('overlay-2');
const btnClose2 = document.getElementById('btn-in-madal-window-close-2');

// Start modal window
btnShare2.addEventListener('click', () => {
    modal2.classList.add('active');
});

const closeModal2 = () => {
    modal2.classList.remove('active');
}

btnClose2.addEventListener('click', closeModal2);
overlay2.addEventListener('click', closeModal2);


// 333 Переменные для модального окна в третьем блоке 
const btnShare3 = document.getElementById('btn-in-card-3');
const modal3 = document.getElementById('wrapper-modal-3');

const overlay3 = document.getElementById('overlay-3');
const btnClose3 = document.getElementById('btn-in-madal-window-close-3');

// Start modal window
btnShare3.addEventListener('click', () => {
    modal3.classList.add('active');
});

const closeModal3 = () => {
    modal3.classList.remove('active');
}

btnClose3.addEventListener('click', closeModal3);
overlay3.addEventListener('click', closeModal3);


// 444 Переменные для модального окна в третьем блоке 
const btnShare4 = document.getElementById('btn-in-card-4');
const modal4 = document.getElementById('wrapper-modal-4');

const overlay4 = document.getElementById('overlay-4');
const btnClose4 = document.getElementById('btn-in-madal-window-close-4');

// Start modal window
btnShare4.addEventListener('click', () => {
    modal4.classList.add('active');
});

const closeModal4 = () => {
    modal4.classList.remove('active');
}

btnClose4.addEventListener('click', closeModal4);
overlay4.addEventListener('click', closeModal4);


// 555 Переменные для модального окна в третьем блоке 
const btnShare5 = document.getElementById('btn-in-card-5');
const modal5 = document.getElementById('wrapper-modal-5');

const overlay5 = document.getElementById('overlay-5');
const btnClose5 = document.getElementById('btn-in-madal-window-close-5');

// Start modal window
btnShare5.addEventListener('click', () => {
    modal5.classList.add('active');
});

const closeModal5 = () => {
    modal5.classList.remove('active');
}

btnClose5.addEventListener('click', closeModal5);
overlay5.addEventListener('click', closeModal5);

// Всплывающее окно для связи
const appointmentMeBlockFour = document.getElementById('btn-appointment-in-fourth-block');
const appointmentMeBlockFour1 = document.getElementById('btn-appointment-in-fourth-block-1');
const appointmentMeBlockFour2 = document.getElementById('btn-appointment-in-fourth-block-2');
const appointmentMeBlockFour3 = document.getElementById('btn-appointment-in-fourth-block-3');

const appointmentMeBlockFour4 = document.getElementById('btn-appointment-in-fourth-block-4');
const appointmentMeBlockFour5 = document.getElementById('btn-appointment-in-fourth-block-5');
const appointmentMeBlockFive = document.getElementById('btn-appointment-window-in-fifth-block');

const appointmentWindowBlockFive = document.getElementById('appointment-window-in-fourth-block-wrapper-5');

const appointmentWindowBlockFiveOverlay = document.getElementById('appointment-window-in-fourth-block-overlay-5');
const btnCloseBlockFive = document.getElementById('btn-close-in-appointment-window-in-fourth-block-5');

appointmentMeBlockFive.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});
appointmentMeBlockFour5.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});
appointmentMeBlockFour4.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});
appointmentMeBlockFour3.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});
appointmentMeBlockFour2.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});
appointmentMeBlockFour1.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});
appointmentMeBlockFour.addEventListener('click', () => {
    appointmentWindowBlockFive.classList.add('active');
});

const closeAppointmentkWindowInBlockFive = () => {
    appointmentWindowBlockFive.classList.remove('active');
}

btnCloseBlockFive.addEventListener('click', closeAppointmentkWindowInBlockFive);
appointmentWindowBlockFiveOverlay.addEventListener('click', closeAppointmentkWindowInBlockFive);

