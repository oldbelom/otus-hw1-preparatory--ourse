export default function addListeners() {
  const $wrap = document.querySelector(".wrap");
  const $input = document.querySelector(".input");
  const $btn = document.querySelector(".btn");

  $input.addEventListener("input", () => {
    if ($input.value === "") {
      $btn.setAttribute("hidden", true);
    } else {
      $btn.removeAttribute("hidden");
    }
  });

  $btn.addEventListener("click", (e) => {
    const $p = document.createElement("p");
    $p.innerText = $input.value;
    $wrap.append($p);

    $input.value = "";
    e.target.setAttribute("hidden", true);

    if ($wrap.childElementCount > 5) {
      $wrap.removeChild($wrap.firstElementChild);
    }
  });
}
