class SessionHelper {
  setToken(Token) {
    localStorage.setItem("Token", Token);
  }
  getToken() {
    return localStorage.getItem("Token");
  }
  setUserDetails(UserDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }
  setEmail(Email) {
    localStorage.setItem("Email", Email);
  }
  getEmail() {
    return localStorage.getItem("Email");
  }
  setOTP(OTP) {
    localStorage.setItem("OTP", OTP);
  }
  getOTP() {
    return localStorage.getItem("OTP");
  }
  removeSessions = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
}
export const {
  setEmail,
  getEmail,
  setOTP,
  getOTP,
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  removeSessions,
} = new SessionHelper();
