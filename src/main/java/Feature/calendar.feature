Feature: FreeCRM Calendar Features

#Data Table
#@RegressionTest 
@Third
Scenario: Validate Calendar page
Given user is in login page2
| https://ui.freecrm.com/ |
When title of the login page is FreeCRM2
Then user Logins2
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Calendar and Validate page2

#@RegressionTest @SmokeTest
@Third
Scenario: create Calendar
Given user is in login page2
| https://ui.freecrm.com/ |
When title of the login page is FreeCRM2
Then user Logins2
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Calendar and Validate page2
And create Calendar
| New Event Calendar |