requestIdleCallback(start);

const toggleButton = document.getElementsByClassName("toggle-button")[0];

const navBar = document.getElementsByClassName("");

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

async function start() {
  // const resp = await fetch("./assets/perfumej.json");
  // const perfumes = await resp.json();
  // for (let d of perfumes["services"]) {
  //   let div = document.createElement("div");
  //   let p = document.createElement("p");
  //   p.textContent = d.description;
  //   div.className = "card";
  //   div.appendChild(a);
  //   div.appendChild(p);
  //   $services.appendChild(div);
  // }
}
