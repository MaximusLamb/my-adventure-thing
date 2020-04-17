
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

const quests = [
    darkCave, 
    river,
];

export default quests;