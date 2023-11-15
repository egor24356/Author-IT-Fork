function btnUp() {

  const btn = document.querySelector('.arrow-up-btn');
  
  btn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
}

export default btnUp;