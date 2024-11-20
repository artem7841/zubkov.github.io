function checkName() {
    const name = document.querySelector('input[name="name"]').value;
    const nameRegex = /^[а-яА-Я\s]{2,15}$/; 
    // Проверка имени
    if (nameRegex.test(name)) {
        document.querySelector('input[name="name"]').style.borderColor  = "green";
        document.querySelector('input[name="name"]').style.backgroundColor = "#e6ffe6"
        return true
    } else {
        document.querySelector('input[name="name"]').style.borderColor  = "red";
        document.querySelector('input[name="name"]').style.backgroundColor = "#ffe6e6";
        return false

    }
}




function checkPhone() {
    const phone = document.querySelector('input[name="phone"]').value;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; 
    if (phoneRegex.test(phone)) {
        document.querySelector('input[name="phone"]').style.borderColor  = "green";
        document.querySelector('input[name="phone"]').style.backgroundColor = "#e6ffe6"
        return true
    } else {
        document.querySelector('input[name="phone"]').style.borderColor  = "red";
        document.querySelector('input[name="phone"]').style.backgroundColor = "#ffe6e6";
        return false

    }
}

function checkIndex() {
    const index = document.querySelector('input[name="postalCode"]').value;
    const indexRegex = /^[0-9]{5}$/; 
    if (indexRegex.test(index)) {
        document.querySelector('input[name="postalCode"]').style.borderColor  = "green";
        document.querySelector('input[name="postalCode"]').style.backgroundColor = "#e6ffe6"
        return true
    } else {
        document.querySelector('input[name="postalCode"]').style.borderColor  = "red";
        document.querySelector('input[name="postalCode"]').style.backgroundColor = "#ffe6e6";
        return false

    }
}

function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const index = document.querySelector('input[name="postalCode"]').value;
    const deliveryDate = document.querySelector('input[name="deliveryDate"]').value;
    //const deliveryMethod = document.querySelector('input[name="deliveryMethod"]').value;
    // Проверка полей на заполнение
    if (!(checkIndex() && checkPhone()  && checkName())) {
        alert('Пожалуйста, заполните все поля правильно.');
        return false;
    }

    // Открытие модального окна с данными
    alert(`
        Подтверждение заказа
        Имя получателя: ${name}
        Почтовый индекс: ${index}
        Дата доставки: ${deliveryDate}
        Телефон: ${phone}
    `);
    return false; 
}



function chCol()
{
    if( document.getElementById("btn2").style.backgroundColor == "red") {
        document.getElementById("btn2").style.backgroundColor = "rgb(224, 194, 27)"
    } else {
        document.getElementById("btn2").style.backgroundColor = "red"
    }

}

function chWH()
{
    const image = document.getElementById("img");
    const currentWidth = image.offsetWidth; 
    const currentHeight = image.offsetHeight;
    document.getElementById("img").style.width = (currentWidth + 2) + 'px'; 
    document.getElementById("img").style.height = (currentHeight + 2) + 'px'; 
}



