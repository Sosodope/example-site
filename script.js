var button = document.querySelector("button");
var h3 = document.querySelector("h3");
var fox = document.querySelector("body");

button.addEventListener("click", function(){
  h3.textContent = "There've been stranger things";
});
button.addEventListener("click", function(){
  fox.style.background = "url('https://images.unsplash.com/photo-1470093851219-69951fcbb533?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')";
  fox.style.backgroundPosition = "center";
  fox.style.backgroundSize = "cover";
  button.textContent = "See";
});
