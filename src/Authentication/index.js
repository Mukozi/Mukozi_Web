/**
 * This is the script to add the headers and footers to the authentication pages
 */

console.log("Loading the Profile Headers and footer");

$(function() {
  $(".sidebar").load("./../Components/AuthSidebar.html");
  $(".authfooter").load("./../Components/AuthFooter.html");
});
