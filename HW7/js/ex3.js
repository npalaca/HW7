const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countryInput = document.querySelector('#country');
const suggestions = document.querySelector('#suggestions');

// function to generate the suggestion list
const generateSuggestions = input => {
  const matchingCountries = countryList.filter(country => {
    return country.toLowerCase().startsWith(input.toLowerCase());
  });

  // remove any existing suggestions
  suggestions.innerHTML = '';

  // create a list item for each matching country
  matchingCountries.forEach(country => {
    const listItem = document.createElement('div');
    listItem.classList.add('suggestion');
    listItem.textContent = country;
    suggestions.appendChild(listItem);

    // add an event listener to replace the input value when clicked
    listItem.addEventListener('click', () => {
      countryInput.value = country;
      suggestions.innerHTML = '';
    });
  });
}

// event listener to generate suggestions when the input value changes
countryInput.addEventListener('input', () => {
  const inputValue = countryInput.value;
  if (inputValue.startsWith('A') || inputValue.startsWith('a')) {
    generateSuggestions(inputValue);
  } else {
    suggestions.innerHTML = '';
  }
});