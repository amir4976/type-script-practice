let user: { id: number; age: number } = {
  id: 10,
  age: 22,
};

console.log(user.id);

const nameses: (number | string)[][] = [["amir", "ali", 10]];
console.log(nameses);

// set parameter for function
function isLogin(username: string, password: string | number) {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

console.log(isLogin("admin", "admin"));



// set parameter for function
function isLogin(username: string, password: string | number): boolean {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

console.log(isLogin("admin", "admin"));
