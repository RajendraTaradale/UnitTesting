Feature('GoogleSearch');

Scenario('Google Search-1', (I) => {
    I.amOnPage('/');
    // I.wait(1);
    I.see('Gmail')
});

Scenario('Google Search-2', (I) => {
    I.amOnPage('/');
    I.see('About');
});
