export function addMoreData(oldData: [], newData: [], page: number) {
  if (page === 1) {
    return newData;
  }

  newData &&
    newData.forEach(item => {
      if (oldData && oldData.indexOf(item) === -1) {
        oldData.push(item);
      }
    });

  return oldData;
}
