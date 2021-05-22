const utilitiesModule = (() => {
  const utilityKey = () => {
    const apiKeyValue = 'af42f1d1d1cde88bd430cbdaf2d5e6cd';

    return { apiKey: apiKeyValue };
  };

  return { utilityKey };
})();

export { utilitiesModule as default };