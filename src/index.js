import utilitiesModule from './utilities'

const dateContainer = document.querySelector('.current-date');
const utilityKey = utilitiesModule.utilityKey().apiKey;

utilitiesModule.getAndRenderCurrentDate(dateContainer);


