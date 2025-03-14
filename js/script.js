document.addEventListener('DOMContentLoaded', function(){
  // Dark Mode Toggle Functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  const modeLabel = document.getElementById('modeLabel');
  
  // Initialize theme based on localStorage value
  if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light-mode');
    darkModeToggle.checked = true;
    modeLabel.textContent = 'Mode Sombre';
  } else {
    modeLabel.textContent = 'Mode Clair';
  }
  
  darkModeToggle.addEventListener('change', function(){
    if(this.checked){
      document.body.classList.add('light-mode');
      modeLabel.textContent = 'Mode Sombre';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      modeLabel.textContent = 'Mode Clair';
      localStorage.setItem('theme', 'dark');
    }
  });
});
