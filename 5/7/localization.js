(function(root) {
  var WshShell = null;

  try {
    WshShell = new ActiveXObject('WScript.Shell')
  } catch (e) {}

  var locales = {
    ru: {
      searchAnything: 'Найдется все ...',
      settings: 'Настройка',
      uninstallApp: 'Удалить приложение',
      leaveReview: 'Оставить отзыв',
      closeAppTitle: 'Вы точно хотите закрыть приложение?',
      uninstallAppTitle: 'Вы точно хотите удалить приложение?',
    },
    en: {
      searchAnything: 'Everything will be found  ...',
      settings: 'Settings',
      uninstallApp: 'Remove the app',
      leaveReview: 'Leave a review',
      closeAppTitle: 'Are you sure you want to close the app?',
      uninstallAppTitle: 'Are you sure you want to remove the app?',
    },
    ar: {
      searchAnything: 'ستجد هناك كل شيء',
      settings: 'الإعدادات',
      uninstallApp: 'قم بإزالة التطبيق',
      leaveReview: 'ترك التعليق',
      closeAppTitle: 'هل أنت متأكد أنك تريد إغلاق التطبيق؟',
      uninstallAppTitle: 'هل أنت متأكد أنك تريد إزالة التطبيق؟',
    },
    de: {
      searchAnything: 'Alles wird gefunden',
      settings: 'Einstellungen',
      uninstallApp: 'Die Anwendung löschen',
      leaveReview: 'Die Rückmeldung geben',
      closeAppTitle: 'Möchten Sie wirklich die Anwendung schließen?',
      uninstallAppTitle: 'Möchten Sie wirklich die Anwendung löschen? ',
    },
    fa: {
      searchAnything: 'همه چیز پیدا می شود',
      settings: 'تنظیمات',
      uninstallApp: 'حذف برنامه',
      leaveReview: 'نظر خود را بگذارید',
      closeAppTitle: 'آیا مطمئن هستید که می خواهید برنامه را ببندید؟',
      uninstallAppTitle: 'آیا مطمئن هستید که می خواهید برنامه را حذف کنید؟',
    },
    fr: {
      searchAnything: 'Vous y trouverez tout',
      settings: 'Paramètres',
      uninstallApp: 'Supprimer l\'application',
      leaveReview: 'Laisser un avis',
      closeAppTitle: 'Êtes-vous sûr de vouloir fermer l\'application ?',
      uninstallAppTitle: 'Êtes-vous sûr de vouloir supprimer l\'application ?',
    },
    es: {
      searchAnything: 'Hay de todo',
      settings: 'Configuración',
      uninstallApp: 'Eliminar la aplicación',
      leaveReview: 'Dejar un comentario',
      closeAppTitle: '¿Está seguro de que quiere cerrar la aplicación?',
      uninstallAppTitle: '¿Está seguro de que quiere eliminar la aplicación?',
    },
    hi: {
      searchAnything: 'सब कुछ मिल जाएगा',
      settings: 'समायोजन',
      uninstallApp: 'ऐप्लीकेशन का हटाव',
      leaveReview: 'समीक्षा छोड़ दीजिये',
      closeAppTitle: 'क्या आप वास्तव में ऐप्लीकेशन को बंद करना चाहते हैं?',
      uninstallAppTitle: 'क्या आप वास्तव में एप्लिकेशन को हटाना चाहते हैं?',
    },
    id: {
      searchAnything: 'Semuanya akan ditemukan',
      settings: 'Pengaturan',
      uninstallApp: 'Hapus aplikasi',
      leaveReview: 'Tinggalkan ulasan',
      closeAppTitle: 'Apakah Anda yakin ingin menutup aplikasi?',
      uninstallAppTitle: 'Apakah Anda yakin ingin menghapus aplikasi?',
    },
    pt: {
      searchAnything: 'Aqui há tudo',
      settings: 'Configurações',
      uninstallApp: 'Remover o aplicativo',
      leaveReview: 'Deixar comentário',
      closeAppTitle: 'Tem certeza de que deseja fechar o aplicativo?',
      uninstallAppTitle: 'Tem certeza de que deseja remover o aplicativo?',
    },
    tr: {
      searchAnything: 'Her şey bulunacak',
      settings: 'Ayarlar',
      uninstallApp: 'Uygulamayı sil',
      leaveReview: 'Yorum bırak',
      closeAppTitle: 'Uygulamayı gerçekten kapatmak istiyor musunuz?',
      uninstallAppTitle: 'Uygulamayı gerçekten slmek istiyor musunuz?',
    },
    ur: {
      searchAnything: 'سب کچھ مل جائے گا',
      settings: 'ترتیبات',
      uninstallApp: 'تطبيق کا حذف',
      leaveReview: 'تبصرہ چھوڑ دیجۓ',
      closeAppTitle: 'کیا آپ حقیقتاً تطبيق کو بند کرنا چاہتے ہیں؟',
      uninstallAppTitle: 'کیا آپ سچ-مچ تطبيق کا حذف کرنا چاہتے ہیں؟',
    },
  }

  function RegExists(path) {
    try {
      WshShell.RegRead(path)
      return true
    } catch (err) {
      return false
    }
  }

  function RegRead(path) {
    try {
      return WshShell.RegRead(path)
    } catch (err) {}
  }

  function RegWrite(path, value, type) {
    try {
      return WshShell.RegWrite(path, value, type || 'REG_SZ')
    } catch (err) {}
  }

  function RegDelete(path) {
    try {
      return WshShell.RegDelete(path)
    } catch (err) {}
  }

  function getLang() {
    var localeNamePath = 'HKCU\\Control Panel\\International\\LocaleName'
    var regPath = 'HKCU\\SOFTWARE\\drpsu\\'
    var langCode = 'en';
    var originalLangCode = '';

    if (RegExists(regPath + 'lang')) {
      langCode = RegRead(regPath + 'lang')
      originalLangCode = langCode;
    }
    if (RegExists(localeNamePath)) {
      var readLocaleName = RegRead(localeNamePath)
      if (typeof readLocaleName === 'string') {
        langCode = RegRead(localeNamePath).toLowerCase()
        originalLangCode = langCode;
      }
    } else {
      var code = parseInt(RegRead('HKCU\\Control Panel\\International\\Locale'), 16)
      var ruCodes = [
        0x0437, // Georgian (Georgia)
        0x002c, // Azeri
        0x742C, // Azeri (Cyrillic)
        0x082C, // Azeri (Cyrillic, Azerbaijan)
        0x782C, // Azeri (Latin)
        0x042C, // Azeri (Latin, Azerbaijan)
        0x0019, // Russian
        0x0419, // Russian (Russia)
        0x0819, // Russian (Moldova)
        0x0022, // Ukrainian
        0x0422, // Ukrainian (Ukraine)
        0x042b, // Armenian
        0x0423 // Belarusian
      ]
      if (ruCodes.indexOf(code) !== -1) {
        langCode = 'ru'
      }
      originalLangCode = code;
    }

    var ruCodes2 = ['uk', 'az', 'by', 'hy', 'ka', 'ru'];
    var rtlCodes = ['ar', 'fa', 'ur']

    langCode = langCode.split(/[_-]/)[0].toLocaleLowerCase();

    if (ruCodes2.indexOf(langCode) !== -1) {
      langCode = 'ru'
    }

    return {
      originalCode: originalLangCode,
      code: langCode,
      rtl: rtlCodes.indexOf(langCode) !== -1
    }
  }

  function translate() {
    var patch = function (key, changeKey) {
      var elements = root.document.querySelectorAll('[data-' + key + ']')

      if(elements && elements.length) {
        for (var i = 0; i < elements.length; i++) {
          var text = root.localization.templates[elements[i].dataset[key]]

          if(text) {
            elements[i][changeKey] = text
          }
        }
      }
    }

    patch('translate', 'innerHTML');
    patch('translate-placeholder', 'placeholder');
  }

  var currentLang = getLang()

  root.localization = {
    originalLang: currentLang.originalCode,
    lang: currentLang.code,
    rtl: currentLang.rtl,
    templates: locales[currentLang.code] || locales.en,
    translate: translate
  }
})(window)
