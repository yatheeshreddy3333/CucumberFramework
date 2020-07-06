$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calendar.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Calendar Features",
  "description": "",
  "id": "freecrm-calendar-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7696766300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Data Table"
    },
    {
      "line": 4,
      "value": "#@RegressionTest"
    }
  ],
  "line": 6,
  "name": "Validate Calendar page",
  "description": "",
  "id": "freecrm-calendar-features;validate-calendar-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is in login page2",
  "rows": [
    {
      "cells": [
        "https://ui.freecrm.com/"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of the login page is FreeCRM2",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Logins2",
  "rows": [
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Calendar and Validate page2",
  "keyword": "And "
});
formatter.match({
  "location": "CalendarStepDefinition.user_is_in_login_page2(DataTable)"
});
formatter.result({
  "duration": 6282968100,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.title_of_the_login_page_is_FreeCRM2()"
});
formatter.result({
  "duration": 10671400,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.user_Logins2(DataTable)"
});
formatter.result({
  "duration": 590941200,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.click_on_Calendar_and_Validate_page2()"
});
formatter.result({
  "duration": 2709161600,
  "status": "passed"
});
formatter.after({
  "duration": 156470300,
  "status": "passed"
});
formatter.before({
  "duration": 5651093000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#@RegressionTest @SmokeTest"
    }
  ],
  "line": 16,
  "name": "create Calendar",
  "description": "",
  "id": "freecrm-calendar-features;create-calendar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is in login page2",
  "rows": [
    {
      "cells": [
        "https://ui.freecrm.com/"
      ],
      "line": 18
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of the login page is FreeCRM2",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user Logins2",
  "rows": [
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on Calendar and Validate page2",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "create Calendar",
  "rows": [
    {
      "cells": [
        "New Event Calendar"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalendarStepDefinition.user_is_in_login_page2(DataTable)"
});
formatter.result({
  "duration": 5680163100,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.title_of_the_login_page_is_FreeCRM2()"
});
formatter.result({
  "duration": 14216600,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.user_Logins2(DataTable)"
});
formatter.result({
  "duration": 1107249800,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.click_on_Calendar_and_Validate_page2()"
});
formatter.result({
  "duration": 2648759100,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.ceate_Calendar(DataTable)"
});
formatter.result({
  "duration": 10298419100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027title\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-A4R0EHC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64804}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9cd1dd0b7d306a57656936413053cce1\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.CalendarStepDefinition.ceate_Calendar(CalendarStepDefinition.java:72)\r\n\tat ✽.And create Calendar(calendar.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 211046600,
  "status": "passed"
});
formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Contacts Features",
  "description": "",
  "id": "freecrm-contacts-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5617861000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#DataTable Maps"
    },
    {
      "line": 4,
      "value": "#@RegressionTest"
    }
  ],
  "line": 6,
  "name": "Validate Contacts page",
  "description": "",
  "id": "freecrm-contacts-features;validate-contacts-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is in login page3",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of the login page is FreeCRM3",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Logins3",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on Contacts and Validate page3",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_in_login_page3()"
});
formatter.result({
  "duration": 6711076500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.title_of_the_login_page_is_FreeCRM3()"
});
formatter.result({
  "duration": 14071800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.user_Logins3(DataTable)"
});
formatter.result({
  "duration": 567849200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_Contacts_and_Validate_page3()"
});
formatter.result({
  "duration": 2602042700,
  "status": "passed"
});
formatter.after({
  "duration": 176031300,
  "status": "passed"
});
formatter.before({
  "duration": 5696168700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "##DataTable Maps - multiple Test Data"
    },
    {
      "line": 15,
      "value": "#@RegressionTest @SmokeTest"
    }
  ],
  "line": 17,
  "name": "Create Contact",
  "description": "",
  "id": "freecrm-contacts-features;create-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is in login page3",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of the login page is FreeCRM3",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user Logins3",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on Contacts and Validate page3",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "create Contact",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 25
    },
    {
      "cells": [
        "Admin",
        "Super"
      ],
      "line": 26
    },
    {
      "cells": [
        "Admin",
        "Services"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_in_login_page3()"
});
formatter.result({
  "duration": 8762461800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.title_of_the_login_page_is_FreeCRM3()"
});
formatter.result({
  "duration": 10908400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.user_Logins3(DataTable)"
});
formatter.result({
  "duration": 561673300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_Contacts_and_Validate_page3()"
});
formatter.result({
  "duration": 3073532600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.create_Contact(DataTable)"
});
formatter.result({
  "duration": 10302039700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-A4R0EHC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64873}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6a825386e506c10f8314d3a9df1b1b58\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.ContactsStepDefinition.create_Contact(ContactsStepDefinition.java:73)\r\n\tat ✽.And create Contact(contacts.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 207701200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Features",
  "description": "Description: This feature will test a valid LogIn functionality",
  "id": "login-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5618359700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#without Examples"
    },
    {
      "line": 4,
      "value": "#@SmokeTest @First"
    }
  ],
  "line": 6,
  "name": "Valid login",
  "description": "",
  "id": "login-features;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user logins using valid credentials \"josephkuruvilla891@gmail.com\" and \"Jakay07@\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "home page should be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 7114557000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 8545100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla891@gmail.com",
      "offset": 37
    },
    {
      "val": "Jakay07@",
      "offset": 72
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_valid_credentials(String,String)"
});
formatter.result({
  "duration": 562898000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.home_page_should_be_displayed()"
});
formatter.result({
  "duration": 1851910700,
  "status": "passed"
});
formatter.after({
  "duration": 107179700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#with Examples"
    },
    {
      "line": 13,
      "value": "#@SmokeTest @First"
    }
  ],
  "line": 15,
  "name": "Invalid Login",
  "description": "",
  "id": "login-features;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logins using invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-features;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "login-features;invalid-login;;1"
    },
    {
      "cells": [
        "josephkuruvilla",
        "Jakay07@"
      ],
      "line": 23,
      "id": "login-features;invalid-login;;2"
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "jayay07"
      ],
      "line": 24,
      "id": "login-features;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5740306000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid Login",
  "description": "",
  "id": "login-features;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logins using invalid \"josephkuruvilla\" and \"Jakay07@\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 14319590700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 8532800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla",
      "offset": 27
    },
    {
      "val": "Jakay07@",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_invalid(String,String)"
});
formatter.result({
  "duration": 408953100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 1836533900,
  "status": "passed"
});
formatter.after({
  "duration": 108570600,
  "status": "passed"
});
formatter.before({
  "duration": 5806568400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Login",
  "description": "",
  "id": "login-features;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user logins using invalid \"josephkuruvilla891@gmail.com\" and \"jayay07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 9178706400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 7314500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla891@gmail.com",
      "offset": 27
    },
    {
      "val": "jayay07",
      "offset": 62
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_invalid(String,String)"
});
formatter.result({
  "duration": 500472500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 2011618300,
  "status": "passed"
});
formatter.after({
  "duration": 179519300,
  "status": "passed"
});
});