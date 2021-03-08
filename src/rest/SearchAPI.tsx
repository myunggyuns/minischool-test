import { convertQueryParams } from "../Utils/UrlUtils";

const BASEURL = "https://api.github.com/search";
const HEADERS = { Accept: "application/vnd.github.v3+json" };

export const searchRepo = async (entity: string, queryObj: any) => {
  const url: string = `${BASEURL}/${entity}?${convertQueryParams(queryObj)}`;

  try {
    const response = await fetch(url, { method: "GET", headers: HEADERS });
    const result = await response.json();
    if (result.message) {
      alert(`${result.message}  check serach text`);
    }
    return result;
  } catch (error) {
    alert("Server Error");
  }
};
