import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Tweets.css';

const Tweets = ({ grabNews, getScore }) => {
    const gamespotAPI = 'a0ab89afc2bc2e8f7fdf12a0564240ed0be94b32'
    const ac = new AbortController();
    const signal = ac.signal;

    const [image, setimages] = useState([])
    const [article, setarticles] = useState([])
    const [review, setreviews] = useState([])
    const [date, setdate] = useState('')
    const [lastYear, setlastYear] = useState('')

    const images = [{
        index : 0,
        authors : "Michael Higham",
        title : "Final Fantasy Fan Fest kicked off with the full intro cinematic for FFXIV Endwalker, and it has wild reveals that tie previous expansions together.",
        image : {
            original : "https://www.gamespot.com/a/uploads/original/1574/15747411/3831130-3791818-ffxiv_endwalker_cinematic_trailer.00_01_00_13.still004.jpg"
        }
    },
    {
        index : 1,
        authors : "George Yang",
        title : "Wasteland 3 Dev's Next Game Seems To Be A FPS RPG",
        image : {
            original : "https://www.gamespot.com/a/uploads/original/1646/16465123/3831061-inexile.jpg"
        }
    },

    {
        index : 2,
        image : {
            original : "https://www.gamespot.com/a/uploads/original/1603/16030002/3771817-talos-skrulls.jpg"
        },
    },

    {

        index : 3,
        image : {
            original : 'https://www.gamespot.com/a/uploads/original/1539/15391776/3831025-9852867317-36452.jpg'
        }

    },

    {

        index : 4,
        image : {
            original : 'https://www.gamespot.com/a/uploads/original/1552/15524586/3831014-307-mass-effect-legendary-edition-screenshot-1-1609391340.jpg'
        }
        
    },

    {

        index : 5,
        image : {
            original : 'https://www.gamespot.com/a/uploads/original/1574/15747411/3831112-ffxivend.jpg'
        }
    }
]

const articles = [{
    deck : 'Final Fantasy Fan Fest kicked off with the full intro cinematic for FFXIV Endwalker, and it has wild reveals that tie previous expansions together.',
    title : 'Full Final Fantasy XIV: Endwalker Cinematic Trailer Revealed, Contains Major Story Implications',
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1574/15747411/3831130-3791818-ffxiv_endwalker_cinematic_trailer.00_01_00_13.still004.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1574/15747411/3831130-3791818-ffxiv_endwalker_cinematic_trailer.00_01_00_13.still004.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1574/15747411/3831130-3791818-ffxiv_endwalker_cinematic_trailer.00_01_00_13.still004.jpg'
    },
    body : `Players are thriving right now with Fan Fest 2021 kicking off and plenty of new details of the upcoming Endwalker expansion, which is set to launch on November 23 (and November 19 for those who preorder). The full intro cinematic trailer for Endwalker started the show and it contains some wild implications for where FFXIV's story is going. This shorter teaser version was first shown back in February this year, but this new version is the official six-minute Endwalker intro, and you can watch it below. Be warned, however--the trailer contains spoilers for those who are not caught up to at least the end of the 5.3 story content. This full version starts similarly with the Warrior of Light walking on the moon, then showing Alisaie fighting beastly creatures on their home planet as the Warrior of Light and Alphinaud--who's sporting the new Sage healer job--come in to join her fight.</p><p>The theme song shifts to a big Heavensward callback, then transitions to a new scene with Estinien and his dragon companion Vritra fighting off an army of succubus-like creatures. This looks to be one of the new zones, and it's made of up of islands floating in the sky (which was teased later in the keynote presentation).</p><p>With a big Stormblood leitmotif, the cinematic then goes to a familiar scene with villain Fandaniel looking over a burning map in a creepy, bio-organic underground dungeon (which could be related to the nature of Hydaelyn), and going up an elevator to see his partner-in-crime, Zenos yae Galvus, sitting on a throne watching the world burn.</p><p>Another new scene shows Urianger meeting with Thancred in Thavnair's Radz-at-Han city-state, a zone that'll be added with Endwalker. Urianger is as clairvoyant about damning information, implying the world is doomed.</p><p>The following scene contains a significant reveal for a new zone that long-time players have been awaiting--Old Sharlayan is shown as a massive, beautiful, and almost too-good-to-be-true paradise surrounded by clear water, lush vegetation, and pristine architecture. Sharlayans are known to be incredible scholars, and deep within its libraries, you see G'raha Tia revealing that he's uncovered secrets about the nature of their realm. Meanwhile, Y'shtola meets with the Sharlayan council to warn them of the impending calamity, but known to be isolationists, the council leader (whose identity has not been fully revealed yet) says that they'll be fine, refusing to help the fight.</p><p>The cinematic returns to villains Fandaniel and Zenos watching the world burn and looking up to the moon, which also reveals that Zenos has been revamped as a Scythe-wielding Reaper, the new playable melee DPS job coming to Endwalker. As the camera zooms into the moon's reflection in Zenos' eye, it cuts to the Warrior of Light on the moon fending off a massive sandworm-like creature before revealing the canon job change to Paladin while overlooking the home planet.</p><,>As expected, Endwalker seems to be tying together all story threads throughout FFXIV's lifespan, which makes sense given that this is the end of the Hydaelyn-Zodiark story arc that's been ongoing since the start of the game. You can hear it in the samples and leitmotifs in the Endwalker theme song, and you can see it in the characters and how they've evolved. This is a rather simple breakdown of the Endwalker cinematic and there is definitely more to parse that could reveal more details about the events surround the expansion's story. If you noticed something yourself, let us know in the comments below`,
    authors : 'Michael Higham',
    publish_date : '2021-05-14 11:10:00'
},

{
    deck : 'The opening keynote for FFXIV Fan Fest 2021 revealed a ton of new information for the upcoming expansion, including two different launch dates in November.',
    title : 'Final Fantasy XIV Endwalker Release Date Announced; Coming November 2021',
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1574/15747411/3831112-ffxivend.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1574/15747411/3831112-ffxivend.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1574/15747411/3831112-ffxivend.jpg'
    },
    body : `Final Fantasy XIV: Endwalker, the next expansion for the Square Enix MMORPG, will launch on November 23, 2021. However, those who preorder the expansion will have early access four days ahead of launch starting on Friday, November 19. Director and producer Naoki Yoshida led the opening keynote presentation for Final Fantasy Fan Fest 2021 and detailed a slew of information for FFXIV: Endwalker including these launch dates. There are four different editions of FFXIV: Endwalker as well--the Collector's Edition, the Collector's Box, the Digital Collector's Edition, and the Standard Edition. As expected, there will be no physical version of the game itself and all editions come with digital download codes. Whichever edition you preorder, you will be able to start playing on the November 19 early access date. Several details were revealed during the Fan Fest 2021 keynote, including (but not limited to) the new, the additional zones like Thavnair and Old Sharlayan, parts of the upcoming story dungeons, new mounts, the next alliance raid series called Myths of the Realm, and a whole lot more. You can also see all the wild implications for the story of FFXIV Endwalker in the full intro cinematic above or our trailer breakdown. We'll have more coverage of Final Fantasy Fan Fest 2021 throughout the weekend--stay tuned.`,
    authors : 'Michael Higham',
    publish_date : '2021-05-14 09:11:00'
},

