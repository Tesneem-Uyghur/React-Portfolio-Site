// Save JWT response from backend
export const authenticate = (jwt, cb) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
  }
  cb();
};

// Get the logged-in user (or false)
export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;

  const stored = localStorage.getItem("jwt");
  return stored ? JSON.parse(stored) : false;
};

// Remove JWT on logout
export const clearJWT = (cb) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
  cb();
};
