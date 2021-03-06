export const convertQueryParams = (queryObj: { q: string }) => {
  const queryString = `q=${queryObj.q}`;

  return queryString;
};
