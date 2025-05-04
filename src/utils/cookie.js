// const setCookie = (userVal) => {
//   const stringVal =
//     typeof userVal === "object" ? JSON.stringify(userVal) : userVal;
//   document.cookie = `user=${encodeURIComponent(stringVal)}; expires = ${
//     Date.now() + 30 * 24 * 3600 * 1000
//   }; path=/`;
// };

// const getCookie = () => {
//   // const cookies = document.cookie.split(";").reduce((acc, cookie) => {
//   //   const [key, val] = cookie.split("=");
//   //   acc[key] = encodeURIComponent(val);
//   //   return acc;
//   // }, {}); tanda {} adalah startValue/initialValue
//   const cookies = document.cookie.split(";")[3].split;
//   try {
//     return JSON.parse(cookies.user);
//   } catch (error) {
//     return "Error URIdecode " + error;
//   }
// };

// export { setCookie, getCookie };