{
    deck : 'Choosing one side of the morality coin or the other opens up a lot of different options you might otherwise miss.',
    title : 'Mass Effect: Legendary Edition First-Timer PSA - Play Either As Full Paragon Or Full Renegade',
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1552/15524586/3831078-comandos-de-mass-effect-2-hdgamers-1.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1552/15524586/3831078-comandos-de-mass-effect-2-hdgamers-1.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1552/15524586/3831078-comandos-de-mass-effect-2-hdgamers-1.jpg'
    },
    body : `One of the most memorable features of the series has always been its morality system, which splits between the Paragon and Renegade options. Choice is a huge part of the Mass Effect series, as they are role-playing games, and that's true in Mass Effect: Legendary Edition as well. If you're new to the series, though, you might not realize exactly how the morality system works. It toggles between two extremes: Paragon, a conversation-centric, merciful approach, and Renegade, a down-to-business, confrontational approach. And while it can be fun to change how your Commander Shepard approaches problems on a case-by-case basis, we've got some advice for you: Pick Paragon or Renegade and stick with it. Your status as either Paragon or Renegade is determined by your choices throughout the game, whether it's in dialogue with other characters or in how you choose to resolve conflicts and solve problems. In dialogue, Paragon choices are always on the top of the dialogue wheel, while Renegade choices are always on the bottom. As mentioned, these aren't so much "good" or "bad"; more like "diplomatic" and "expedient." The Paragon works with other people to try to make everyone happy, while the Renegade gets the job done no matter whose feathers it might ruffle.</p><>As you make Paragon or Renegade choices, you'll earn points for each side, which are tracked on the Squad screen for your character in all three games. It's fully possible to collect both Paragon and Renegade points throughout the game, allowing what seems best in the moment to dictate how you talk with people or wrap up problems. However, there are a lot of things in the Mass Effect games that are dependent on you either being very Paragon or very Renegade. Often, it doesn't matter <em>which</em> of the two extremes you hit, as long as you hit <em>one</em> of them. Being fully Paragon or fully Renegade (or at least pretty close) often opens up extra dialogue options and other content in the game. It really does pay to commit to a certain approach, at least for one playthrough. If you don't commit hard enough to Paragon or Renegade, you might miss out on certain story beats and options that can have devastating, wide-reaching effects on the story as it progresses. Without spoiling anything, for certain conflicts in the first Mass Effect, being hard Paragon or Renegade gives you access to important solutions; your choices during these moments can change all three games drastically. Trust us when we say you're going to want those opportunities, and you might regret not having them.</><p>So at least for one go through the Mass Effect universe, it's better to be morally black or white, rather than a shade of gray. The options, solutions, missions, and relationships picking one path affords you opens up a lot in the three games you might otherwise miss.</p><p>Which side you choose, however, is up to you, and it's worth keeping in mind what your gameplay experience might be like depending on your decisions. A Paragon player is going to have more opportunities to talk their way out of situations, minimize conflicts, and save lives--for better or for worse, as those choices might come back to haunt you later. Similarly, Renegade players are going to more often forego talking in favor of force, which is going to bring you into more straight fights--and could alter how the story flows when certain characters aren't around to show up later. What kind of Mass Effect experience and story you want to experience is up to you.</p><Check>While we're here suggesting you stick to Paragon or Renegade (perhaps against your better judgment in the moment), it is worth noting that the Mass Effect trilogy does some great things with nuance. Sometimes, a situation will play out in an interesting way if you go against the grain with your choices and follow your gut. There's even a you can only get with certain gray area choices. But as mentioned, you'll get the best experience with a strong moral compass (one way or the other) and the extra options it unlocks; trust us. Save the experiments for your second run. Check out the rest of our Mass Effect: Legendary Edition guides and coverage, Mass Effect: Legendary Edition Guides &amp; News. Mass Effect: Legendary Edition Guides, Tips, And Tricks Roundup. Mass Effect: Legendary Edition Guide - Essential Tips For First-Timers. Mass Effect: Legendary Edition - Everything Returning Players Should Know`,
    authors : 'Phil Hornshaw',
    publish_date : '2021-05-14 05:26:00'
},

