// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { makeUser } from '../JSFiles/mainPage.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const form = new FormData();

    form.set('name', 'Max');
    form.set('healthStatus', 'good');

    const expected = {
        name: 'Max',
        healthStatus: 'good'

    };
    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(form);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, user);
});
