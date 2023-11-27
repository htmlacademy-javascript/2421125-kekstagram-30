import { loadPictures } from './api.js';
import { renderThumbmails } from './thumbnail.js';
import { initPictureListeners } from './big-picture.js';
import { initPictureFormListener } from './picture-form.js';
import { showLoadErrorMessage } from './messages.js';
import { initFilters } from './filters.js';

const bootstrap = async () => {
  try {
    initPictureFormListener();
    const pictures = await loadPictures();
    renderThumbmails(pictures);
    initPictureListeners(pictures);
    initFilters(pictures);
  } catch {
    showLoadErrorMessage();
  }
};

bootstrap();
