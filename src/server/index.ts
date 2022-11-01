import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:4523/m1/1848244-0-default",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
