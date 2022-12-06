
const QUESTIONS = [
    {
        question: 'Select All the person present',
        answer: '.person'
    },
    {
        question: 'Select only the Grand Father',
        answer: '[data-id="2"]'
    },
    {
        question: 'Select only the Third Generation Person in the list',
        answer: '.third-generation .person'
    },
    {
        question: 'Select All Persons who wear 🥽',
        answer: '[data-wears="🥽"]'
    },
    {
        question: 'Select the Generation whose parent liked 🏐',
        answer: '[data-likes="🏐"] + .generation'
    },
    {
        question: 'Select All Second Generation People who like 🥎',
        answer: '.second-generation > .person[data-likes=🥎]'
    },
    {
        question: 'Select Kids whose parent wears 🕶️',
        answer: '[data-wears="🕶️"]~div .person'
    },
    {
        question: 'Select All People who like ⚽ but are not the first child',
        answer: ':not(:first-child)[data-likes="⚽"]'
    },
    {
        question: 'Select All people like ⚽ and wear 👓',
        answer: '[data-likes="⚽"][data-wears="👓"]'
    },
    {
        question: 'Select All Third Generation Person who wear 🥽 whose parents like 🥎',
        answer: '.second-generation > .person[data-likes="🥎"] ~ .third-generation > .person[data-wears="🥽"]'
    },
]

export default QUESTIONS