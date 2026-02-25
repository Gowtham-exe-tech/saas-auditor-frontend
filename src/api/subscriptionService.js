import api from "./axiosConfig";

export const getSubscriptions = () => {
  return api.get("/subscriptions");
};

export const addSubscription = (data) => {
  return api.post("/subscriptions", data);
};

export const deleteSubscription = (id) => {
  return api.delete(`/subscriptions/${id}`);
};

export const getTotalExpense = () => {
  return api.get("/subscriptions/total");
};