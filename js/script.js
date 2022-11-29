const modal = document.getElementById('modal');
const clsBtn = document.getElementById('clsBtn');
const modalBody = document.querySelector('.body');
const images = document.querySelectorAll('.img');

if(clsBtn){
  clsBtn.addEventListener('click',()=>{
    modal.classList.remove('active');
  })
}
images.forEach((image)=>{
  image.addEventListener('click',()=>{
    modal.classList.add('active');
    const imageNew = document.createElement('img')
    imageNew.src=image.src
    while(modalBody.firstChild){
      modalBody.removeChild(modalBody.firstChild);
    }
    modalBody.append(imageNew);
  })
})