import './util';
import { getPictures } from './data';
import { renderThumbmails } from './thumbnail.js';

const pictures = getPictures();
renderThumbmails(pictures);
