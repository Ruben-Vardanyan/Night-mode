function anim() {
  let x = document.documentElement.classList.toggle("dark-mode");
  let y = document.getElementById("aw");
  let z = document.getElementById("aa1");
  y.style.right = "3px";
  y.style.left = "auto";
  z.onclick = function() {myFunction()};
  z.style.border = "2px solid red";
  function myFunction() {
    y.style.left = "3px";
    y.style.right = "auto";
   x = document.documentElement.classList.toggle("dark-mode");
	   				z.onclick = function() {anim()};
            z.style.border = "2px solid #000";
	}
}
