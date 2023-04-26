const bar = document.querySelector('.bar');
const chancel = document.querySelector('#chancel');
const linksBar = document.querySelector('.links-bar');
const bodyContainer = document.querySelector('.body-container')

bar.addEventListener('click', function(){
    linksBar.style.left = '0';
    bar.style.left ='-300px';
    bodyContainer.style.left = '250px'
    
    
    

})
chancel.addEventListener('click', function(){
    linksBar.style.left = '-300px'
    bar.style.left = '0'
    bodyContainer.style.left = '0px'
    
    
})



