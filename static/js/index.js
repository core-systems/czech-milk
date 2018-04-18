addDynamicEventListener(document.body, 'click', '.navbar-burger', function (e) {
    console.log('Clicked', e.target, e.target.dataset.target)
    var $el = e.target
    // Get the target from the "data-target" attribute
    var target = $el.dataset.target;
    var $target = document.getElementById(target);
    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
    $el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
});

addDynamicEventListener(document.body, 'submit', 'form[netlify]', function (e) {
  e.preventDefault()
  console.log('FORM submited', e.target, e.target.dataset.target)
  var $el = e.target
/*
  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
*/
});
