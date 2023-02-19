exports.onClientEntry = () => {
  document.querySelector("body").addEventListener("click", async (evt) => {
    const targetElement = evt.target;
    if (targetElement.className !== "codeblock-copy-button") {
      return;
    }

    const code = targetElement
      .closest(".codeblock-container")
      .querySelector("pre").innerText;

    await navigator.clipboard.writeText(code);
    alert("복사되었습니다");
  });
};
