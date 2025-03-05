const accordeon = (item) => {
    const items = document.querySelectorAll(item);
    
    items.forEach((item) => {
        item.addEventListener('click', function() {
            items.forEach(item => {       
                if (item !== this) {
                    collapseAll(item);
                }     
            })

            if (!this.classList.contains('active')) {
                expandBlock(this);
            } else {
                collapseAll(this);
            }
        })
    })

    function collapseAll(item) {
        item.classList.remove('active');
        item.nextElementSibling.classList.remove('active');
        item.nextElementSibling.style.maxHeight = '0px';
    }

    function expandBlock(item) {
        item.classList.add('active');
        item.nextElementSibling.classList.add('active');
        item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 80 + 'px';
    }
};

export default accordeon;