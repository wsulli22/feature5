import Parse from "parse";

//PARSE CODE BELOW ADDED
const APP_ID = process.env.REACT_APP_BACK4APP_APP_ID;
const JS_KEY = process.env.REACT_APP_BACK4APP_JS_KEY;
const SERVER_URL = process.env.REACT_APP_BACK4APP_URL;
Parse.initialize(APP_ID, JS_KEY);
Parse.serverURL = SERVER_URL;

export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);

  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

//FUNCTION ADDED:
export const loginUser = (email, password) => {
  return Parse.User.logIn(email, password)
    .then((user) => user)
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

//FUNCTION ADDED:
export const logoutUser = () => {
  return Parse.User.logOut().catch((error) => {
    alert(`Error: ${error.message}`);
  });
};

//FUNCTION ADDED:
export const isAuthenticated = () => {
  return Boolean(Parse.User.current());
};
