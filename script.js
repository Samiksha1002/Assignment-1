function sayHello() {
  let name = prompt("This is my First Assignment . Please enter your name:");
  let message = "Hello , " + name + "! 👋";
  document.getElementById("greeting").innerText = message;
}