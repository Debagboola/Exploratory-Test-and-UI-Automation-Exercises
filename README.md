# Exploratory Test and UI Automation Exercises
This is an exercise to showcase my knowledge of Exploratory Testing, Defect Reporting, and UI Automation. Below is the simplified instruction and also my test script documentation. Also in the github repository you would find my automation code with the screen recordings.

</br>

## Exploratory Test and Defect Reporting Tasks
* You are required to perform an exploratory test on the Web app of Fliqpay and
create a test script.
* Ensure to highlight in the your test script: 
1) Bugs, issues or needed enhancements that you encountered during your test.
2) The strategy you used in executing this test, highlighting your scope, the test technique(s) you employed and the reasons for choices.

## UI Automation Tasks
* Automate some important flows for the web app.(importance should be at your discretion).
* The Automation can be done using Selenium Webdriver or Cypress. Take a recording of the playback of the automation.

</br>

## Functionalities you should consider:
* Request bank account
*  Fund your wallet
* Make payouts
* Make conversions
* Add beneficiaries

Kindly note that The functionalities listed above are not exhaustive. You are expected to explore the web app to find more.

</br>

## Test Data
| Environment Url | Email Address | Password |
|-----------------|-----------------|-----------------|
| [https://sandbox.fincra.com/](https://sandbox.fincra.com/)  | qa@testing.com | Test@123 |

</br>

## Test Suite
below is the detailed test suite that contains the test scenarios I have been able to test so far
| Test Case | Test Scenarios | Test Steps | Expected Result | Actual Result | 
|-----------------|-----------------|-----------------|-----------------|-----------------|
| Access Web Page    | Confirm that user can successfully access the web page | Go to "https://sandbox.fincra.com/"   | okay    | pass |
| Sign In    | Confirm that a valid user can successfully sign in to the portal     |1. Go to "https://sandbox.fincra.com/" and click on Sign-In. 2. Sign-In using the following credentials: Email Address: qa@testing.com Password: Test@123   | okay    | pass |
| Sign In    | Confirm that an invalid user cannot successfully sign in to the portal     |1. Go to "https://sandbox.fincra.com/" and click on Sign-In. 2. Sign-In using the following credentials: Username: qata@mailinator.com Password: 456  | okay    | pass |
| Sign In    | Confirm that a valid user cannot successfully sign in to the portal with an invalid password    |1. Go to "https://sandbox.fincra.com/" and click on Sign-In. 2. Sign-In using the following credentials: Username: qa@testing.com Password: 456ddff  | okay    | pass |
| Sign In    | Confirm that a user cannot successfully sign in to the portal by submitting without inputing any data   |1. Go to "https://sandbox.fincra.com/" and click on Sign-In. 2. Sign-In using the following credentials: Username: Password: | okay    | pass |
| Access Landing Page after sign in     | Confirm that a valid user is rerouted to dashboard after successful sign in    | sign in successfully    | okay     | pass  |
| Log out after successful sign in     | Confirm that a valid user can successfully log out | click "log out"     | okay     | pass  |
| Request bank account   | Confirm that a valid user can successfully Request bank account   | -   | untested (blocked by verification)    | untested (blocked by verification)  |
| Fund your wallet   | Confirm that a valid user can successfully Fund their wallet   | - | untested (blocked by verification)    | untested (blocked by verification)  |
| Make payouts   | Confirm that a valid user can successfully Make payouts   | - | untested (blocked by verification)    | untested (blocked by verification)  |
| Make conversions   | Confirm that a valid user can successfully Make conversions   | - | untested (blocked by verification)    | untested (blocked by verification)  |
| Add beneficiaries  | Confirm that a valid user can successfully MAdd beneficiaries  | - | untested (blocked by verification)    | untested (blocked by verification)  |


## Test Automation Code for Login Functionality
The test automation code for the login functionality is in this repository and the screen recording is below:
https://github.com/Debagboola/Exploratory-Test-and-UI-Automation-Exercises/assets/40859055/73c78673-a34e-4d7f-9d57-991252bde4dd

## Feedback
I am unable to proceed with testing the other features and automating them because i do not have access to the mail assigned for testing and the account is not yet verified. because of this, i was only successfully able to test login and therefore I could only automate the login functionality

