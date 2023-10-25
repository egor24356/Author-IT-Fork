//inputmask
const form = document.querySelector('.mailer');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.mailer', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 15
        },
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputMask.unmaskedValue();
                return Number(phone) && phone.length === 10;
            }
        }
    },
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Введите 2 и более символов',
            maxLength: 'Введите меньше 15 символов'
        },
        email: {
            email: 'Введите корректный email',
            required: 'Введите email'
        },
        tel: {
            required: 'Введите телефон',
            function: 'Здесь должно быть 10 символов без +7'
        }

    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) { // статус верной отправки
                    console.log('Отправлено');
                } 
            }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
})