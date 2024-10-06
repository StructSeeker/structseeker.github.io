var enButton = document.getElementById('en-btn');
var cnButton = document.getElementById('cn-btn');
var i18n = domI18n({
  selector: '[data-translatable]',
  // separator: ' // ',
  languages: ['en', 'cn'],
  defaultLanguage: 'en',
  enableLog : true
});

enButton.onclick = function () {
  i18n.changeLanguage('en');
};

cnButton.onclick = function () {
  i18n.changeLanguage('cn');
};