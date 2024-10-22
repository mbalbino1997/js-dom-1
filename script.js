const imgLight=document.querySelector('.light');
const btnLight=document.querySelector('.btn-light');
btnLight.addEventListener('click',function(){
    if(imgLight.src.includes('white_lamp.png')){
        imgLight.src="./img/yellow_lamp.png"
        btnLight.textContent= 'Spegni';
    } else {
        imgLight.src="./img/white_lamp.png"
        btnLight.textContent= 'Accendi';
    }
    
})
