const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        menuItems = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        no = document.querySelector('.portfolio-no');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.tagName === 'LI') {
                removeAll();
                const activeClass = target.classList.value;
                target.classList.add('active')

                if (activeClass === 'grandmother' || activeClass === 'granddad') {
                    no.style.display = 'block';
                    no.classList.add('animated', 'fadeIn');
                    return;
                }

                wrapper.querySelectorAll('.' + activeClass).forEach(elem => {
                    elem.style.display = 'block';
                    elem.classList.add('animated', 'fadeIn')
                })
            }
        })
    });

    function removeAll() {
        menuItems.forEach(item => item.classList.remove('active'));

        if (no) {
            no.style.display = 'none';
            no.classList.remove('animated', 'fadeIn');
        }

        wrapper.querySelectorAll('.portfolio-block.all').forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        })
    }
};

export default filter;
