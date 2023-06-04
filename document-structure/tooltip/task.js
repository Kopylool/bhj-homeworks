const tooltipTriggers = document.querySelectorAll('.has-tooltip');

tooltipTriggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    event.preventDefault();

    // hide all tooltips
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
      tooltip.classList.remove('tooltip_active');
    });

    // show a tooltip for a clicked element
    const tooltipText = trigger.getAttribute('title');
    const tooltip = document.createElement('div');
    tooltip.innerText = tooltipText;
    tooltip.classList.add('tooltip');
    tooltip.classList.add('tooltip_active');
    const position = trigger.getAttribute('data-position') || 'top';
    tooltip.classList.add(`tooltip_${position}`);
    trigger.appendChild(tooltip);
  });
});

document.addEventListener('click', event => {
  // hide the tooltip when clicked outside of it
  const tooltips = document.querySelectorAll('.tooltip');
  if (!event.target.matches('.has-tooltip, .tooltip')) {
    tooltips.forEach(tooltip => {
      tooltip.classList.remove('tooltip_active');
      tooltip.remove();
    });
  }
});