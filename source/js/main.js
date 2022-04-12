const cards = document.querySelectorAll(".card");

const newCards = [...cards].filter(function(card) {
  return !card.classList.contains("card--disabled");
});

cards.forEach(function(card) {
  if (card.classList.contains("card--disabled")) {
    if (card === cards[0]) {
      card.nextElementSibling.textContent = "Печалька, с фуа-гра закончился.";
    } else if (card === cards[1]) {
      card.nextElementSibling.textContent = "Печалька, с рыбой закончился.";
    } else if (card === cards[2]) {
      card.nextElementSibling.textContent = "Печалька, с курой закончился.";
    }
  }
});

const elements = document.querySelectorAll(".choices__text");

newCards.forEach(function(card) {
  card.addEventListener("click", function(e) {
    if (!card.classList.contains("card--selected")) {
      card.classList.add("card--selected");
      if (card === newCards[0]) {
        card.nextElementSibling.textContent = "Печень утки разварная с артишоками.";
      } else if (card === newCards[1]) {
        card.nextElementSibling.textContent = "Головы щучьи с чесноком да свежайшая сёмгушка.";
      } else if (card === newCards[2]) {
        card.nextElementSibling.textContent = "Филе из цыплят с трюфелями в бульоне.";
      }
    } else {
      card.classList.remove("card--selected");
      card.nextElementSibling.innerHTML = "Чего сидишь? Порадуй котэ, <span class='choices__text-span'>купи.</span";
    }
  });

  card.addEventListener("mouseleave", function() {
    if (card.classList.contains("card--selected")) {
      card.classList.add("card--selected-hover");
      card.firstChild.textContent = "Котэ не одобряет?";
      card.firstChild.classList.add("card__title--selected-hover");
    }
  });

  card.addEventListener("mouseenter", function() {
    if (card.classList.contains("card--selected")) {
      card.classList.remove("card--selected-hover");
      card.firstChild.textContent = "Сказочное заморское яство";
      card.firstChild.classList.remove("card__title--selected-hover");
    }
  });
});

elements.forEach(function(item) {
  item.addEventListener("click", function(e) {
    if(e.target.classList.contains("choices__text-span")) {
      const card = item.previousElementSibling;
      if (!card.classList.contains("card--selected")) {
        card.classList.add("card--selected");
        if (card === newCards[0]) {
          card.nextElementSibling.textContent = "Печень утки разварная с артишоками.";
        } else if (card === newCards[1]) {
          card.nextElementSibling.textContent = "Головы щучьи с чесноком да свежайшая сёмгушка.";
        } else if (card === newCards[2]) {
          card.nextElementSibling.textContent = "Филе из цыплят с трюфелями в бульоне.";
        }
      }
    }
  });
});
