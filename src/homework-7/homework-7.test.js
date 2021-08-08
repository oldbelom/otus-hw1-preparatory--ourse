import addListeners from "./homework-7";

describe("homework-7", () => {
  document.body.innerHTML = `<div class="wrap">
            <p>123</p>
            <p>456</p>
            <p>789</p>
        </div>
        <input class="input" type="text">
        <button class="btn" hidden>push me</button>`;

  addListeners();

  const $wrap = document.querySelector(".wrap");
  const $input = document.querySelector(".input");
  const $btn = document.querySelector(".btn");

  it("btn is hidden if input is empty", () => {
    $input.value = "";
    expect($btn.hasAttribute("hidden")).toBe(true);
  });

  it("btn is shown if text entered in input", () => {
    $input.value = "show me button";
    $input.dispatchEvent(new Event("input"));
    expect($btn.hasAttribute("hidden")).toBe(false);
  });

  it("adds paragraph on click", () => {
    $input.value = "123";
    $btn.click();
    expect($wrap.childElementCount).toBe(4);
  });

  it("paragraph contains the correct text", () => {
    $input.value = "correct text";
    $btn.click();
    expect($wrap.lastElementChild.innerText).toBe("correct text");
  });

  it("show no more than 5 paragraphs", () => {
    $input.value = "text";
    $btn.click();
    $btn.click();
    $btn.click();
    $btn.click();
    expect($wrap.childElementCount).toBe(5);
  });

  it("delete 1st paragraphs if there are more than 5 of them", () => {
    const firstPharagraphText = $wrap.firstElementChild.innerText;
    $input.value = "test";
    $btn.click();
    expect($wrap.firstElementChild.innerText).not.toBe(firstPharagraphText);
  });
});
