// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  footerlogin: 'Login',
  footerregister: 'Register',
  footerhomepage: 'Homepage',
  footeradminpanel: 'Adminpanel',
  footerimprint: 'Imprint',
  footeragb: 'Terms & Conditions',
  footerprivacy: 'Privacy Policy',
  locale: 'Language',
  titleimprint: 'Imprint',
  titleagb: 'Legal info and Disclaimer',
  titleprivacypolicy: 'Privacy Policy',

  login: {
    companylabel: 'WMS NukeSoft Login',
    login: 'Login',
    youremail: 'Your email',
    password: 'Password',
    hintemail: 'The email you used for registration',
    buttonsubmit: 'Submit',
    buttonreset: 'Reset'
  },

  registration: {
    companylabel: 'WMS NukeSoft Registration',
    agreeterms: 'I agree to the Terms and Conditions',
    yourlastname: 'Your last name',
    yourfirstname: 'Your first name',
    youremail: 'Your email',
    hintemail: 'The email you want to use for registration',
    password: 'Password',
    submitbutton: 'Submit',
    resetbutton: 'Reset'
  },

  admin: {
    companylabel: 'WMS NukeSoft Login',
    toolbartitle: 'WMS NukeSoft *ADMIN*',
    dashboardtitle: 'Admin Dashboard',
    menuhomepage: 'Homepage',
    menudashboard: 'Dashboard',
    menunewmanual: 'New Production Manual',
    menukitadmin: 'Kit Administration',
    menugeneratoradmin: 'Generator Administration',
    menuaccountadmin: 'Account Administration',
    menucustomer: 'Customer Administration',
    generator: {
      newgeneratorbutton: 'New Generator',
      id: 'ID',
      headline: 'Create new Generator',
      generatorname: 'Generator Name',
      activities: 'Activities (MBq)',
      actions: 'Actions',
      tabletitle: 'Generators',
      uploadlogo: 'Upload Logo',
      labelactivity: 'Enter Generator Activity (MBq)',
      activityinMBq: 'Enter activity in MBq',
      uniquename: 'Name must be unique',
      enternewname: 'Enter Generator Name',
      buttonreset: 'Reset',
      buttonsubmit: 'Submit'
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
    aboutus: 'About us',
    toolbartitle: 'WMS NukeSoft',
    welcomemessage: 'Welcome,',
    dashboardtitle: 'Dashboard',
    menucustomerdashboard: 'Dashboard',
    menunewgenerator: 'Activate new Generator',
    titlenewgenerator: 'Activate new Generator',
    menukitsinproduction: 'Kits in Production',
    titlekitsinproduction: 'Kits in Production',
    menuproductionhistory: 'Production history',
    titleproductionhistory: 'Production history',
    menuaccount: 'My Account',
    titleaccount: 'My Account',
    changepassword: 'Change Password',
    currentpassword: 'Current Password',
    newpassword: 'New Password',
    confirmnewpassword: 'Confirm New Password',
    buttonchangepassword: 'Change Password',
    headlineeditprofile: 'Edit Profile',
    profiletext: 'Complete your profile',
    nogeneratormessage: 'You have no activated Generator. Please activate one to proceed.',
    nogeneratormessage2: 'After the activation you will be able to select a Kit and start Production.'

  },

  newgenerator: {
    buttonsave: 'Save and Activate',
    buttonreset: 'Reset',
    newgeneratormessage: 'Please select and configure the generator you want to activate.',
    selectactivationdate: 'Select Activation Date',
    selectexpirationdate: 'Select Expiration Date',
    selectedgenerator: 'Selected Generator',
    selectedactivity: 'Selected Activity',
    selectedactivationdate: 'Selected Activation Date',
    selectedexpirationdate: 'Selected Expiration Date',
    selecteddeliverydate: 'Selected Delivery Date',
    selectedcalibrationdate: 'Selected Calibration Date',
    formselectedactivity: 'Select Generator Activity (GBq)',
    formselectgenerator: 'Select Generator to activate',
    lotnumber: 'Lot Number',
    selectdeliverydate: 'Select Delivery Date',
    selectcalibrationdate: 'Select Calibration Date and Time',
    fieldisrequired: 'This field is required'
  },

  elutionqc: {
    titleelutionqc: 'Elution Quality Control',
    introduction: 'Please fill in the form and follow all steps of the procedure. ' +
      'When you are done, submit the data. Only then the generator will be available to you for KIT production.',
    genName: 'Generator',
    genSize: 'Activity',
    lotnumber: 'Lot Number',
    calibrationdate: 'Calibration Date',
    deliveryDate: 'Delivery Date',
    expirationDate: 'Expiration Date',
    activity: 'Activity (MBq)',
    extractedactivity: 'Extracted Activity (GBq)',
    extractedelutionheadline: 'Extracted Activity',
    extractedelutionmessage: 'Please enter the amount of extracted activity in GBq (i.e. 12.55).',
    activityshielding: 'Activity Shielding (MBq)',
    result: 'Result',
    tasklistheadline: 'Task List',
    qcheadline: 'Quality Control',
    buttonsubmitelution: 'Submit and Save Data',
    calculatedactivity: 'Calculated Activity',
    activegenerator: 'Current Generator',
    tabcurrentgenerator: 'Current Generator',
    tabelution: 'Elution Process',
    tabqc: 'Quality Control'
  },

  tablecurrentgenerator: {
    headline: 'Your Generator settings',
    currentgenerator: 'Current generator in use',
    lotnumber: 'Lot Number',
    activationdate: 'Activation Date',
    expirationdate: 'Expiration Date',
    QCdate: '1st Elution & Quality Control',
    buttonstarfirsttelution: 'Start 1st Elution QC',
    buttonstartelution: 'Start Elution',
    activatenewgenerator: 'Activate New Generator',
    deliverydate: 'Delivery Date',
    calibrationdate: 'Calibration Date'
  },

  tablekitselection: {
    headline: 'Please select a KIT for production.',
    noqcmessage: 'You have not performed the 1st Elution and Quality Control yet.',
    noqcmessage2: 'After a successful Quality Control you will be able to select a Kit and Start production.',
    performqc: 'Perform the Quality Control!',
    buttonselect: 'Kit Selection',
    currentactivity: 'Available'
  },

  activitychart: {
    headline: 'Current Generator Activity',
    name: 'Name',
    lotnumber: 'Lot Number',
    firstelution: 'First Elution',
    lastelution: 'Last Elution',
    activity: '<sup>99Mo</sup> Activity (%)'
  },

  history: {
    message: 'Please select from the datepicker and model what infos you want to display.',
    datepickerheadline: 'Select day or range of dates',
    modelheadline: 'Select Generator model',
    tableheadline: 'Results'

  },

  tableprofile: {
    username: ' User Name',
    emailaddress: 'Email Address',
    firstname: 'First Name',
    lastname: 'Last Name',
    buttonupdate: 'Update and Save'
  },

  homepage: {
    companylabel: 'WMS NukeSoft'
  }

};
