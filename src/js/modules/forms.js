import { postData } from "../services/requests";

const formsModule = () => {

    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          uploadInputs = document.querySelectorAll('[name="upload"]'),
          selects = document.querySelectorAll('select')

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Приносим извинения, но наш сервер не работает',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
        spinner: 'assets/img/spinner.gif',
    }

    uploadInputs.forEach(input => {
        input.addEventListener('input', () => {
            let fileName = input.files[0].name
                            .split('.')
                            .map(word => word.length > 5 ? `${word.slice(0,5)}..` : word)
                            .join('.');

            input.previousElementSibling.textContent = fileName;
        })
    })
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const api = form.closest('.popup-design') || form.classList.contains('calc-form')
                ? 'assets/designer.php'
                : 'assets/server.php'

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            const statusImg = document.createElement('img');
            statusImg.src = message.spinner;
            statusMessage.appendChild(statusImg);

            const statusText = document.createElement('div');
            statusText.textContent = message.loading;
            statusMessage.appendChild(statusText);

            form.parentNode.appendChild(statusMessage);
            form.style.display = 'none';
            const formData = new FormData(form);
            console.log(formData)

            selects.forEach(select => {
                formData.append(select.getAttribute('id'), select.value);
            })

            if (form.querySelector('[name="total-price"]')) {
                formData.append('price', form.querySelector('[name="total-price"]').textContent)
            }

            postData(api, formData)
                .then(response => {
                    console.log(response);
                    statusText.textContent = message.success;
                    statusImg.src = message.ok;
                })
                .catch(() => {
                    statusText.textContent = message.failure;
                    statusImg.src = message.fail;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                    }, 2000);
                })

        })
    })

    function clearInputs() {
        inputs.forEach(input => {
            input.value = '';
        })

        uploadInputs.forEach(input => {
            input.previousElementSibling.textContent = '';
        })
    }
};

export default formsModule;
