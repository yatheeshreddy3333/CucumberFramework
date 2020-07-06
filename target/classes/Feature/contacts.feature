Feature: FreeCRM Contacts Features

#DataTable Maps
#@RegressionTest
@Second
Scenario: Validate Contacts page
Given user is in login page3
When title of the login page is FreeCRM3
Then user Logins3
| username | password |
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Contacts and Validate page3

##DataTable Maps - multiple Test Data
#@RegressionTest @SmokeTest
@Second
Scenario: Create Contact
Given user is in login page3
When title of the login page is FreeCRM3
Then user Logins3
| username | password |
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Contacts and Validate page3
And create Contact
| FirstName | LastName |
| Admin | Super |
| Admin | Services |

