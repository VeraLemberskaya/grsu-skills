import jwt_decode from "jwt-decode";

export const getUserInfo = (token) => {
  try {
    const decoded_token = jwt_decode(token);
    return decoded_token;
  } catch {
    return null;
  }
};
