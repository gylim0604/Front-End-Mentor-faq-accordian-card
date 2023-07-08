class Accordian extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'})
        const wrapper = document.createElement('div');
        let isExpanded = false


        wrapper.setAttribute('class', 'accordian');

        const onClick = () => {
            if(!isExpanded){
                wrapper.classList.add('expanded')
            }
            else{
                wrapper.classList.remove('expanded')
            }
            isExpanded = !isExpanded
        }

        // Create accordian title
        const titleContainer = wrapper.appendChild(document.createElement('div'));
        titleContainer.setAttribute('class', 'title-container');
        const title  = titleContainer.appendChild(document.createElement('p'));
        title.textContent = this.hasAttribute('title') ? this.getAttribute('title') : ''
        // Create accordian dropdown
        const dropdown = titleContainer.appendChild(document.createElement('a'));
        dropdown.classList.add('dropdown')
        const dropdownIcon = dropdown.appendChild(document.createElement('img'));
        dropdownIcon.src = '/images/icon-arrow-down.svg'

        dropdown.addEventListener('click', onClick)
        // Create accordian body
        const content = wrapper.appendChild(document.createElement('div'));
        content.setAttribute('class','accordian-content')
        content.textContent = this.hasAttribute('content') ?  this.getAttribute('content') : '';

        const styleCss = document.createElement("link");
        styleCss.setAttribute("rel", "stylesheet");
        styleCss.setAttribute("href", "styles.css");
        const resetCss = document.createElement('link');
        resetCss.setAttribute('rel', 'stylesheet');
        resetCss.setAttribute('href', 'reset.css')
        shadow.appendChild(resetCss);
        shadow.appendChild(styleCss);
        shadow.appendChild(wrapper);    }
}

customElements.define('custom-accordian', Accordian)