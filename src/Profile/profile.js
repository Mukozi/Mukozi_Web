/**
 * This is the script to add the headers and footers to the profile pages
 */

console.log("Loading the Profile Headers and footer");

$(function() {
  $(".thefooter").load("./../Components/Footer.html");
  $(".theheader").load("./../Components/Header.html");
});
