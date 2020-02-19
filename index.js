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

const districts = {
  Central: {
    Buikwe,
    Bukomansimbi,
    Butambala,
    Buvuma,
    Gomba,
    Kalangala,
    Kalungu,
    Kampala,
    Kassanda,
    Kayunga,
    Kiboga,
    Kyankwanzi,
    Kyotera,
    Luwero,
    Lwengo,
    Lyantonde,
    Masaka,
    Mityana,
    Mpigi,
    Mubende,
    Mukono,
    Nakaseke,
    Nakasongola,
    Rakai,
    Ssembabule,
    Wakiso
  },
  Eastern: {
    Amuria,
    Budaka,
    Bududa,
    Bugiri,
    Bugweri,
    Bukedea,
    Bukwo,
    Bulambuli,
    Busia,
    Butaleja,
    Butebo,
    Buyende,
    Iganga,
    Jinja,
    Kaberamaido,
    Kaliro,
    Kamuli,
    Kapchorwa,
    Kapelebyong,
    Katakwi,
    Kibuku,
    Kumi,
    Kween,
    Luuka,
    Manafwa,
    Mayuge,
    Mbale,
    Namayingo,
    Namisindwa,
    Namutumba,
    Ngora,
    Pallisa,
    Serere,
    Sironko,
    Soroti,
    Tororo
  },
  Northern: {
    Abim,
    Adjumani,
    Agago,
    Alebtong,
    Amolatar,
    Amudat,
    Amuru,
    Apac,
    Arua,
    Dokolo,
    Gulu,
    Kaabong,
    Kitgum,
    Koboko,
    Kole,
    Kotido,
    Kwania,
    Lamwo,
    Lira,
    Maracha,
    Moroto,
    Moyo,
    Nabilatuk,
    Nakapiripirit,
    Napak,
    Nebbi,
    Nwoya,
    Omoro,
    Otuke,
    Oyam,
    Pader,
    Pakwach,
    Yumbe,
    Zombo
  },
  Western: {
    Buhweju,
    Buliisa,
    Bundibugyo,
    Bunyangabu,
    Bushenyi,
    Hoima,
    Ibanda,
    Isingiro,
    Kabale,
    Kabarole,
    Kagadi,
    Kakumiro,
    Kamwenge,
    Kanungu,
    Kasese,
    Kibaale,
    Kikuube,
    Kiruhura,
    Kiryandongo,
    Kisoro,
    Kyegegwa,
    Kyenjojo,
    Masindi,
    Mbarara,
    Mitooma,
    Ntoroko,
    Ntungamo,
    Rubanda,
    Rubirizi,
    Rukiga,
    Rukungiri,
    Sheema
  }
};