{
    deck : `Heres our trophy and achievements guide for Mass Effect: Legendary Edition.`,
    title : 'Mass Effect: Legendary Edition Trophy Guide - Full Achievement List',
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1552/15524586/3831014-307-mass-effect-legendary-edition-screenshot-1-1609391340.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1552/15524586/3831014-307-mass-effect-legendary-edition-screenshot-1-1609391340.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1552/15524586/3831014-307-mass-effect-legendary-edition-screenshot-1-1609391340.jpg'
    },
    body : `One of the most memorable features of the series has always been its morality system, which splits between the Paragon and Renegade options. Choice is a huge part of the Mass Effect series, as they are role-playing games, and that's true in Mass Effect: Legendary Edition as well. If you're new to the series, though, you might not realize exactly how the morality system works. It toggles between two extremes: Paragon, a conversation-centric, merciful approach, and Renegade, a down-to-business, confrontational approach. And while it can be fun to change how your Commander Shepard approaches problems on a case-by-case basis, we've got some advice for you: Pick Paragon or Renegade and stick with it. Your status as either Paragon or Renegade is determined by your choices throughout the game, whether it's in dialogue with other characters or in how you choose to resolve conflicts and solve problems. In dialogue, Paragon choices are always on the top of the dialogue wheel, while Renegade choices are always on the bottom. As mentioned, these aren't so much "good" or "bad"; more like "diplomatic" and "expedient." The Paragon works with other people to try to make everyone happy, while the Renegade gets the job done no matter whose feathers it might ruffle.</p><>As you make Paragon or Renegade choices, you'll earn points for each side, which are tracked on the Squad screen for your character in all three games. It's fully possible to collect both Paragon and Renegade points throughout the game, allowing what seems best in the moment to dictate how you talk with people or wrap up problems. However, there are a lot of things in the Mass Effect games that are dependent on you either being very Paragon or very Renegade. Often, it doesn't matter <em>which</em> of the two extremes you hit, as long as you hit <em>one</em> of them. Being fully Paragon or fully Renegade (or at least pretty close) often opens up extra dialogue options and other content in the game. It really does pay to commit to a certain approach, at least for one playthrough. If you don't commit hard enough to Paragon or Renegade, you might miss out on certain story beats and options that can have devastating, wide-reaching effects on the story as it progresses. Without spoiling anything, for certain conflicts in the first Mass Effect, being hard Paragon or Renegade gives you access to important solutions; your choices during these moments can change all three games drastically. Trust us when we say you're going to want those opportunities, and you might regret not having them.</><p>So at least for one go through the Mass Effect universe, it's better to be morally black or white, rather than a shade of gray. The options, solutions, missions, and relationships picking one path affords you opens up a lot in the three games you might otherwise miss.</p><p>Which side you choose, however, is up to you, and it's worth keeping in mind what your gameplay experience might be like depending on your decisions. A Paragon player is going to have more opportunities to talk their way out of situations, minimize conflicts, and save lives--for better or for worse, as those choices might come back to haunt you later. Similarly, Renegade players are going to more often forego talking in favor of force, which is going to bring you into more straight fights--and could alter how the story flows when certain characters aren't around to show up later. What kind of Mass Effect experience and story you want to experience is up to you.</p><Check>While we're here suggesting you stick to Paragon or Renegade (perhaps against your better judgment in the moment), it is worth noting that the Mass Effect trilogy does some great things with nuance. Sometimes, a situation will play out in an interesting way if you go against the grain with your choices and follow your gut. There's even a you can only get with certain gray area choices. But as mentioned, you'll get the best experience with a strong moral compass (one way or the other) and the extra options it unlocks; trust us. Save the experiments for your second run. Check out the rest of our Mass Effect: Legendary Edition guides and coverage, Mass Effect: Legendary Edition Guides &amp; News. Mass Effect: Legendary Edition Guides, Tips, And Tricks Roundup. Mass Effect: Legendary Edition Guide - Essential Tips For First-Timers. Mass Effect: Legendary Edition - Everything Returning Players Should Know`,
    authors : 'Matt Espineli,Phil Hornshaw',
    publish_date : '2021-05-14 05:05:00'
},

