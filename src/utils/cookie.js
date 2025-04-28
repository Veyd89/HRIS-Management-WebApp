const setCookie = (cookieName, cookieValue, days) => {
  const strVal =
    cookieValue === "object" ? JSON.stringify(cookieValue) : cookieValue;
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${cookieName}=${encodeURIComponent(
    strVal
  )}; expires=${expires}; path=/; Secure; HttpOnly; SameSite=Strict`;
  // expires adalah tanggal kadaluarsa cookie (setelah 30 hari).
  // path=/ artinya cookie berlaku di seluruh aplikasi.
  // Secure memastikan cookie hanya dikirimkan melalui HTTPS.
  // HttpOnly tidak perlu digunakan jika cookie hanya diakses di frontend.
  // SameSite=Strict membatasi pengiriman cookie hanya pada situs yang sama.
};
const getCookie = (name) => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
  try {
    return JSON.parse(cookies[name]);
  } catch (error) {
    console.log("error cookie", error);
  }
};

export { setCookie, getCookie };
