export default class Castomizator {
  constructor() {
    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.clear = document.createElement('div');
    this.scale = localStorage.getItem('scale') || 1;

    this.btnBlock.addEventListener('click', (e) => this.onScaleChange(e));
  }


  onScaleChange(e) {
    const body = document.querySelector('body');
    if (e) this.scale = +e.target.value.replace(/x/g, '');

    const recursy = (element) => {
      element.childNodes.forEach(node => {

        if (node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, '').length > 0) {
          if (!node.parentNode.getAttribute('data-fz')) {
            let value = window.getComputedStyle(node.parentNode).fontSize;
            node.parentNode.setAttribute('data-fz', +value.replace(/\D/g, ''));
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
          } else {
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
          }

        } else {
          recursy(node);
        }
      });
    };

    recursy(body);
    localStorage.setItem('scale', this.scale);
  }


  render() {
    this.onScaleChange();

    const scaleInputSm = document.createElement('input'),
          scaleInputMe = document.createElement('input'),
          panel = document.createElement('div');

    panel.classList.add('panel');
    panel.append(this.btnBlock, this.colorPeacker);
    this.clear.innerHTML = '&times';
    this.clear.classList.add('clear');

    scaleInputSm.classList.add('scale_btn');
    scaleInputMe.classList.add('scale_btn');
    this.btnBlock.classList.add('scale');
    this.colorPicker.classList.add('color');

    scaleInputSm.setAttribute('type', 'button');
    scaleInputMe.setAttribute('type', 'button');
    scaleInputSm.setAttribute('value', '1x');
    scaleInputMe.setAttribute('value', '1.5x');
    this.colorPicker.setAttribute('type', 'color');
    this.colorPicker.setAttribute('value', '#ffffff');

    this.btnBlock.append(scaleInputSm, scaleInputMe);

    document.querySelector('body').append(panel);
  }
}
