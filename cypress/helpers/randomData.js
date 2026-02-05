/**
 * This method create new user and password then return its data
 * 
 * */
export function generateRandomUser() {
    const letters  = "abcdefghijklmnopqrstuvwxyz"
    let nameRandom = ""
    let passwordRandom = ""
    for (let i = 0; i < 6; i++) {
      nameRandom += letters.charAt(Math.floor(Math.random() * letters.length));
      passwordRandom += letters.charAt(Math.floor(Math.random() * letters.length));
    }
  return {
    username: `user_${nameRandom}`,
    password: `pass_${passwordRandom}`
  };
}
