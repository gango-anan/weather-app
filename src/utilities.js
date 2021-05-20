const utilitiesModule = (() => {
  const utilityKey = () => {
    const apiKeyValue = 'af42f1d1d1cde88bd430cbdaf2d5e6cd';
  
    return { apiKey: apiKeyValue };
  };
  
  const getAndRenderCurrentDate = (dateContainer) => {
    const now_date = new Date();
    dateContainer.innerText = `${now_date.toLocaleTimeString()} , ${now_date.toDateString()}`
  };

  return { utilityKey, getAndRenderCurrentDate }
})();


export { utilitiesModule as default };