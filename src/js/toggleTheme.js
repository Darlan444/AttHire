const theme = document.getElementById("checkbox-theme");
const body = document.querySelector("body");
const card = document.getElementById("card");

const toggleThemeMode = () => {
  body.classList.toggle("dark");
};

theme.onchange = toggleThemeMode;

