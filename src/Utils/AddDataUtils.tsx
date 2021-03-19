interface Data {
  id: number;
}

export const addMoreData = (oldData: [], newData: [], page: number) => {
  if (page === 1) {
    return newData;
  }

  // newData &&
  //   newData.forEach(item => {
  //     if (oldData.indexOf(item) === -1) {
  //       oldData.push(item);
  //     }
  //   });
  let result: any[] = [];
  if (newData && oldData) {
    oldData.forEach(
      (item: Data) =>
        (result = oldData.concat(
          newData.filter((newItem: Data) => item.id !== newItem.id)
        ))
    );
  }

  return result;
};
