//const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


  
const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()


// trigger function on new user creation.
// when a new user is created this fucntion is triggered. When triggered a defualt 
// data object is pushed to the roles collection, this object contains the user's role status
exports.AddUserRole = functions.auth.user().onCreate(async (authUser) => {
    if (authUser.email == "admin@gmail.com") {
            console.log("HI");
            try {
                await admin.auth().setCustomUserClaims(authUser.uid, {admin: true})
            } catch (error) {
                console.log(error)
            }
    }else{
        console.log("Not Admin");
          try {
            await admin.auth().setCustomUserClaims(authUser.uid, {admin: false})
        } catch (error) {
            console.log(error)
        }
    }
    
});