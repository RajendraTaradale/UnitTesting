Feature('Demo Feature');

Scenario('1.amOnPage-Test', (I) => {
   I.amOnPage('https://opensource-demo.orangehrmlive.com'); // -> siteurl
    I.wait(1);
});

Scenario('2.Testcase2-Test', (I) => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com');
    I.see("LOGIN Panel"); // Assertion
    I.fillField("//input[@id='txtUsername']", "Admin"); // XPATH
    I.fillField("#txtPassword", "admin123"); // CSS
    I.click("#btnLogin") //ID
    I.see("Dashboard"); // Assertion
    I.dontSee("LOGIN Panel"); // Assertion
})



