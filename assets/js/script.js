const container = document.getElementById('container');
let isEn = true;

const getLen=(len)=>{
    return isEn ?
        {
            lbl: 'en',
            txt: 'Español'
        }
        :
        {
            lbl: 'es',
            txt: 'English'
        };
};

const renderSite=()=>{
    const len = getLen();
    const buttonBox = document.createElement('div');
    const button = document.createElement('div');
    buttonBox.setAttribute('class', 'btn-box');
    button.setAttribute('class', 'len-btn');
    button.textContent = len.txt;

    const flier = document.createElement('img');

    const flierObj = {
        class: {
            att: 'class',
            lbl: 'flier'
        },
        src: {
            att: 'src',
            lbl: `assets/images/flier-${len.lbl}.jpg`
        },
        alt: {
            att: 'alt',
            lbl: 'Flier for the HARM-less smoking cessation research study.'
        }
    };

    for (var key in flierObj){
        flier.setAttribute(flierObj[key].att, flierObj[key].lbl);
    };


    const lenSwitch = ()=>{
        return isEn = isEn ? false : true;
    };

    button.addEventListener('click', (e)=>{
        lenSwitch();
        container.innerHTML='';
        renderSite();
    }, { once: true });

    container.appendChild(buttonBox).appendChild(button);
    container.appendChild(flier);
};

renderSite();