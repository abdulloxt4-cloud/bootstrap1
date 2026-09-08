// Kod sahifa to'liq yuklangandan so'ng ishga tushadi
document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js to'liq ishga tushdi!");

  // 1. Yulduzchalar (Star) bosilganda saralash/tanlash mantiqi
  const stars = document.querySelectorAll(".bi-star, .bi-star-fill");
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      if (star.classList.contains("bi-star-fill")) {
        star.classList.remove("bi-star-fill", "text-warning");
        star.classList.add("bi-star", "text-muted");
      } else {
        star.classList.remove("bi-star", "text-muted");
        star.classList.add("bi-star-fill", "text-warning");
      }
    });
  });

  // 2. Qidiruv tugmasi va Input funksiyasi
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const cards = document.querySelectorAll(".card");

  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach((card) => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const desc = card.querySelector(".card-text").textContent.toLowerCase();
      
      // Agar qidirilayotgan so'z sarlavha yoki matnda bo'lsa ko'rsatiladi, aks holda yashiriladi
      if (title.includes(query) || desc.includes(query)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  }

  // Qidiruv tugmasi bosilganda
  if (searchBtn) {
    searchBtn.addEventListener("click", performSearch);
  }

  // Inputga yozib Enter tugmasi bosilganda
  if (searchInput) {
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  }

  // 3. Filtr taglaridagi "X" tugmasi bosilganda o'chirish
  const filterBadges = document.querySelectorAll(".badge .bi-x");
  filterBadges.forEach((badgeIcon) => {
    badgeIcon.addEventListener("click", (e) => {
      const badgeContainer = e.target.closest(".badge");
      if (badgeContainer) {
        badgeContainer.remove();
      }
    });
  });
});