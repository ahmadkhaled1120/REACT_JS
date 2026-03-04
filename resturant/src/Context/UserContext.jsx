import{UseState,createContext,UseEffect, use} from "react";

export const UserContext = createContext();
//login,register,logout
export const UserProvider = ({ children }) => {
  const [user, setUser] = UseState(null);
//قبلregisterبدي اتاكد ادا في ايميل من قبل

//get current user from local storage when the app loads
useEffect(() => {
    const storedUser = localStorage.getItem("currentUsers");    
if(storedUser){
    setUser(JSON.parse(storedUser));
}
},[]); 

  const register = (userData) => {
    const{name,email,password ,role="user"}=userData;
  
//validation
if(!name || !email || !password){
  toast.error("All fields are required");
  return;  
}
if(password.length<8){
    toast.error("Password must be at least 8 characters long");
    return;
}

const users = JSON.parse(localStorage.getItem("users")) || [];//get all users{{user1},{user2},{newUser}}

const existingUser = users.find((user) => user.email === email);
if(existingUser){
    toast.error("Email already exists,please login");
    return;
}
//create new user
const newUser = {id:Date.now(), name,email,password,role};

//add user to users and save  user to local storage
//users.push(newUser); copy brtter than push because push mutate the original array copy creates new user
const updatedUsers = [...users, newUser];
localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("currentUsers", JSON.stringify(newUser));

toast.success("Registration successful, please login"); 
return true;

};


const login = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existUser = users.find(
    (user) => user.email === email && user.password === password,
  );
  if (!existUser) {
    toast.error("Invalid email or password");
    return;
  }
  localStorage.setItem("currentUsers", JSON.stringify(existUser));
  toast.success("Login successfllu");
  return;
};
 



  return (<UserContext.Provider value={{ 
    
    register,
    login,
    user
 }}> 
  
    {children} 
    
    </UserContext.Provider>
  );
};