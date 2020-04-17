import quests from 'quests.js';
import listLink from './linkItemList.js';

const ul = document.getElementById('mapList');

const user = JSON.parse(localStorage.getItem('USER'));

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const li = listLink(quest);

    if (user.completed[quest.id]) {
        li.style.background = 'red';
    }

    ul.appendChild(li);
}
console.log(quests[0]);