const interests = document.querySelector('.interests');

function checkChildren(parentCheckbox) {
  const childrenCheckboxes = parentCheckbox.closest('li').querySelectorAll('input[type="checkbox"]');
  childrenCheckboxes.forEach((checkbox) => {
    checkbox.checked = parentCheckbox.checked;
  });
}

function checkParents(childCheckbox) {
  let parentCheckbox = childCheckbox.closest('ul').closest('li').querySelector('input[type="checkbox"]');
  while (parentCheckbox) {
    const siblingsCheckboxes = parentCheckbox.closest('ul').querySelectorAll('input[type="checkbox"]');
    let allChecked = true;
    let allUnchecked = true;
    siblingsCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        allUnchecked = false;
      } else {
        allChecked = false;
      }
    });
    if (allChecked) {
      parentCheckbox.checked = true;
      parentCheckbox.indeterminate = false;
    } else if (allUnchecked) {
      parentCheckbox.checked = false;
      parentCheckbox.indeterminate = false;
    } else {
      parentCheckbox.checked = false;
      parentCheckbox.indeterminate = true;
    }
    parentCheckbox = parentCheckbox.closest('ul').closest('li').querySelector('input[type="checkbox"]');
  }
}

interests.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'INPUT') {
    checkChildren(target);
    checkParents(target);
  }
});