export default class Castomizator {
  constructor() {
    this.btnBlock = document.createElement('div');
    this.colorPeacker = document.createElement('input');
    this.clear = document.createElement('div');
  }

  render() {
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
