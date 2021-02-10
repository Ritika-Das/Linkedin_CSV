// window.location.assign = 'https://www.linkedin.com/mynetwork/invitation-manager/sent/';

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
