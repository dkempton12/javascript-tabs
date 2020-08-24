// select elements
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('.tabButton');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
console.log(tabs, tabButtons, tabPanels);

function handleTabButtonClick(event) {
  // unselect all buttons
  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', false);
  });
  // set targeted button as selected
  event.target.setAttribute('aria-selected', true);
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabButtonClick)
);