{
    deck : 'Edge of Tomorrow was a surprise sci-fi hit with fans, but we may not get a repeat of Live, Die, Repeat at this point.',
    title : `Edge of Tomorrow Sequel Doesn't Seem Likely According to Emily Blunt`,
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1603/16030002/3831082-edge-of-tomorrow-emily-blunt.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1603/16030002/3831082-edge-of-tomorrow-emily-blunt.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1603/16030002/3831082-edge-of-tomorrow-emily-blunt.jpg'
    },
    body : `Edge of Tomorrow threw Tom Cruise into an action-packed time loop with Emily Blunt's formidable soldier Rita, and it resonated with fans. Rumors of a sequel have swirled for years since the 2014 film, but it may not be in the cards, Blunt said in a new interview with Entertainment Weekly.

    A sequel was in full-on production in 2019 according to EW, but Blunt said that she doesn't know if a sequel could happen in light of current world conditions. It was far enough along, though, that she even read a script for it.
    
    "That was an amazing script," Blunt said. "But I just don't know what the future holds for it, I did read a script that was in really great shape, but it's just a matter of if that can even happen now. I don't have a straight answer on that one."
    
    Based on a Japanese novel called All You Need is Kill, Edge of Tomorrow cast Cruise as United States Major William Cage, a public relations officer who had never seen combat. Early in the film, he's thrown into battle against aliens alongside Blunt's character, where things quickly break bad. Cage comes into contact with alien blood and gets trapped in a time loop, and he enlists Rita for help over and over to defeat the alien forces and escape the time loop.
    
    Both actors are very busy, and scheduling could become an obstacle, according to Edge of Tomorrow director Doug Liman; Cruise is filming Mission: Impossible 7 and 8, and reuniting with Liman on a movie to be filmed in space, while Emily Blunt is working on a film titled Not Fade Away and a TV series called The English. Cruise's Top Gun: Maverick is set to release on November 21, 2021. Blunt appears next in A Quiet Place II on May 28, 2021 followed by Disney's Jungle Cruise on July 30, 2021.`,
    authors : 'Eric Frederiksen',
    publish_date : '2021-05-14 05:04:00'
},

