// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { post } = require("../routes/route");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};
/*-----------------------------------------------------------------------*/
// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

//   // Once the login is successful, create the jwt token with sign function
//   // Sign function has 2 inputs:
//   // Input 1 is the payload or the object containing data to be set in token
//   // The decision about what data to put in token depends on the business requirement
//   // Input 2 is the secret
//   // The same secret will be used to decode tokens
//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "thorium",
//       organisation: "FunctionUp",
//     },
//     "functionup-radon"
//   );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, token: token });
// };
// /*-------------------------------------------------------------------*/

// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself
//   let decodedToken = jwt.verify(token, "functionup-radon");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
// };

// const updateUser = async function (req, res) {
//   // Do the same steps here:
//   // Check if the token is present
//   // Check if the token present is a valid token
//   // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };

const loginUser1 = async function (req, res) {
  let userName = req.body.emailId
  let userPassword = req.body.password
  let findUserData = await userModel.findOne({ emailId: userName, password: userPassword })
  if (!findUserData) {
    res.send({ status: false, msg: "userName or password is not correct" })
  }
  // create the jwt and send it in response
  // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  //here userId:user._id.toString() is pay load and "functionUpRadon" is secreate key
  // let token = jwt.sign({ userId: findUserData._id.toString() }, "functionUpRadon")
  //res.send({ status: true, Data: token })
  let token = jwt.sign(
    {
      userId: findUserData._id.toString(),
      batch: "Radon",
      organization: "functionUp"
    },
    "functionUpRadon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, Data: token })
};
/*---------------------------practice code------------------------------*/
const userDetail = async function (req, res) {
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ status: false, msg: "token must be provided" })
  console.log(token)

  // var decoded = jwt.verify(token, 'shhhhh');
  // console.log(decoded.foo)
  let decoded = jwt.verify(token, "functionUpRadon")
  if (!decoded) return res.send({ status: false, msg: "Token is incorrect......" })
  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if (!userDetails) return res.send({ status: false, msg: "No such user axist's" })
  else {
    res.send({ status: true, UserData: userDetails })
  }
}
/*----------------------end practice---------------------------------*/

/*-----------------------practice start---------------------------*/
const postMessage = async function (req, res) {
  let message = req.body.message
  //check if the token is present
  // check if the token is valid
  let token = req.headers["x-auth-token"]
  if (!token) return res.send({ msg: "token must be present dear........." })
  console.log(token)
  let decoded = jwt.verify(token, "functionUpRadon")
  let userId = req.params.userId
  let decodedUserId = decoded.userId
  if (decodedUserId != userId) return res.send({ status: false, msg: "userId not matched" })
  if (!decoded) return res.send({ status: false, msg: "token is incorrect.........!" })
  let userDetail = await userModel.findById(userId)
  if (!userDetail) return res.send("No such user axist's.....!")
  let updatePostMessage = userDetail.post
      updatePostMessage.push(message)
  let updateUser = await userModel.findByIdAndUpdate({ _id: userDetail._id }, { post: updatePostMessage }, { new: true })
  res.send({ msg: "post is posted", status: true, Data: updateUser })
}
/*------------------------end practice----------------------------*/
module.exports.createUser = createUser;
// module.exports.getUserData = getUserData;
// module.exports.updateUser = updateUser;
// module.exports.loginUser = loginUser;
module.exports.loginUser1 = loginUser1
module.exports.userDetail = userDetail
module.exports.postMessage = postMessage
