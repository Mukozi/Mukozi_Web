/**
 * This contains all the Javascript logic for the project
 */
"use strict";

console.log("Welcome to Mukozi, the web version");
console.log(location.href);

const firebaseConfig = {
  apiKey: "AIzaSyALIQGnWPyYu1WU-nDdSK6EiI1kXGlQaBw",
  authDomain: "mukozi.firebaseapp.com",
  databaseURL: "https://mukozi.firebaseio.com",
  projectId: "mukozi",
  storageBucket: "mukozi.appspot.com",
  messagingSenderId: "142287779452",
  appId: "1:142287779452:web:7cde234252e0c56814fbf9",
  measurementId: "G-R993QD537Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 * Sign in function
 */
let signin = () => {
  console.log("Sign in clicked");
};

/**
 * Sign up function
 */
let signup = () => {
  console.log("Sign up clicked");
};

/**
 * Reset in function
 */
let reset = () => {
  console.log("Reset clicked");
};

//Bind all functions that are to be called
$("#signin").bind("click", signin);
