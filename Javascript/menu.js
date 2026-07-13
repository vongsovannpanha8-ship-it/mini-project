// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// document.documentElement.classList.toggle(
//   "dark",
//   localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
// );
// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";
// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";
// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
// // handle click to light and dark
// function handleClick (){
//     const togglle = document.documentElement.classList.toggle("dark");
//     togglle.theme.localStorage("dark" ? "light" : "dark");
// }

"use strict";

// 1. Run on page load: Wait for the HTML elements to exist, then check localStorage
document.addEventListener("DOMContentLoaded", () => {
  // Determine if dark mode should be active
  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const darkAndLight = document.getElementById("darkAndLight");

  // Apply the correct theme and update the button text immediately on refresh
  if (isDark) {
    document.documentElement.classList.add("dark");
    if (darkAndLight) darkAndLight.textContent = "Light Mode";
  } else {
    document.documentElement.classList.remove("dark");
    if (darkAndLight) darkAndLight.textContent = "Dark Mode";
  }
});

// 2. Handle the button click to toggle themes cleanly
function handleClick() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";

  const darkAndLight = document.getElementById("darkAndLight");
  if (darkAndLight) {
    darkAndLight.textContent = isDark ? "Light Mode" : "Dark Mode";
  }
}