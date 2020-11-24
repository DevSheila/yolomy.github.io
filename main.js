(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
})(jQuery); // End of use strict


// $('input').click(function() {
//     var category = $(this).val();

//     if (!$(this).attr('checked')) $('.' + category).hide();
//     else $('.' + category).show();

// });

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allProducts = Array.from(document.querySelectorAll('.products'));
var checked = {};

getChecked('men');
getChecked('women');
getChecked('children');

Array.prototype.forEach.call(allCheckboxes, function (el) {
    el.addEventListener('change', toggleCheckbox);
  });

  
  function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
  console.log("checked" + e.target.name)

  }

  function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
        console.log(el.value);
        return el.value;
    });
  }

  function setVisibility() {
    allProducts.map(function (el) {
      var men = checked.men.length ? _.intersection(Array.from(el.classList), checked.men).length : true;
      var women = checked.women.length ? _.intersection(Array.from(el.classList), checked.women).length : true;
      var children = checked.children.length ? _.intersection(Array.from(el.classList), checked.children).length : true;
      if (men && women && children) {
          if(men || women){
            el.style.display = 'block';
            console.log("visiblity check");
          }
          if(men && women && children){
            el.style.display = 'block';
            console.log("visiblity check");
          }
       
      }else {
        el.style.display = 'none';
      }
      
      
    });
  }

  
    

 