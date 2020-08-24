// select elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tabButton');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
console.log(tabs, tabButtons, tabPanels);

function handleTabButtonClick(event) {
  console.log(event.target);
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabButtonClick)
);
