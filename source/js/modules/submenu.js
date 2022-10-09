var submenu = document.querySelector('.open-submenu');
var bg = document.querySelector('.bg');
if (submenu) {

  // document.addEventListener('click', function(evt) {
  //   var nav
  //   if (evt.target.parentElement.classList.contains('open-submenu')) {
  //     var button = evt.target.parentElement;
  //     nav = button.nextElementSibling;
  //     nav.classList.toggle('hidden');
  //   } else if (evt.target.classList.contains('open-submenu')) {
  //     var button = evt.target;
  //     nav = button.nextElementSibling;
  //     nav.classList.toggle('hidden');
  //   }
  // });
  var nav = document.querySelector('.header__nav');
  document.addEventListener('mouseover', function(evt) {
    if (evt.target.parentElement) {
      if (evt.target.parentElement.classList.contains('open-submenu')) {
        evt.preventDefault();
        var button = evt.target.parentElement;
        var nav = button.nextElementSibling;
        nav.classList.remove('hidden');
      }
    }
  });

  nav.addEventListener('mouseleave', function(evt) {
    evt.stopPropagation();
    nav.classList.add('hidden');
    // console.log(evt.target);
  });
}
