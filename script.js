const btn = document.querySelectorAll('.btn')
const display = document.querySelector('#display')
let st = ""
btn.forEach(function (n) {
    n.addEventListener('click', function (k) {
        const val = (k.target.value)
        console.log(val)
        const calcu = document.querySelector('#calcu')
        st += val
        display.value = st
        calcu.addEventListener('click', calculate)
        function calculate() {
            const result = eval(st)
            display.value = result
        }
        const cancel = document.querySelector('#cancel')
        cancel.addEventListener('click', cancelval)
        function cancelval() {
            st = ""
            display.value = ""
        }
    })
})