// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Aktion nicht erfolgreich',
  success: 'Aktion erfolgreich',
  footerlogin: 'Login',
  footerregister: 'Registrieren',
  footerhomepage: 'Homepage',
  footeradminpanel: 'Adminbereich',
  footerimprint: 'Impressum',
  footeragb: 'AGB',
  footerprivacy: 'Datenschutz',
  locale: 'Sprache',
  titleimprint: 'Impressum',
  titleagb: 'AGB & Disclaimer',
  titleprivacypolicy: 'Datenschutzerklärung',

  login: {
    companylabel: 'WMS NukeSoft Login',
    login: 'Login',
    youremail: 'Ihre E-Mail',
    password: 'Passwort',
    hintemail: 'Die E-Mail mit der sie sich registriert haben',
    buttonsubmit: 'Absenden',
    buttonreset: 'Löschen'
  },

  registration: {
    companylabel: 'WMS NukeSoft Login',
    agreeterms: 'Ich stimme den rechtlichen Bedingungen zu',
    yourlastname: 'Ihr Nachname',
    yourfirstname: 'Ihr Vorname',
    youremail: 'Ihre E-Mail',
    password: 'Passwort',
    submitbutton: 'Absenden',
    resetbutton: 'Löschen'
  },

  admin: {
    companylabel: 'WMS NukeSoft Login',
    toolbartitle: 'WMS NukeSoft *ADMIN*',
    dashboardtitle: 'Admin Dashboard',
    menuhomepage: 'Homepage',
    menudashboard: 'Dashboard',
    menunewmanual: 'Neue Produktion',
    menukitadmin: 'Kitverwaltung ',
    menugeneratoradmin: 'Generatorverwaltung',
    menuaccountadmin: 'Kontoverwaltung ',
    menucustomer: 'Kundenverwaltung',
    generator: {
      newgeneratorbutton: 'Generator erstellen',
      headline: 'Neuen Generator erstellen',
      id: 'ID',
      generatorname: 'Name / Modell',
      activities: 'Aktivität (MBq)',
      actions: 'Aktionen',
      tabletitle: 'Generatoren',
      uploadlogo: 'Upload Logo',
      labelactivity: 'Eingabe Aktivitäten (MBq)',
      activityinMBq: 'Eingabe Aktivität in MBq',
      uniquename: 'Name darf nicht bereits vorhanden sein',
      enternewname: 'Eingabe Generatorname',
      buttonreset: 'Zurücksetzen',
      buttonsubmit: 'Speichern'
    },
    customer: {
      id: 'ID',
      name: 'Customer Name',
      isVerified: 'Is Verified',
      generatorList: 'Generator List',
      actions: 'Actions',
      email: 'E-mail',
      tableTitle: 'Customers',
      newCustomerButton: 'New Customer'
    }
  },

  user: {
    companylabel: 'WMS NukeSoft Login',
    aboutus: 'Über uns',
    toolbartitle: 'WMS NukeSoft',
    welcomemessage: 'Willkommen,',
    dashboardtitle: 'Dashboard',
    menucustomerdashboard: 'Dashboard',
    menunewgenerator: 'Neuen Generator aktivieren',
    menukitsinproduction: 'Kits in Produktion',
    titlenewgenerator: 'Neuen Generator aktivieren',
    titlekitsinproduction: 'Kits aktuell in Produktion',
    menuproductionhistory: 'Produktionshistorie',
    titleproductionhistory: 'Produktionshistorie',
    menuaccount: 'Mein Konto',
    titleaccount: 'Mein Konto',
    changepassword: 'Passwort ändern',
    currentpassword: 'Aktuelles Passwort',
    newpassword: 'Neues Passwort',
    confirmnewpassword: 'Neues Passwort bestätigen',
    buttonchangepassword: 'Passwort ändern',
    headlineeditprofile: 'Profil bearbeiten',
    profiletext: 'Bitte füllen Sie alle Felder aus',
    nogeneratormessage: 'Sie haben keinen aktivierten Generator. Um fortzufahren, aktivieren Sie bitte einen.',
    nogeneratormessage2: 'Nach erfolgreicher Aktivierung können Sie mit der Auswahl und Produktion beginnen.'

  },

  newgenerator: {
    buttonsave: 'Speichern und Aktivieren',
    buttonreset: 'Reset',
    newgeneratormessage: 'Bitte wählen Sie hier den zu aktivierenden Generator aus.',
    selectactivationdate: 'Aktivierungsdatum wählen',
    selectexpirationdate: 'Auslaufdatum wählen',
    selectedgenerator: 'Gewählter Generator',
    selectedactivity: 'Gewählte Aktivität',
    selectedactivationdate: 'Gewähltes Aktivierungsdatum',
    selecteddeliverydate: 'Gewähltes Lieferdatum',
    selectedcalibrationdate: 'Gewähltes Kalibrierungsdatum',
    selectedexpirationdate: 'Gewähltes Auslaufdatum',
    formselectedactivity: 'Aktivität auswählen (GBq)',
    formselectgenerator: 'Generator auswählen',
    lotnumber: 'Chargennummer',
    selectdeliverydate: 'Lieferdatum wählen',
    selectcalibrationdate: 'Kalibrierungsdatum wählen',
    fieldisrequired: 'Eine Eingabe wird benötigt'
  },

  elutionqc: {
    titleelutionqc: 'Elution Qualitätskontrolle',
    introduction: 'Füllen Sie alle Felder aus und folgen Sie den angegebenen Schritten. ' +
      'Wenn Sie fertig sind, senden Sie das Formular ab. Nur dann steht Ihnen der Generator für die KIT-Produktion zur Verfügung.',
    genName: 'Generator',
    genSize: 'Ausgangsaktivität',
    lotnumber: 'Chargennummmer',
    calibrationdate: 'Kalibrierungsdatum',
    deliveryDate: 'Lieferdatum',
    expirationDate: 'Verfallsdatum',
    activity: 'Aktivität (MBq)',
    extractedactivity: 'Extrahierte Aktivität (GBq)',
    extractedelutionheadline: 'Eingabe Aktivität',
    extractedelutionmessage: 'Bitte geben Sie die entnommene Aktivität in GBq ein  (z.B. 12.55).',
    activityshielding: 'Aktivität geschützt (MBq)',
    result: 'Ergebnis',
    tasklistheadline: 'Herstellungsanleitung',
    qcheadline: 'Qualitätskontrolle',
    buttonsubmitelution: 'Speichern und Absenden',
    calculatedactivity: 'Berechnete Aktivität',
    activegenerator: 'Aktiver Generator',
    tabcurrentgenerator: 'Aktueller Generator',
    tabelution: 'Elutionsprozess',
    tabqc: 'Qualitätskontrolle'
  },

  tablecurrentgenerator: {
    headline: 'Ihre Generator Infos',
    currentgenerator: 'Aktueller Generator',
    lotnumber: 'Chargennummer',
    activationdate: 'Aktivierungsdatum',
    expirationdate: 'Auslaufdatum',
    QCdate: '1. Elution & Qualitätskontrolle',
    buttonstartelution: 'Start Elution',
    buttonstarfirsttelution: 'Start 1. Elution QK',
    activatenewgenerator: 'Neuen Generator aktivieren',
    deliverydate: 'Lieferdatum',
    calibrationdate: 'Kalibrierdatum'
  },

  tablekitselection: {
    headline: 'Bitte wählen Sie ein KIT',
    noqcmessage: 'Sie haben noch keine Qualitätskontrolle durchgeführt.',
    noqcmessage2: 'Nach erfolgreicher Qualitätskontrolle können Sie die KIT Produktion starten.',
    performqc: 'Qualitätskontrolle benötigt!',
    buttonselect: 'Kit auswählen',
    currentactivity: 'Verfügbares'
  },

  activitychart: {
    headline: 'Aktuelle Generatoren Aktivität',
    name: 'Name',
    lotnumber: 'Chargennummer',
    firstelution: 'Erste Elution',
    lastelution: 'Letzte Elution',
    activity: 'Aktivität (%)'
  },

  history: {
    message: 'Bitte wählen Sie anhand des Datums und Modells die Infos, die angezeigt werden sollen.',
    datepickerheadline: 'Tag oder Zeitraum wählen',
    modelheadline: 'Generatormodell wählen',
    tableheadline: 'Ergebnisse'
  },

  tableprofile: {
    username: ' Benutzername',
    emailaddress: 'E-Mail Adresse',
    firstname: 'Vorname',
    lastname: 'Nachname',
    buttonupdate: 'Eingabe speichern'
  },

  homepage: {
    companylabel: 'WMS NukeSoft'
  }

};
