const backend = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

export const request = (
  route,
  method,
  omitContentType = false,
  userId = null,
  data = null,
  headers = {},
  queryParams = null
) => {
  let queryString = "";
  if (queryParams) {
    let entries = queryParams.entries();
    queryString = entries
      .map((entry) => {
        return `?${entry[0]}=${entry[1]}`;
      })
      .reduce((prev, current, indx, arr) => {
        return prev + "&" + current;
      });
  }
  const queryUrl = backend + route + queryString;
  const options = {};

  options.method = method;
  options.headers = headers;
  if (!omitContentType) options.headers["Content-Type"] = "application/json";
  options.headers["Accept"] = "application/json";
  options.headers["Access-Control-Allow-Origin"] = "*";
  if (method !== "GET") options.body = JSON.stringify(data);
  if (method === "PATCH" && route === `/users/${userId}`) options.body = data;
  options.credentials = "include";

  return fetch(queryUrl, options)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return null;
    });
};
