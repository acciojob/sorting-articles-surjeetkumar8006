const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to strip leading articles for sorting
function stripArticle(band) {
  return band.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring leading articles
const sortedBands = bands.sort((a, b) => {
  const aStripped = stripArticle(a).toLowerCase();
  const bStripped = stripArticle(b).toLowerCase();
  return aStripped.localeCompare(bStripped);
});

// Insert into the DOM
const ul = document.getElementById("band");
sortedBands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});
