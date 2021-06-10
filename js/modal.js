  let img = document.querySelectorAll('.img');
  let modal = document.querySelector('.media_modal');
  let modalImg = document.querySelector(".modal_content");
  const span = document.getElementsByClassName("close")[0];

  img.forEach(link => link.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    })
  );

  span.addEventListener("click", function(){
  modal.style.display = "none";
  });

  window.addEventListener("click", function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
  });