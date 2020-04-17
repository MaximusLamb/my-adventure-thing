// IMPORT MODULES under test here:
// import example from '../src/example.js';
import findById from '../utils.js';
import quests from '../quests.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        id: 'darkCave',
        title: 'A Mysterious Dark Cave',
        map: {
            top: '89%',
            left: '44%'
        },
        image: './pictures/giphy.gif',
        description: `
            You stumble upon a dark and pretty scary cave. What do you choose to do?
        `,
        choices: [{
            id: 'camp',
            description: 'Camp For the Night',
            result: `
                You set up camp for the night only to be awoken in the middle of the night by
                a giant troll.  It smashes you with it's huge fists. 
            `,
            healthStatus: - 2
            
        }, {
            id: 'Ignore',
            description: 'Ignore the cave and keep walking because sleep is unnecessary.',
            result: `
                You decide to keep walking instead of going into the cave because you don't
                need sleep and you would rather keep walking through the night.
            `,
        }, {
            id: 'eat',
            description: 'Quickly eat the Glowing Mushroom in the Back',
            result: `
                The Mushroom tastes like candy but it upsets your stomach really bad.  
                You die of dysyntery.
            `,
            healthStatus: - 5
        }]
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const chosenQuest = findById(quests[0], quests.id);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, chosenQuest);
});
