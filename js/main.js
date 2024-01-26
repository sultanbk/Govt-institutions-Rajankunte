function changeLanguage() {
  var language = document.getElementById('language-select').value;
  if (language === 'kn') {
    fetch('kn.json')
      .then(response => response.json())
      .then(translations => {
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
          var key = element.getAttribute('data-i18n');
          element.textContent = translations[key];
        });
      });
  } else {
    // Load English translations
  }
}