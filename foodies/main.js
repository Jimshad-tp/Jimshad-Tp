// nav fixed


let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
});


// counter design

// select the element
const counters = document.querySelectorAll('.counter');

// iterate through all the counter elements
counters.forEach(counter => {
  // function to increment the counter
  function updateCount() {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerHTML;

    const inc = Math.floor((target - count) / 100);

    if (count < target && inc > 0) {
      counter.innerHTML = (count + inc);
      // repeat the function
      setTimeout(updateCount, 100);
    }
    // if the count not equal to target, then add remaining count
    else {
      counter.innerHTML = target;
    }
  }
  updateCount();
});