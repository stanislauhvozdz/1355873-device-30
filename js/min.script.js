let navigationButton=document.querySelector(".navigation-list_button");navigationButton.addEventListener("click",function(e){e.preventDefault(),navigationButton.classList.toggle("navigation-list_button--active")});let slideOne=document.querySelector(".slide-1"),slideTwo=document.querySelector(".slide-2"),slideThree=document.querySelector(".slide-3"),buttonSlideOne=document.querySelector(".slide-promo-1"),buttonSlideTwo=document.querySelector(".slide-promo-2"),buttonSlideThree=document.querySelector(".slide-promo-3");buttonSlideOne.addEventListener("click",function(){slideTwo.classList.remove("slide--current"),slideThree.classList.remove("slide--current"),slideOne.classList.add("slide--current"),buttonSlideTwo.classList.remove("slider-controls_button--current"),buttonSlideThree.classList.remove("slider-controls_button--current"),buttonSlideOne.classList.add("slider-controls_button--current")}),buttonSlideTwo.addEventListener("click",function(){slideOne.classList.remove("slide--current"),slideThree.classList.remove("slide--current"),slideTwo.classList.add("slide--current"),buttonSlideOne.classList.remove("slider-controls_button--current"),buttonSlideThree.classList.remove("slider-controls_button--current"),buttonSlideTwo.classList.add("slider-controls_button--current")}),buttonSlideThree.addEventListener("click",function(){slideOne.classList.remove("slide--current"),slideTwo.classList.remove("slide--current"),slideThree.classList.add("slide--current"),buttonSlideOne.classList.remove("slider-controls_button--current"),buttonSlideTwo.classList.remove("slider-controls_button--current"),buttonSlideThree.classList.add("slider-controls_button--current")});let slideFour=document.querySelector(".slide-4"),slideFive=document.querySelector(".slide-5"),slideSix=document.querySelector(".slide-6"),buttonServiceSlideOne=document.querySelector(".service-button-one"),buttonServiceSlideTwo=document.querySelector(".service-button-two"),buttonServiceSlideThree=document.querySelector(".service-button-three");buttonServiceSlideOne.addEventListener("click",function(){slideFive.classList.remove("delivery-slider_slide--curent"),slideSix.classList.remove("delivery-slider_slide--curent"),slideFour.classList.add("delivery-slider_slide--curent"),buttonServiceSlideTwo.classList.remove("service-button--current"),buttonServiceSlideThree.classList.remove("service-button--current"),buttonServiceSlideOne.classList.add("service-button--current")}),buttonServiceSlideTwo.addEventListener("click",function(){slideFour.classList.remove("delivery-slider_slide--curent"),slideSix.classList.remove("delivery-slider_slide--curent"),slideFive.classList.add("delivery-slider_slide--curent"),buttonServiceSlideOne.classList.remove("service-button--current"),buttonServiceSlideThree.classList.remove("service-button--current"),buttonServiceSlideTwo.classList.add("service-button--current")}),buttonServiceSlideThree.addEventListener("click",function(){slideFour.classList.remove("delivery-slider_slide--curent"),slideFive.classList.remove("delivery-slider_slide--curent"),slideSix.classList.add("delivery-slider_slide--curent"),buttonServiceSlideOne.classList.remove("service-button--current"),buttonServiceSlideTwo.classList.remove("service-button--current"),buttonServiceSlideThree.classList.add("service-button--current")});let wrapperPopupFeedback=document.querySelector(".wrapper-popup-feedback"),feedbackPopupButton=document.getElementById("feedback-button"),buttonCloseFeedback=document.querySelector(".button-close-feedback"),formName=wrapperPopupFeedback.querySelector("#form-name"),formEmail=wrapperPopupFeedback.querySelector("#form-email"),formTextArea=wrapperPopupFeedback.querySelector("#form-textarea");feedbackPopupButton.addEventListener("click",function(e){e.preventDefault(),wrapperPopupFeedback.classList.add("popup-wrapper--active"),formName.focus()}),buttonCloseFeedback.addEventListener("click",function(e){e.preventDefault(),wrapperPopupFeedback.classList.remove("popup-wrapper--active")}),window.addEventListener("keydown",function(e){"Escape"===e.key&&wrapperPopupFeedback.classList.contains("popup-wrapper--active")&&(e.preventDefault(),wrapperPopupFeedback.classList.remove("popup-wrapper--active"))});let wrapperPopupMap=document.querySelector(".wrapper-popup-map"),mapPopupToggle=document.getElementById("map-popup-link"),buttonCloseMap=document.querySelector(".button-close-map");mapPopupToggle.onclick=function(){wrapperPopupMap.classList.add("popup-wrapper--active")},buttonCloseMap.onclick=function(){wrapperPopupMap.classList.remove("popup-wrapper--active")},window.onclick=function(e){e.target==wrapperPopupMap&&wrapperPopupMap.classList.remove("popup-wrapper--active")},window.addEventListener("keydown",function(e){"Escape"===e.key&&wrapperPopupMap.classList.contains("popup-wrapper--active")&&(e.preventDefault(),wrapperPopupMap.classList.remove("popup-wrapper--active"))});