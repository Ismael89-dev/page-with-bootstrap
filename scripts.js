const navElements = document.querySelectorAll('header .container nav ul li a');

navElements.forEach((item, )=>{
    item.addEventListener('click', ()=>{
        navElements.forEach((item)=>{
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
})

