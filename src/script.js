let inp_s = document.querySelector('#input-s');
let btn = document.querySelector('#btn');

btn.addEventListener('click' , function () {
    let seconds = parseInt(inp_s.value)
    let eror = document.querySelector('#eror')
    if(isNaN(seconds)){
        eror.classList.remove('hidden')
    }
    else{
        eror.classList.add('hidden')
    }
    
    // console.log(seconds)
})