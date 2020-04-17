import { makeUser } from './JSFiles/mainPage.js';

const myForm = document.getElementById('userForm');

// myForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(myForm);

//     const user = makeUser(formData);  
    
//     const strungUser = JSON.stringify(user);
//     localStorage.setItem('USER', strungUser);
// });

export default function findById(quests, questId) {

    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];

        if (quest.id === questId) {
            return quest;
        }
    }
}