{
    deck : 'InXile Entertainment responded to a tweet by the official Xbox account and gave hints about its next project.',
    title : `Wasteland 3 Dev's Next Game Seems To Be A FPS RPG`,
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1646/16465123/3831061-inexile.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1646/16465123/3831061-inexile.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1646/16465123/3831061-inexile.jpg'
    },
    body : `InXile Entertainment gave us a hint at what possibly may be the studio's next game. The Xbox Twitter account tweeted out, "What kind of game should I play next?" as an attempt to engage with its audience. However, InXile replied to the tweet, saying "Pulled NEW + FPS + RPG."

    No other information was revealed, but we do know that InXile was looking to fill positions to work on a first-person RPG with Unreal Engine 5 back in January. However, the new bit of information here is that it will be a shooter game.
    
    This project is currently in development, and seems to have started after InXile's acquisition into Xbox Game Studios in 2018. So whatever the studio's new game is, it will most likely be exclusive to devices that support Microsoft's ecosystem such as Xbox and PC.

    InXile Entertainment is known for its more top-down CRPG games like Wasteland 3 and Torment: Tides of Numenera, so the studio going in the direction of a FPS RPG is definitely interesting. As for when we'll see any sort of glimpse of this game publicly, that's up in the air. Microsoft is participating in E3 2021, so there might be a chance that the project will be shown there.'`,
    authors : 'George Yang',
    publish_date : '2021-05-14 03:34:00'
},

{
    deck : `Marvel's Secret Invasion has directors, but we still don't know for sure who's invading who.`,
    title : `Marvel's Secret Invasion Gets Its Directors.`,
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1603/16030002/3771817-talos-skrulls.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1603/16030002/3771817-talos-skrulls.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1603/16030002/3771817-talos-skrulls.jpg'
    },
    body : '',
    authors : 'Eric Frederiksen',
    publish_date : '2021-05-14 03:32:00'
},

{
    deck : 'The latest wave of bans took down 30,000 malicious accounts in Warzone.',
    title : `Call Of Duty: Warzone's Ban Operations Have Now Hit 500,000 Accounts`,
    image : {
        original : 'https://www.gamespot.com/a/uploads/original/1539/15391776/3831025-9852867317-36452.jpg',
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1539/15391776/3831025-9852867317-36452.jpg',
        square_small : 'https://www.gamespot.com/a/uploads/square_small/1539/15391776/3831025-9852867317-36452.jpg'
    },
    body : `Call of Duty: Warzone has problems with cheaters, fraud, and abuse, as every wildly popular game does. Activision announced that its latest enforcement actions to help get these issues under control have hit 30,000 accounts, bringing the game's lifetime total up to 500,000 banned.

    Hacked accounts running exploits like aim bots and other enhanced aim cheats have been widespread throughout Warzone in recent weeks. As a result, Activision has been actively escalating its efforts to deplatform these cheaters, resulting in the banning of hundreds of thousands of malicious accounts.`,
    authors : 'Alex Newhouse',
    publish_date : '2021-05-14 03:05:00'
},
]

