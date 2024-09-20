window.addEventListener('scroll',function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY>880)

})

const sobreImage = document.getElementById('sobreImage');

  document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica a visibilidade ao carregar a página
  });

