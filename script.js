document.getElementById('click-gacha').addEventListener('click', gacha);

function gacha() {
  let rare = false;
  let name = document.getElementById("nama").value;
  let result = Math.ceil(Math.random() * 5);
  let rate = Math.ceil( result * 0.3);
  
  if(result == rate){
    rare = true;
  }
  if(!name) {
    name = 'Guest';
  }
  rare = rare ? 'SSR' : 'Normal';

  document.getElementById("hasil-gacha").src = `img/${result}.png`;
  document.getElementById("hasil-container").style.display = 'block';


  document.getElementById("congrats").innerHTML = `Selamat ${name}, Anda mendapatkan kartu ${rare}`
}

let slide_index = 1;  
displaySlides(slide_index);  

function showNext(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    let slides = document.getElementsByClassName("imas_gallery");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  