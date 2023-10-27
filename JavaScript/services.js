// service blocks
const serviceIntegration = document.querySelector('#integration');
const serviceDevelopment = document.querySelector('#development');
const serviceTest = document.querySelector('#test');
const services = document.querySelectorAll('.wrapper__our__services');

// service buttons
const btnIntegration = document.querySelector('#integrationBtn');
const btnDevelopment = document.querySelector('#developmentBtn');
const btnTest = document.querySelector('#testBtn');

const ANIM_DURATION = 300;


services.forEach(s => {
    s.style = `transition: all ${ANIM_DURATION/1000}s ease;`
})

btnIntegration.addEventListener('click', function() {
    serviceIntegration.classList.add('our-service_active');
});
btnDevelopment.addEventListener('click', function() {
    serviceIntegration.classList.add('our-service_active');
    setTimeout(() => {serviceDevelopment.classList.add('our-service_active')}, ANIM_DURATION);
});
btnTest.addEventListener('click', function() {
    serviceIntegration.classList.add('our-service_active');
    setTimeout(() => serviceDevelopment.classList.add('our-service_active'), ANIM_DURATION);
    setTimeout(() => serviceTest.classList.add('our-service_active'), 2 * ANIM_DURATION);

});

window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {  // wheeldown
        showServices();
    } else {
        hideServices();
    }
});

function showServices () {
    if (!serviceIntegration.classList.contains('our-service_active')) {
        serviceIntegration.classList.add('our-service_active');
    } else if (!serviceDevelopment.classList.contains('our-service_active')) {
        serviceDevelopment.classList.add('our-service_active');
    } else {
        serviceTest.classList.add('our-service_active');
    }
}

function hideServices() {
    if (serviceTest.classList.contains('our-service_active')) {
        serviceTest.classList.remove('our-service_active');
    } else if (serviceDevelopment.classList.contains('our-service_active')) {
        serviceDevelopment.classList.remove('our-service_active');
    } else if (serviceIntegration.classList.contains('our-service_active')) {
        serviceIntegration.classList.remove('our-service_active');
    }
}

window.addEventListener('click', function(e) {
    if (!e.target.closest('.our-service_active') && !e.target.closest('.service-btn')) {
        hideAllServices();
    }

})

function hideAllServices() {
    serviceTest.classList.remove('our-service_active');
    setTimeout(() => serviceDevelopment.classList.remove('our-service_active'), ANIM_DURATION);
    setTimeout(() => serviceIntegration.classList.remove('our-service_active'), 2*ANIM_DURATION);
}