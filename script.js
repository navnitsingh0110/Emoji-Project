const emojiPalette = document.querySelector(".emojis");
const searchTag = document.querySelector("#search");
const optionElement = document.querySelectorAll(".option");

const categoryMap = {
  all: "all",
  face: "face",
  heart: "heart",
  book: "book",
  hand: "hand",
  sports: "sport",
  flag: "flag",
};

function displayEmojis(emojis) {
  emojiPalette.innerHTML = "";

  if (emojis.length === 0) {
    emojiPalette.innerHTML = `<div class="no-emoji">No Emoji Found</div>`;
    return;
  }

  emojis.forEach((emojiData) => {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji-item");
    emojiDiv.textContent = emojiData.emoji;
    emojiPalette.appendChild(emojiDiv);
  });
}

displayEmojis(emojiList);

searchTag.addEventListener("input", () => {
  const searchText = searchTag.value.toLowerCase();
  const filteredEmojis = emojiList.filter((emojiData) => {
    return (
      emojiData.description.toLowerCase().includes(searchText) ||
      emojiData.aliases.some((alias) =>
        alias.toLowerCase().includes(searchText)
      ) ||
      emojiData.tags.some((tag) => tag.toLowerCase().includes(searchText))
    );
  });
  displayEmojis(filteredEmojis);
});

optionElement.forEach((button) => {
  button.addEventListener("click", () => {
    const categoryKey = button.textContent.trim().toLowerCase();
    const keyword = categoryMap[categoryKey];

    if (keyword === "all") {
      displayEmojis(emojiList);
    } else if (keyword) {
      const filteredEmojis = emojiList.filter((emojiData) => {
        return (
          emojiData.description.toLowerCase().includes(keyword) ||
          emojiData.aliases.some((alias) =>
            alias.toLowerCase().includes(keyword)
          ) ||
          emojiData.tags.some((tag) => tag.toLowerCase().includes(keyword))
        );
      });

      displayEmojis(filteredEmojis);
    }
  });
});
