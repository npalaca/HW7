// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// Get the <select> element for the house dropdown list
const houseSelect = document.getElementById("house");

// Fill the house dropdown list with options
houses.forEach(house => {
  const option = document.createElement("option");
  option.value = house.code;
  option.textContent = house.name;
  houseSelect.appendChild(option);
});

// Get the <ul> element to display the list of characters
const characterList = document.getElementById("characters");

// Add an event listener to the house dropdown list to show the list of characters
houseSelect.addEventListener("change", () => {
  // Remove any existing characters from the list
  characterList.innerHTML = "";

  // Get the selected house code
  const selectedHouseCode = houseSelect.value;

  // Get the list of characters belonging to the selected house
  const selectedCharacters = getCharacters(selectedHouseCode);

  // Add each character to the list
  selectedCharacters.forEach(character => {
    const li = document.createElement("li");
    li.textContent = character;
    characterList.appendChild(li);
  });
});
