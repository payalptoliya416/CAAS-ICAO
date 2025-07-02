function handleCheckboxClick(clickedCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="visit"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox !== clickedCheckbox) checkbox.checked = false;
    });
  }

  function handleSubmit() {
    const selected = document.querySelector('input[name="visit"]:checked');
    if (!selected) {
      return;
    }
    window.location.href = selected.value;
  }