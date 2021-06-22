const { I } = inject();
// Add in your custom step files

Given('I Login into Orange HRM', () => {
  // TODO: replace with your own step
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.see("LOGIN Panel"); // Assertion
  I.fillField("//input[@id='txtUsername']", "Admin"); // XPATH
  I.fillField("#txtPassword", "admin123"); // CSS
  I.click("#btnLogin") //ID
});

Then('I should see the Dashboard page', () =>{
  I.see("Dashboard"); // Assertion
})

When('I go to Admin Tab', () => {
  I.click("//b[contains(text(),'Admin')]");
})

When('I go to PIM tab', () => {
  I.click("//b[contains(text(),'PIM')]");
})

Then('I should see the "{word}"', (seetext) => {
  I.see(seetext);
})

Then(/I should see the \"([^\\"]*)\" texts/, (seetext) => {
  I.see(seetext);
})

Then('I should see the number {int}', (seenumber) =>{
I.see(seenumber);
})

Then('I should see the Employee details', (table) => {
  for(const record in table.rows){
    if (record<1){
      continue;
    }
    const cellvalue = table.rows[record].cells;
    const id = cellvalue[0].value;
    const fname = cellvalue[1].value;
    const lname  =cellvalue[2].value;
    I.see(fname);
    I.say(lname);
    I.say(id);
  }
})