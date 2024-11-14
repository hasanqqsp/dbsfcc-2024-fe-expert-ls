const { setWindowSize } = require('@codeceptjs/configure');
Feature("Main Page");
Before(({ I }) => {});
Scenario("should show main page correctly", async () => {
    const I = actor();
    I.amOnPage("/");
    // pause();
    setWindowSize(915,412)

    I.see("Be Focus and Productive", "h2");
    I.see("Not just an ordinary headphones. It's designed for meditation.", "p");
    I.see("Choose Your Favorite Productive Music", "h2");

    I.waitForElement(".music-list__item", 5);
    I.seeElement(".music-list__item");

    I.see('Coverless Book');
    I.see('Lofi Orchestra');
    I.see('Music by Patrick A. from Pixabay');
    I.see('Good Night');
    I.click('a[href="#blog"]');
    pause();
});