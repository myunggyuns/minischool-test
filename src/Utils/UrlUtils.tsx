export const convertQueryParams = (queryObj: { q: string; page: number }) => {
  const queryString = `q=${queryObj.q}&page=${queryObj.page}`;

  return queryString;
};
