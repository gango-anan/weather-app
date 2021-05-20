const utilitiesModule = (() => {
   const getAndRenderCurrentDate = (dateContainer) => {
    const now_date = new Date();
    dateContainer.innerText = `${now_date.toLocaleTimeString()} , ${now_date.toDateString()}`
  };

  return { getAndRenderCurrentDate }
})();


export { utilitiesModule as default };