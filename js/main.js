import { getPictures } from './data';
import { renderThumbmails } from './thumbnail.js';
import { initPictureListeners } from './big-picture.js';
import { initPictureFormListener } from './picture-form.js';

const pictures = getPictures();
renderThumbmails(pictures);

initPictureListeners(pictures);

initPictureFormListener();
