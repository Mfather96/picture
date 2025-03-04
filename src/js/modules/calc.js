const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    function calcPrice() {
        let sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (!sizeBlock.value || !materialBlock.value) {
            resultBlock.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7) + 'руб';
        } else {
            resultBlock.textContent = Math.round(sum) + 'руб';
        }
    }

    sizeBlock.addEventListener('change', calcPrice);
    materialBlock.addEventListener('change', calcPrice);
    optionsBlock.addEventListener('change', calcPrice);
    promocodeBlock.addEventListener('input', calcPrice);
};

export default calc;
