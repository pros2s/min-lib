import 'focus-visible';
import lazyImages from './lazyImages';
import documentReady from '../helpers/documentReady';
import Castomizator from './Castomizator';

documentReady(() => {
  lazyImages();

  const panel = new Castomizator;
  panel.render();
});
