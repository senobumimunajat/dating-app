import client from "../api/client";

export const authRegister = async (user) => {
  const { data } = await client.post("/member/registration", user);
  return data;
};

export const userActivation = async (id) => {
  const { data } = await client.get(`/member/activation?id=${id}`);
  return data;
};

export const authLogin = async (user) => {
  const { data } = await client.post("/auth", user);
  return data;
};

export const setUserToLocalStorage = (user) => {
  const currentUser = getUserFromLocalStorage();

  if (currentUser === null) {
    localStorage.setItem("user", JSON.stringify({ memberId: user }));
  }
};

export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user === null) return null;
  return user;
};

export const updateProfile = async (user) => {
  const { data } = await client.put("/member/profile", user);
  return data;
};

export const uploadAvatar = async (memberId, image) => {
  const form = new FormData();
  form.append("profile", image);

  const { data } = await client.post(`/member/profile?id=${memberId}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const getInterestData = async () => {
  const { data } = await client.get("/interest");
  return data;
};
