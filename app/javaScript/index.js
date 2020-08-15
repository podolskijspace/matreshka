$(document).ready(function () {
  $('.slider__list', '.slider__slider--first').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '.slider__arrow--right-first',
    prevArrow: '.slider__arrow--left-first',
    arrows: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  });

  $('.slider__list', '.slider__slider--second').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '.slider__arrow--right-second',
    prevArrow: '.slider__arrow--left-second',
    arrows: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        }
      },
    ],

  });

  $('.galery__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
  });

  $('.hero__slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    dots: true,
    dotsClass: 'hero__dots',
    asNavFor: '.hero__list-left'
  });

  $('.hero__list-left').slick({
    arrows: false,
    asNavFor: '.hero__slides'
  })

  function getSiblings (elem) {
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
  
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling
    }
  
    return siblings;
  
  };

  function makeCounters () {
    let counters = document.querySelectorAll('.js-counter');
    
    counters.forEach(counter => {
      let plus = counter.querySelector('.js-plus'),
          minus = counter.querySelector('.js-minus'),
          count = counter.querySelector('.js-count');

      plus.addEventListener('click', event => {
        count.textContent = +count.textContent + 1;
      });

      minus.addEventListener('click', event => {
        if (+count.textContent > 0) {
          count.textContent = +count.textContent - 1;
        }
      });
    })
  }
  
  makeCounters();

  function countPopup () {
    let wrapper = document.querySelector('.popup--product'),
        items = wrapper.querySelectorAll('.js-popup-item'),
        checkboxes = wrapper.querySelectorAll('.js-popup-checkbox'),
        count = wrapper.querySelector('.js-count'),
        cost = wrapper.querySelector('.js-cost'),
        plus = wrapper.querySelector('.js-plus'),
        minus = wrapper.querySelector('.js-minus');

    function countMax () {
      let counter = 0;
      checkboxes.forEach((checkbox, i) => {
        if (checkbox.checked) {
          console.log(items[i].dataset.cost);
          counter += +items[i].dataset.cost;
        }
      })

      cost.textContent = +counter + +cost.dataset.cost * +count.textContent + ' руб.';
    
      if (+count.textContent === 0) {
        cost.textContent = "0 руб.";
      }
    };

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', countMax);
    });

    plus.addEventListener('click', countMax);
    minus.addEventListener('click', countMax);
  };

  if (document.querySelector('.popup--product')) {
    countPopup();
  }


  const accordion = () => {
    const btns = document.querySelectorAll('.js-accordion-btn');
  
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parentItem = btn.closest('.js-accordion-item');
        const itemSiblings = getSiblings(parentItem);
        const isActive = parentItem.classList.contains('active');
  
        // show/hide accordion-content
        itemSiblings.forEach((itemSibling) => {
          itemSibling.classList.remove('active');
        });
  
        if(isActive){
          parentItem.classList.remove('active');
        }else{
          parentItem.classList.add('active');
        }
      });
    });
  };

  accordion();

  const popup = () => {
    const popups = document.querySelectorAll('.popup'),
          productPopupBtns = document.querySelectorAll('.js-product-popup'),
          productPopupPayBtns = document.querySelectorAll('.js-product-popup-pay'),
          productPopup = document.querySelector('.popup--product'),
          productPopupPay = document.querySelector('.popup--pay');

    popups.forEach(popup => {
      popup.addEventListener('click', event => {
        const target = event.target;
        if (!target.closest('.popup__wrapper') || target.closest('.popup__close')) {
          popup.classList.remove('active');
        }
      })
    });

    productPopupBtns.forEach(btn => {
      console.log(btn);
      btn.addEventListener('click', event => {
        console.log('clcik');
        productPopup.classList.add('active');
      })
    })

    productPopupPayBtns.forEach(btn => {
      btn.addEventListener('click', event => {
        productPopupPay.classList.add('active');
      })
    })
  }

  popup();


});
