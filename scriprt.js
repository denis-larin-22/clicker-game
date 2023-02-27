const wrap = document.querySelector('.wrap');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const save = document.querySelector('.save');



    let count = 0 || +localStorage.getItem('current');
    output.textContent = count;

    
    wrap.addEventListener('click', event => {
        if(!event.target.closest('.btn')) return;
        count += 1;
        
        output.textContent = count;
    })
    

    wrap.addEventListener('click', event => {
        if(event.target.closest('.save')) {
            let current = output.textContent;
            
            localStorage.setItem('current', current);
        }
    });

// click();