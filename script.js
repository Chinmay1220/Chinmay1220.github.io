const filterButtons = document.querySelectorAll("[data-filter]");
const contributionCards = document.querySelectorAll("[data-status]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    contributionCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.status === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
