const Fname = document.getElementById('fname')
const Lname = document.getElementById('lname')
const Email = document.getElementById('email')
const Phone = document.getElementById('phone')
const Mytext = document.getElementById('my_text')
const Myform = document.getElementById('form')
const Inputleng = document.querySelectorAll('input')
const DisplayText = document.getElementById('displayText')

Myform.addEventListener('submit', (e) => {
    e.preventDefault();

    const FormCheck = CheckForm(Inputleng.length, Fname.value, Lname.value, Email.value, Phone.value, Mytext.value)
    if (FormCheck) {
        alert('You have been registered!')
    } else {
        alert('Please fill in the form with correct information.')
    }

})

function CheckForm(INPUT_LENGTH, FIRST, LAST, EMAIL, PHONE, MYTEXT) {
    const NameReq = /^[A-Za-z]+$/;
    const EmailReq = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let count = 0;
    if (FIRST !== '' && LAST !== '') {
        if (NameReq.test(FIRST) && NameReq.test(LAST))
            count = count + 1
    }
    if (EMAIL !== '') {
        if (EmailReq.test(EMAIL))
            count = count + 1
    }
    if (PHONE !== "" && PHONE.length == 10 && !isNaN(PHONE))
        count = count + 1
    if (MYTEXT !== '')
        count = count + 1

    if (count == INPUT_LENGTH)
        return true
    else
        return false
}

