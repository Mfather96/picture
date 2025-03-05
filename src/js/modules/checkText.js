const checkText = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        // input.addEventListener('keypress', (e) => {
        //     console.log(!e.key.match(/[^а-яё 0-9]/ig));
        //     if (e.key.match(/[^а-яё 0-9]/ig)) {
        //         // e.preventDefault();
        //     } else if (!input.value.match(/[^а-яё 0-9]/ig)) {
        //         input.value = '';
        //     }
        // })

        input.addEventListener('input', () => {
            
            if (!input.value.match(/[^а-яё 0-9]/ig)) {
                console.log('here');
                
                input.value = '';
            }
        })
    })
};

export default checkText;