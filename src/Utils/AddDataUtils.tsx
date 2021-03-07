export function addMoreData(oldData: [], newData: [], page: number) {
  if (page === 1) {
    return newData;
  }

  let results: [] = oldData ? oldData : [];

  newData &&
    newData.forEach(item => {
      if (oldData && results.indexOf(item) === -1) {
        results.push(item);
      }
    });

  return results;
}
