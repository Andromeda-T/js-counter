// selectors

let box_s = document.querySelector('#box_s');
let inp_s = document.querySelector('#inp_s');
let btn_s = document.querySelector('#btn_s');
let err_s = document.querySelector('#err_s');
let cir_s = document.querySelector('#cir_s');
let spn_s = document.querySelector('#spn_s');
let goo_s = document.querySelector('#goo_s');
let suc_s = document.querySelector('#suc_s');
let persent , secound , main , last_present , isValid

btn_s.addEventListener('click', function () {
    secound = parseInt(inp_s.value);
    isValid = !isNaN(secound);
    cir_s.classList.toggle('hidden', !isValid);
    err_s.classList.toggle('hidden', isValid);
    box_s.classList.toggle('hidden', isValid);
})

let start_timer = () => {
    secound = parseInt(inp_s.value);
    main = inp_s.value;
    inp_s.value = ''
    let timer = setInterval(() => {
        if (last_present) cir_s.classList.remove(last_present)
        secound--
        spn_s.textContent = secound
        persent = Math.abs(Math.floor((((main - secound) / main) * 100) - 100))
        cir_s.classList.add(`p${persent}`)
        last_present = `p${persent}`
        if (secound < 0) {
            clearInterval(timer)
            box_s.classList.remove('hidden');
            suc_s.classList.remove('hidden')
            cir_s.classList.add('hidden')
            goo_s.classList.add('hidden')
        }
    }, 1000);
}

btn_s.addEventListener('click', function () {
    spn_s.textContent = secound
    cir_s.classList.add('p100')
    suc_s.classList.add('hidden')
    last_present = 'p100'
    if (!isNaN(secound)) goo_s.classList.remove('hidden')
    start_timer()
})