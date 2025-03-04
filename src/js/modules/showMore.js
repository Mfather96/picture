import {getData} from '../services/requests';

const showMore = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', async function() {
        await getData('http://localhost:3000/styles')
            .then(response => { console.log(response); createCards(response)})
            .catch(e => {
                throw new Error(e);
            });
        this.remove();
    })

    function createCards(response) {
        response.forEach(({src, title, link}) => {

            const card = document.createElement('div');
            console.log(src, title, link);

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        })
    }
};

export default showMore;
