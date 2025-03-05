const mask = (selector) => {

    let setCursorPosition = (elem, pos) => {
        elem.focus();
        let localPos = pos;

        if (pos < 2) {
            localPos = 2
        }

        if (elem.setSelectionRange) {
            elem.setSelectionRange(localPos, localPos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', localPos);
            range.moveStart('character', localPos);
            range.select();
        }
    }

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, ''),
            varib = '';

        if (def.length >= val.length) {
            val = def;
        }


        varib = matrix.replace(/./g, function(a){
            return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ''
            : a;
        })

        if (!varib.startsWith('+7')) {
            this.value = '+7';
        } else {
            this.value = varib;
        }
        
        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this, this.value.length);
        }
    }

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
        input.addEventListener('click', createMask);
    })
};

export default mask;