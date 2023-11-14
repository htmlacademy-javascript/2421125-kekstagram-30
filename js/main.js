import { getPictures } from './data';
import { renderThumbmails } from './thumbnail.js';
import { initPictureListeners } from './big-picture.js';

const pictures = getPictures();
renderThumbmails(pictures);

initPictureListeners(pictures);
