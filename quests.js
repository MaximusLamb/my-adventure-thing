
const darkCave = {
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

const river = {
    id: 'river',
    title: 'A Calm River',
    map: {
        top: '57%',
        left: '67%'
    },
    image: './pictures/riverpicture.jpg',
    description: `
       You hear a river running nearby so you walk up to it.  There's two people sitting
       near a fire cooking up what looks like super juicy steaks.
    `,
    choices: [{
        id: 'ask',
        description: 'Ask if you can join them and eat some steaks',
        result: `
           
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon, {
        id: 'pleasure',
        title: 'The Bold Folding Pleasure',
        map: {
            top: '61%',
            left: '10%'
        },
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
        choices: [{
            id: 'wooden',
            description: 'WOW',
            result: 'You grab 40 gold pieces!',
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'NOW',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'POW',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            gold: 0
        }
        ]
    }
];

export default quests;