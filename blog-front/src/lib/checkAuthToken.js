import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";
//newToken is the response
const decodeToken = success => {
  const { token } = success.data;
  localStorage.setItem("jwtToken", token);
  const decoded = jwt_decode(token);
  setAuthToken(token);
  return decoded;
};

// since the token is SET now go GET that shit from storage. Dont forget to handle it on your routes.

export default decodeToken;
