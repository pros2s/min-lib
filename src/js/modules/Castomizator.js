export default class Castomizator {
  constructor() {
    this.btnBlock = document.createElement('div');
    this.colorPeacker = document.createElement('input');
  }

  render() {
    const scaleInputSm = document.createElement('input'),
          scaleInputMe = document.createElement('input'),
          panel = document.createElement('div');

    panel.classList.add('panel');
    panel.append(this.btnBlock, this.colorPeacker);

    scaleInputSm.classList.add('scale_btn');
    scaleInputMe.classList.add('scale_btn');
    this.btnBlock.classList.add('scale');

    scaleInputSm.setAttribute('type', 'button');
    scaleInputMe.setAttribute('type', 'button');
    scaleInputSm.setAttribute('value', '1x');
    scaleInputMe.setAttribute('value', '1.5x');

    this.btnBlock.append(scaleInputSm, scaleInputMe);

    document.querySelector('body').append(panel);
  }
}
