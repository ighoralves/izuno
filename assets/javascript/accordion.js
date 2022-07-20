const cards = document.querySelectorAll("Career-cards");

cards.forEach((item) => {
  const card = item.querySelector(".Career-card");

    card.addEventListener("click", () => {
      const card = item.querySelector(".Career-content");

      const content_active = document.querySelector(".active");

      VerifyActive(item, card, content_active);
    });
})

function VerifyActive(item, content, content_active) {
  const icon_itens = item.querySelector(".fa-solid");

  const icons = document.querySelectorAll("fa-solid");

  icons.forEach((item) => (item.innerHTML = "+"));

  if(content_active) {
    content_active.style.height = 0;
    content_active.classList.remove("active");
  }

  if(content !== content_active) {
    icon_itens.innerHTML ="-";
    content.classListL.add("active");
    content.style.hright = content.scrollHeight + 10 + "px";
  }
}