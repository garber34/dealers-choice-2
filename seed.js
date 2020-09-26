const faker =require('faker')
const {db,games} = require('./server/db/db')



async function seed(){
await db.sync({force:true});
await games.bulkCreate([
  {title:"Gloomhaven",
year:2017, minPlayer:1, maxPlayer:4, tags:`Action Queue;Action Retrieval;Campaign / Battle Card Driven;Communication Limits;Cooperative Game;Deck Construction;Deck, Bag, and Pool Building;Grid Movement;Hand Management;Legacy Game;Modular Board;Once-Per-Game Abilities;Scenario / Mission / Campaign Game;Simultaneous Action Selection;Solo / Solitaire Game;Storytelling;Variable Player Powers`},
{title:"Wingspan",
year:2019, minPlayer:1, maxPlayer:5, tags:`Card Drafting;Dice Rolling;Drafting;End Game Bonuses;Hand Management;Set Collection;Solo / Solitaire Game`},
{title:"Spirit Island",
year:2017, minPlayer:1, maxPlayer:4, tags:`Action Retrieval;Area Majority / Influence;Cooperative Game;Events;Hand Management;Modular Board;Set Collection;Simultaneous Action Selection;Solo / Solitaire Game;Variable Player Powers`}
])
await db.close();
}

seed();
