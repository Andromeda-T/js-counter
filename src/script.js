
// selectors

let box_s = document.querySelector('#box_s');
let inp_s = document.querySelector('#inp_s');
let btn_s = document.querySelector('#btn_s');
let err_s = document.querySelector('#err_s');
let cir_s = document.querySelector('#cir_s');
let spn_s = document.querySelector('#spn_s');
let goo_s = document.querySelector('#goo_s');
let suc_s = document.querySelector('#suc_s');
let persent = 'p100'

// items 

btn_s.addEventListener('click', function () {
    let secound = parseInt(inp_s.value);
    let isValid = !isNaN(secound);
    cir_s.classList.toggle('hidden', !isValid);
    err_s.classList.toggle('hidden', isValid);
    box_s.classList.toggle('hidden', isValid);
})

// timer

btn_s.addEventListener('click', function () {
    let secound = parseInt(inp_s.value);
    let main = inp_s.value;
    inp_s.value = ''
    spn_s.textContent = secound
    cir_s.classList.add('p100')
    suc_s.classList.add('hidden')
    goo_s.classList.remove('hidden')
    let timer = setInterval(() => {
        cir_s.classList.remove('p100')
        secound--
        cir_s.classList.remove(`p${persent}`)
        persent = Math.abs(Math.floor((((main - secound) / main) * 100) - 100))
        if (persent <= 0) {
            clearInterval(timer)
            box_s.classList.remove('hidden');
            suc_s.classList.remove('hidden')
            cir_s.classList.add('hidden')
            goo_s.classList.add('hidden')
        }
        console.log(persent)
        cir_s.classList.add(`p${persent}`)
        spn_s.textContent = secound

    }, 1000);
})

