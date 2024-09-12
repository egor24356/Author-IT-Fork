function changeMailer() {
    const mailerBefore = document.querySelector('.mailer-before');
    const mailerAfter = document.querySelector('.mailer-after');

    mailerAfter.classList.remove('none');
    mailerBefore.classList.add('none');
}

export default changeMailer;