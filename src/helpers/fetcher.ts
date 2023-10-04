//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
