const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

const page = await browser.newPage();
const navigationPromise = page.waitForNavigation();
await page.goto("https://www.linkedin.com/uas/login?fromSignIn=true&trk=cold_join_sign_in/");
await navigationPromise;

// Email for Log-in
const email = await page.waitForSelector('input[type="text"]');
await email.click();
await navigationPromise;
await page.keyboard.type(`EMAIL_ID_HERE`, { delay: 300 }); // replace EMAIL_ID_HERE with your actual email, e.g. xyz@gmail.com

// Password for Log-in
const password = await page.waitForSelector('input[type="password"]');
await password.click();
await navigationPromise;
await page.keyboard.type(`SECRET_PASSWORD_HERE`, {delay: 200 }); // replace SECRET_PASSWORD_HERE with your actual LinkedIn password

// Signing in
await page.keyboard.press(`Enter`, {delay: 200 });
await navigationPromise;

// Invitations
await page.goto("https://www.linkedin.com/mynetwork/invitation-manager/sent/");

var i, ii, j;
let persons = {
    name: "Name",
    about: "About",
    link: "Link"
};

for(ii=0; ii<8; ii++) // for 8 result pages
{
    for(i=0; i<99; i++) // of 99 persons each
    {
        persons.prototype.name[i] = document.getElementsByClassName('invitation-card__title')[i].innerText; // gets Name
        document.getElementsByClassName("EntityPhoto-circle-5")[i].click(); // clicks "Profile Photo" to go to profile
        document.getElementById("line-clamp-show-more-button").click(); // clicks on See More to get folded About -- (IF ANY)
        persons.prototype.about[i] = document.getElementsByClassName("pv-about__summary-text")[0].textContent; // gets About
        persons.prototype.link[i] = window.location.href; // gets Link for current name
        window.history.back(); // goes back to previous URL
    }
    document.querySelector('[aria-label="Next"]').click(); // clicks on Next button
}

var csv = 'Name,About,Link\n';
csv = person.join('\n');

console.log(csv);

})();
