let currentLang = 'ar';
let isGoogleTranslateReady = false;

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ar',
    includedLanguages: 'ar,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');

  isGoogleTranslateReady = true;
}

function toggleLanguage() {
  if (!isGoogleTranslateReady) {
    alert("الترجمة لم تُحمّل بعد. انتظر ثوانٍ...");
    return;
  }

  const iframe = document.querySelector('iframe.goog-te-menu-frame');
  if (!iframe) {
    alert("لم يتم تحميل Google Translate بعد. أعد المحاولة.");
    return;
  }

  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const langCode = currentLang === 'ar' ? 'en' : 'ar';
  const langBtn = innerDoc.querySelector(`a[data-language-code="${langCode}"]`);

  if (langBtn) {
    langBtn.click();
    currentLang = langCode;
    document.getElementById('lang-toggle-btn').innerText = (langCode === 'ar') ? 'English' : 'العربية';
  }
}