const reviews = [{
    bad : 'Touchscreen controls are clunky and imprecise. Barebones features and limited mode selection severely hurts the experience',
    good : 'Graphics are good, with each player looking like his real-world counterpart. Connecting a controller via Bluetooth alleviates control issues',
    title : 'NBA 2K21 Arcade Edition Review -- Air Ball',
    score : '4.0',
    review_type : 'primary',
    publish_date : '2021-05-14 03:52:00',
    image : {
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/225/2256286/3831060-nba2k21image3.jpeg',
        original : 'https://www.gamespot.com/a/uploads/original/225/2256286/3831060-nba2k21image3.jpeg'
    },
    site_detail_url:'https://www.gamespot.com/reviews/nba-2k21-arcade-edition-review-air-ball/1900-6417676/'
},
{
    bad : 'PvPvE concept seems to be built for stealth, but devolves into loud melee fights. Heists can be completed without stealth|PvP Assassinations lead to jarring sudden deaths, even in big fights. Melee combat feels imprecise and facilitates stun-locking',
    good : `Co-op "heist" gameplay requires and rewards teamwork and communication. Light touch on story doesn’t bog down gameplay`,
    title : 'Hood: Outlaws & Legends Review - Petty Theft',
    score : '5.0',
    review_type : 'primary',
    publish_date : '2021-05-12 06:03:02',
    image : {
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/43/434805/3829852-hood_outlaws-legends_main-art_1920x1080_with-logo.jpg',
        original : 'https://www.gamespot.com/a/uploads/original/43/434805/3829852-hood_outlaws-legends_main-art_1920x1080_with-logo.jpg'
    },
    site_detail_url:'https://www.gamespot.com/reviews/hood-outlaws-legends-review-petty-theft/1900-6417675/'
},
{
    bad : `Wrath of the Druids doesn't feel like it naturally fits anywhere into Valhalla's overarching story. Eivor is frustratingly static in her development, and many of the other characters aren't all that likable either|The hunt for the Children of Danu is stripped of what made hunting the Order of Ancients in the main game so interesting|Needing to travel back to Dublin to claim your trading post rewards regularly interrupts the story's flow and can feel like a chore after a while`,
    good : `New abilities open up interesting strategies, both for stealth encounters and all-out combat. Royal demands add an enjoyable challenge on top of side activities, encouraging you to approach combat encounters in new ways`,
    title : `Assassin's Creed Valhalla: Wrath Of The Druids DLC Review`,
    score : '5.0',
    review_type : 'primary',
    publish_date : '2021-05-12 03:00:00',
    image : {
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1587/15875866/3829707-b6dcb974-001c-4538-8e5d-8521af987bd1.png',
        original : 'https://www.gamespot.com/a/uploads/original/1587/15875866/3829707-b6dcb974-001c-4538-8e5d-8521af987bd1.png'
    },
    site_detail_url:'https://www.gamespot.com/reviews/assassins-creed-valhalla-wrath-of-the-druids-dlc-review/1900-6417674/'
},
{
    bad : '31 songs sounds like plenty, but the allure runs out quickly. In rare cases, notes frustratingly do not register when they should have',
    good : `Easy to learn, a game that you can jump right into without a problem. The song list includes some excellent tracks from multiple genres. The special notes add a welcome variety to the tapping`,
    title : 'Taiko No Tatsujin Pop Tap Beat Review -- Drum Solo',
    score : '6.0',
    review_type : 'primary',
    publish_date : '2021-05-06 08:01:00',
    image : {
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/225/2256286/3827344-taiko1.jpg',
        original : 'https://www.gamespot.com/a/uploads/original/225/2256286/3827344-taiko1.jpg'
    },
    site_detail_url:'https://www.gamespot.com/reviews/taiko-no-tatsujin-pop-tap-beat-review-drum-solo/1900-6417673/'
},
{
    bad : 'Last hour or so takes the action in a direction that feels like it belongs in another game. Villains are fun but story connections to the rest of the franchise feel tacked on',
    good : `Updates the best action elements of the Resident Evil franchise, mixing them well with RE7's designs. Does a great job varying pace and changing intensity while always feeling in keeping with the franchise. Combat is tight, fluid, and fun, especially in The Mercenaries. The Beneviento part. Seriously.`,
    title : 'Resident Evil Village Review -- Shapeshifter',
    score : '9.0',
    review_type : 'primary',
    publish_date : '2021-05-05 08:00:00',
    image : {
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/1581/15811374/3826522-resident-evil-village-review.jpg',
        original : 'https://www.gamespot.com/a/uploads/original/1581/15811374/3826522-resident-evil-village-review.jpg'
    },
    site_detail_url:'https://www.gamespot.com/reviews/resident-evil-village-review-shapeshifter/1900-6417672/'
},
{
    bad : `Real-time tactical battles lack the dynamism of modern Total War. Enemy AI is too passive and easy to trick, and its simplistic tactics are dull. Load times between turns and before battles are painfully long`,
    good : 'An updated UI improves readability and presents more relevant information. Enhanced lighting and more detailed terrain add vibrancy to the visuals. Each faction can be unlocked from the start. The Imperial Campaign is still a compelling journey',
    title : 'Total War: Rome Remastered Review -- Et Tu, Total War?',
    score : '6.0',
    review_type : 'primary',
    publish_date : '2021-05-04 10:56:00',
    image : {
        square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/43/434805/3826372-total-war---rome-remastered.jpg',
        original : 'https://www.gamespot.com/a/uploads/original/43/434805/3826372-total-war---rome-remastered.jpg'
    },
    site_detail_url: 'https://www.gamespot.com/reviews/total-war-rome-remastered-review-et-tu-total-war/1900-6417671/'
},
{
   bad: `Some minor control nitpick make combat feel a little sloppy|A few jokes and pop culture nods don’t quite land`,
   good : `A loving Zelda parody that works as a solid action-adventure in its own right|Relentlessly silly script that’s fertile with vegetable puns|Dungeon puzzle design is surprisingly deep and rewarding`,
   title : 'Turnip Boy Commits Tax Evasion Review - A Leek to the Past',
   score : '7.0',
   review_type : 'primary',
   publish_date : '2021-04-29 10:21:00',
   image : {
       square_tiny : 'https://www.gamespot.com/a/uploads/square_tiny/43/434805/3824596-turnip-boy-commits-tax-evasion.jpg',
       original : 'https://www.gamespot.com/a/uploads/original/43/434805/3824596-turnip-boy-commits-tax-evasion.jpg'
   },
   site_detail_url:'https://www.gamespot.com/reviews/turnip-boy-commits-tax-evasion-review-a-leek-to-the-past/1900-6417670/'
},
{
    bad: `Overabundance of projectiles from you and your opponents can make it hard to keep track of what's coming and going|Success on any given run depends, in part, on what upgrades the game randomly puts in front of you`,
    good : `Mysterious story teases you with progress and spurs your journey forward|Scary cutscenes and spooky ambiance grab your attention and never let go|Tight platforming and shooting meets challenging randomized encounters that always feel fresh, even when they aren't|Innovative use of PS5 tech, including DualSense haptics and Tempest 3D sound, creates a visceral awareness of the world, which enhances ambient storytelling and gameplay`,
    title : `Returnal Review - Live Die Repeat`,
    score : `9.0`,
    review_type : `primary`,
    publish_date : `2021-04-29 05:00:00`,
    image : {
        square_tiny: `https://www.gamespot.com/a/uploads/square_tiny/43/434805/3824096-returnal-review.jpg`,
        original : `https://www.gamespot.com/a/uploads/original/43/434805/3824096-returnal-review.jpg`,
    },
    site_detail_url : `https://www.gamespot.com/reviews/returnal-review-live-die-repeat/1900-6417669/`
}
]

    const fetchGames = async () => {
        try{
        const res = await fetch(`http://www.gamespot.com/api/image_galleries?format=json&limit=6&filter=publish_date:2021-01-01|2021-05-14&sort=publish_date:desc&api_key=${gamespotAPI}`, {signal : signal})
        const data = await res.json()
        setimages(data.results)
        console.log(images, data)
        }
        catch(error){
            console.log(error)
        }
    }

    const fetchArticles = async () => {
        try{
            const res = await fetch(`http://www.gamespot.com/api/articles?format=json&limit=8&filter=publish_date:2021-01-01|2021-05-14&sort=publish_date:desc&api_key=${gamespotAPI}`, {signal : signal})
            const data = await res.json()
            setarticles(data.results)
            console.log(articles, data)
        } 
        catch(err){
            console.log(err)
        }
    }

    const fetchReviews = async () => {
        try{
            const res = await fetch(`http://www.gamespot.com/api/reviews?format=json&limit=8&filter=publish_date:2021-01-01|2021-05-14&sort=publish_date:desc&api_key=${gamespotAPI}`, {signal : signal})
            const data = await res.json()
            setreviews(data.results)
            console.log(data.results)
        }
        catch(err){
            console.log(err)
        }
    }

    const getToday = () => {
        let today = new Date()
        let day = String(today.getUTCDate())
        let month = String(today.getUTCMonth()+1)
        let year = String(today.getUTCFullYear())
        let prevYear = String(today.getUTCFullYear()-1)
        let currentDate = `${year}-${month}-${day}`
        let previousDate = `${prevYear}-${month}-${day}`
        setdate(currentDate)
        setlastYear(previousDate)
    }

    useEffect(() => {
        getToday()
       /* fetchGames()*/
       /* fetchArticles() */
     /*   fetchReviews()*/
        return () => {
            ac.abort()
        }
    }, [])

    return (
        <div className='gamesHub' style ={{ display : 'grid', gridTemplateColumns: '1fr', width: '100%', overflowY : 'scroll'}}>
            <div className="cover">
                <div className="leftCover">
                    {
                         images?.map((img, i) => (
                            i<1 &&
                            <>
                            <div className='fimage'><img src={img.image.original} alt="" height="410px" width="770px"/></div>
                            <div className="overlay"></div>
                            <div className="headline"><h3>{img.title}</h3></div>
                            </>
                         ))
                    }
                </div>
                <div className="rightCover">
                    {
                        images?.map((img, i) => (
                            i===1 &&
                            <>
                            <img src={img.image.original} alt="" height="410px" width="520px" />
                            <div className="rightOverlay"></div>
                            <div style={{transform: "translateX(-5%)", width : "40%"}} className="headline"><h3>{img.title}</h3></div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className="fourImage">
                {
                    images?.map((img, i) => (
                        i>1 &&
                        <img src={img.image.original} alt = "" height = "200px" width = "300px" />
                    ))
                }
            </div>
            
            <div className="tabName" style = {{display : 'grid', marginTop : "25px", gridTemplateColumns: '2fr 1fr', alignItems: 'center', width : "100%", height : "70px", color: "var(--primary"}}>
                <h3 style = {{paddingLeft: "65px", fontSize : "1.4em"}}>News</h3>
                <h3 style = {{fontSize : "1.4em"}}>Reviews</h3>
            </div>
           
            <div className="artsReview" style={{display:'grid', gridTemplateColumns: '2fr 1fr'}}>
                <div className="articles">
                    {
                    articles?.map(arts => (
                        arts.deck.length < 200 &&
                        <NavLink exact to='/news' className= "article" onClick = {() => grabNews(arts)}>
                            <img src={arts.image.square_tiny} alt=""height = '140px' width = '190px'/>
                            <div className="infos">
                                <h3>{arts.title}</h3>
                                <p>{arts.deck}</p>
                            </div>
                        </NavLink>
                    ))
                    }
                </div>
                <div className="reviews">
                    {
                    reviews?.map(rev => (
                        <NavLink exact to = '/score' className="rev" onClick = {() => getScore(rev)}>
                            <img src={rev.image.square_tiny} alt="" height='100px' width = '130px' />
                            <div className="desc">
                                <h3>{rev.title}</h3>
                                <p>{rev.publish_date}</p>
                            </div>
                            <div className="score" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'scale(1.2)'}}>
                                <h5 style = {{color : 'var(--primary)', marginBottom: '5px'}}>Score</h5>
                                <h4 className= {rev.score < 4 ? "red scoreCircle" : rev.score < 7 ? "yellow scoreCircle" : "green scoreCircle"}>{rev.score}</h4>
                            </div>
                        </NavLink>
                    ))
             

                    }
                </div>
            </div>
        </div>
    )
}

export default Tweets
