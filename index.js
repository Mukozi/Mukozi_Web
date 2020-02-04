"use strict";

console.log("Welcome to Mukozi, the web version");

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

let signin = () => {
  console.log("Sign clicked");
};

$("#signin").bind("click", signin);
