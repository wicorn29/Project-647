<script>
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('[role="tab"]');

    // Get all tab panels
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    // Initialize the tabs
    tabButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Deselect all tab buttons
        tabButtons.forEach((btn) => {
          btn.setAttribute('aria-selected', 'false');
        });

        // Hide all tab panels
        tabPanels.forEach((panel) => {
          panel.setAttribute('hidden', 'true');
        });

        // Select the clicked tab button
        this.setAttribute('aria-selected', 'true');

        // Show the corresponding tab panel
        const targetPanelId = this.getAttribute('aria-controls');
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
          targetPanel.removeAttribute('hidden');
        }
      });
    });
  });
</script>
