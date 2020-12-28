const switcher = document.querySelector('.switcher');

switcher.addEventListener('click', () => {
    switcher.classList.toggle('active');
    if(switcher.classList.contains('active')){
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }  
})