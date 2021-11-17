import axios from "axios";

export const getBakeryProducts = async () => {
  const { data } = await axios.get("/api/storage");
  return data;
};

export const postBakeryCart = async (cart) => {
  const { data } = await axios.post("/api/storage", { cart });
  return data;
};

export const postBakeryOrder = async (items) => {
  const { data } = await axios.post("/api/order", { items });
  return data;
};

export const login = (data) => {
  return axios
    .post(`/api/auth`, { name: data.name, password: data.password })
    .then((response) => {
      localStorage.setItem("x-access-token", response.data.token);
      localStorage.setItem(
        "x-access-token-expiration",
        Date.now() + 2 * 60 * 60 * 1000
      );
      return response.data;
    })
    .catch((err) => Promise.reject("Authentication Failed!"));
};

export const isAuthenticated = () => {
  return (
    localStorage.getItem("x-access-token") &&
    localStorage.getItem("x-access-token-expiration") > Date.now()
  );
};
