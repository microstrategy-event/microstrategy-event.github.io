let namesArr = ["$dollar-Man", "Donovan", "Henry$Money", "Jake", "Michael", "sanchez@fb", "mike2023", "itzMeJohn", "johnny", "Crypto-King", "@crypto_mania","liliard",        "Pablo-", "ZuckerBank", "Gerald4Gold", "Omar", "Blue Wolf", "jason93@fb", "Vitalik_Mask", "jezzy", "Seth1990", "'Lorenzo'", "CASTRO","alejandro", "LBJ23", "SASZUKE", "sanchez", "Karl03", "Crypto-Mania", "$hibaInu", "Dr.Ether", "Gab Watson", "DodgeMoon", "Prince-El", "elon", "Master-G","Jim", "John33", "Brett Wilson", "Nick&Mike",         "Randy", "Steven Likens", "Marc", "thomas02", "Trex", "Rocky", "Bitget@Max", "Jonathan", "Leon", "mankind@47fb", "Adam", "Jake", "user", "Max", "John", "user4", "David", "Luke", "sunnyDay", "Benjamin", "Michael", "coolUser", "Daniel", "Andrew", "awesomeUser7", "Matthew", "Ryan", "starGazer79", "Nicholas", "Joshua", "codingNinja", "William", "Jason", "musicLover04", "Robert", "Kevin", "techGeek321", "Joseph", "Eric", "gameMaster32", "Samuel", "Jacob", "coffeeAddict", "Christopher", "Alex", "bookworm", "Henry", "Elijah", "hikingEnthusiast", "EtherMan", "Brian", "travelBug789", "Nathan", "Aaron", "photographyLover", "Gabriel", "Matthew", "yogaFanatic", "Anthony", "Daniel", "sunsetChaser", "Thomas", "Joshua", "natureLover", "David", "Noah", "movieBuff45", "Ryan", "Ethan", "gamerGuy", "Isaac", "Jason", "musicJunkie", "Charles", "Blake", "codingWizard", "Jack", "Adam", "bitgetLover5", "Owen", "Lucas", "beachBum789", "Cameron", "Dylan", "dogLover", "Zachary", "Christian", "soccerStar1", "Connor", "Matthew", "fashionista", "Gavin", "Tyler", "foodie", "Jonathan", "Colton", "fitnessGuru99", "Jordan", "David", "artisticSoul", "Daniel", "Christopher", "musicMaker", "James", "Dominic", "techWhiz", "cyberPunk23", "ninjaMaster", "guitarHero", "coffeeLover", "webDevWizard", "codeBreaker", "sneakyHacker", "rockstarGamer", "pixelArtist", "mountainExplorer", "adrenalineJunkie", "streetRacer", "coffeeAddict", "cryptoEnthusiast", "gymRat", "photoFanatic", "speedDemon", "musicMaestro", "wanderlust48", "movieBuff32", "codingGenius", "bookWorm", "ironManFan", "coffeeGeek", "naturePhotographer", "skaterDude", "gamingPro24", "TechNerd", "musicLover007", "filmCritic", "codeNinja", "coffeeWizard", "sushiLover", "gamingAddict", "webDesignGuru", "yogaEnthusiast", "pixelArtWizard", "fitnessFreak", "adventureSeeker", "codeMaster", "BinanceCEO", "crypto-AI", "crypto.com", 
"guitarGuru", "coffeeConnoisseur", "photographyPro", "wanderer", "movieGeek", "codingWhiz", "Extraordinaire", "LunaClassic", "Bobby William", "vince", "Alvin Del Rio", "Karl Green", "Bullish Man", "edward", "MVP", "golden fire", "Ca$h-out", "Jack$on", "steven", "leon", "john44", "derrick", "Chriz", "Anthony", "samuel", "ItsMe", "who am I?", "boy2023", "jz", "Mayor", "joshua40", "$GoldFather","hhh", "DJ", 
"brown", "EZrap", "BitGold", "Peter", "aaron", "Jeremy32", "brand G", "LowKey", "luckyGuy", "Mr. Watson", "mr.nobody", "the hitman", "BitriseMan", "the great one", "dragonBrise", "btcGod", "2theMoonGuy", "Green", "Malic", "Ben", "Wager", "Pablo70", "RockMan", "TGT", "xrp-Guy", "Mason", "Henry", "lucky me",
"AntMan", "Money3Maker", "Mr.Pure100%"];

let imagesArr = [];
async function checkImageExists(imagePath) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imagePath;
    });
  }
  
  (async () => {
    for (let i = 1; i <= 600; i++) {
      let imagePath = `assets_CB/comment_profile/m_images/pic${i}.jpeg`;
      let imageExists = await checkImageExists(imagePath);
      imagesArr.push(imageExists ? imagePath : 'assets_CB/comment_profile/unknown-profile.svg');
    }
  })();

let namesArr2 = ["Mitch-Currency", "$amuel_Jana", "Dana", "Jaq$arah", "Jenny", "Michelle", "sandra", "mich27Luna", "Yassie-ETH", "johanBTC", "amanda", "crypto_queen20","dolla$-Queen",         "Paulina", "akira", "GoldAshley", "Olivia", "Lady Micah", "alice", "Brenda White", "jena¥50Mil", "lanie", "Lala", "CHRISTIE", "ashley","puffKirby", "Jen", "Samantha", "Susan100%", "Crazy-Girl^^", "Cassie", "monica", "Teresa Holmes", "lady_marie", "cryptoGal", "michelle08", "lovelyheart", "princess_anna@gm", "Paula", "helen01", "teresa-loy", "lovely-jess", "heart-evan", "saszha", "alona", "Allona", "Nana", "Hana", "girl90", "6Lady", "Gladyz", "Kyla", "laura_think", "starlightWhisperer", "cupcakeConnoisseur", "beachBabe", "sparkleEnthusiast", "nature'sHarmony", "btc-$gurl", "daisy", "sereneSpirit", "vibrantSoul", "harmonySeeker", "glitterGoddess", "Mary-Ann", "Joy", "Stephanie", "Manilyn", "M.Monroe", "Mrs. Lexton", "Dr. Sophia", "Terra_Luna", "Ferry Jam", "crypto-Cake", "Lexy",
"enchantedDreamer", "VelvetGloves", "SunnySmiles", "crystalClear", "rainbow_Dreamer", "Angel:Wings", "moonbeamGlow", "seashell-collector", "dreamy-eyes", "lollipopPrincess", "radiantBeauty", "Gail_Adventurer", "twinkleToes70", "crazy_gal", "giggles&Glam", "enchantedRealm", "sparklingJewels", "Fairy", "lina_crypto", "dazzlingSmiles", "magicalJourney", "frostedPetals", "shimmeringGoddess", "lunaLovegood", "starlitSkies", "belleOfTheBall", "cherryBlossom", "daydreamBeliever", "Jen83", "radiantSunshine", "glossyLips", "WomanWanderer", "Solana", "charmaigne", "opalGlimmer", "auroraBorealis", "blissfulMelody", "scentedPetals", "cosmicWonders", "dreamweaver85", "rosewaterKisses", "Seeker", "velvetElegance", "fairytaleDreamer", "sparklingSerenity", "buttercreamDelight", "stardustWishes", "goldenGurl", "mysticMoonlight", "whimsicalWonderland", "gardenOfEden", "enchantingEssence", "LadyMam", "blissfulBreeze", "sugarAndSpice77", "kitty-pink", "Sexy_Biatch", "azureTwilight", "urDreamGurl", "mistyMornings77", "lavenderHaze", "enigmaticCharm", "celestialAura", "whisperingWillows", "petalSoft", "delicateLace", "etherealGlow9", "velvetWhispers", "dreamcatcherMuse", "moonliteMagic", "honeydewSmiles", "beautySoul", "heart💕dolla$", "mommy_D", "dreamyDesires", "roseQuartz", "seraphicSerenade", "crystalVisions", "enchantedHarmony", "twilightPrincess", "blossomingBeauty", "mysticalMeadows", "moonshadowKiss", "kiss_me75", "OpalineGlimmer", "sunkissedSerenity", "Melody", "woman-in-red",
 // Additional usernames:
 "Emily", "Olivia92", "Ava17", "Ava", "Sophia86", "Isabella55", "Mia28", "Charlotte51", "Amelia", "Alison Harper74", "Evelyn", "Abigail37", "EmilyRose", "Emma79", "Madison45", "Elizabeth28", "Avery65", "Sofia14", "Ella67", "Scarlett41", "Grace1980", "Chloe72", "Victoria33", "Riley", "Aria92", "Lily39", "Aubrey86", "Zoe", "Penelope60", "Layla47", "Nora13", "Camila81", "Brooklyn36", "Hannah98", "Milan24", "Leah", "ZoeGrace", "Stella", "Lillian91", "Ellie27", "Mila73", "Savannah45", "AveryRose", "Samantha", "Charlie71", "Alexa37", "Eva", "ScarlettRose", "Autumn43", "Hailey79", "Sadie58", "Skylar62", "Bella98", "Lucy85", "Genesis22", "Nevaeh49", "Paisley09", "AriaRose", "Audrey", "Ariana34", "Kennedy67", "Alyssa93", "Claire59", "Peyton225", "HarperRose", "Kylie48", "Maya82", "VictoriaRose", "Julia97", "Katherine43", "Sophie37", "Taylor", "LilyGrace", "Eleanor84", "Eliana31", "Brianna78", "Piper52", "PaisleyRose", "Trinity89", "Faith16", "Willow44", "Elena", "Naomi63", "Melanie92", "Zara29", "Arianna37", "London71", "MadisonRose", "Lydia", "Lyrica", "Adeline59", "Natalie82", "Aubree", "Kaylee79", "Mackenzie36", "Liliana", "Lucia54", "Ayla43", "Natalia86", "Arie91", "Finley57", "Everly69", "Adalyn38", "Eloise72", "Sage48", "Josephine", "Noelle61", "Delilah", "Gracie79", "Luna33", "Emery65", "Emilia93", "Maddison55", "EvaRose", "Leilani71", "Arielle42", "Lola", "Georgia74", "Valentina57", "Isla36", "Rachelle", "WillowGrace", "Daniela", "Emerson89", "Lia16", "Generose", "Sophia Williams", "Olivia Johnson", "Emma Smith", "Ava Brown", "Isabella Davis", "Mia Miller", "Charlotte Wilson", "Amelia Anderson", "Harper Taylor", "Evelyn Martinez", "Abigail Anderson", "Emily Rose", "Madison Clark", "Elizabeth Thompson", "Avery Moore", "Sofia Jackson", "Ella Thomas", "Lenny", "Scarlett Rodriguez", "Grace Hill", "Chloe Moore", "Victoria Lewis", "Riley Green", "Aria Carter", "Lily Reed", "Aubrey Phillips", "Zoe Walker", "Penelope Collins", 
 "Layla Morgan", "Nora Rivera", "Camila Mitchell", "Brooklyn Turner", "Hannah Brooks", "Milan Bennett", "Leah Ward", "Zoe Grace", "Stella Turner", "Lillian Hayes", "ripple girl", "barbie-xrp",
 "Ellie Simmons", "Mila Ramirez", "Savannah Barnes", "Avery Rose", "Samantha Cole"
];

let imagesArr2 = [];
async function checkImageExists(imagePath) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imagePath;
    });
  }
  
  (async () => {
    for (let i = 1; i <= 600; i++) {
      let imagePath = `assets_CB/comment_profile/f_images/wom${i}.jpeg`;
      let imageExists = await checkImageExists(imagePath);
      imagesArr2.push(imageExists ? imagePath : 'assets_CB/comment_profile/unknown-profile.svg');
    }
  })();


//Use the Array.fill() method to populate the array with the "tnx! & other" value:
const chatArr = new Array(10).fill("tnx!");
chatArr.push(...new Array(5).fill("awesome!"));
chatArr.push(...new Array(12).fill("tnx"));
chatArr.push(...new Array(6).fill("thanks!"));
chatArr.push(...new Array(6).fill("thanks"));
chatArr.push(...new Array(5).fill("Tnx"));
chatArr.push(...new Array(6).fill("thank you!"));
chatArr.push(...new Array(5).fill("to the moon!!!🚀🌒"));
chatArr.push(...new Array(5).fill("ETH to the moon!!!🚀🚀🚀"));
chatArr.push(...new Array(10).fill("how?"));
chatArr.push(...new Array(5).fill("you can only participate once!!"));
chatArr.push("Never seen anyrhing like that, but lucky it worked! Thanks.", "Got 2.4 BTC THANKS 2 Michael Saylor the former CEO of MicroStrategy", "NEVER DOUBT MICHAEL", "HI!", "I GOT FUCKING 3.7 ETH OMG!", "IM IN!!", "this is insane +2.6 eth on my Wallet🙌", "VERY NICE GUYS", "Recieved 4.4 Eth in my wallet OMG Michel Saylor I LOVE YOU!", "awesome offer can I use it 1 more time? I should've sent more...",
"GOT 1.4 BTC!!👍 Tnx!", "wtf it worked", "May the God be with you.", "I was doubting for a long time if I should send here my 5BTC, but it actually worked for me so I got 2.23 BTC now thanks to Michael Saylor", "OH SHIT IT WORKS!!!!!!!", "thanks for 2.5 BTC😋. fine here!", "OH FUCK I GOT THE RETURN ! THANKS", "Gracias papi", "3.2 BTC added on my trust wallet ^^", "crypto is a bubble...", "3.76 BTC ON MY WALLET! tnx!", "This is going to change my life!", "DAMN! +1.1 BTC & 2.5 ETH just added on my trezor wallet 🤑", "Bitcoin halving when?", "Ethereum project is unstoppable!", "btc halving soon?",
"+2.3 ETH!!🤑", "HERE I AM, GOT 4.5 ETH:) FUCKING INSANE THING!!!!!!", "Michael Saylor WE LOVE YOU!!!", "got 22 bits on my wallet now :)", "You better be fast guys!", "Michael Saylor never dissapoints!!", "+1.200 BTC Back🚀💰", "I sold all by eth a day ago ;(", "GOTTA BUY ABRAND NEW CHEVY!! 18 thousand bucks", "+6.4 ETH🤩 this is... JUST WOW! doubled the amount of my BTC token, from 1.9 ETH to 3.8 ETH", "from 1.6 to 3.2 btc, I'm so happy now :)🍻 cheers!", "GENEROUS PRESENT!", "I was lucky to get my $120,000.", "I CANT IMAGINE WHAT WILL HAPPEN WITH THE PRICE", 
"GOT 4.2 ETH wooo !", "Hell yeah got my 2.5K doubled! ", "wish i hsd more money to send... +1.5 of btc now added on my trust wallet", "ONE TIME OPPORTUNITY ", "+4.22 BTC🥳","OHHHH COME HERE $$$$$$", "Thank you Michael and MicroStrategy! From me and my son.", "Got 1.7 btc right now!", "will this pump the token?, anyway thanks again for this opportunity", "This is a golden opportunity to collect BTC before the price goes above 100K dollar. It must be because BTC is the world's 1st BLOCKCHAIN. Do not be late.", "no doubt this team is doing greatBut when we asked about the questions and things that they have said earlier ,,they blocked me from telegram even from Twitter that's not good behaviour I am not spreading any fud about this Project Alot guys buys this project because of me ,,,,, eth team unblock guys ,,,those who are your holders before the pump", "1.32 ETH added on my wallet :)!!", "it doubled my eth coin big TNX💰🤩", "CHEEERS!🍻🍻", 
"fantastic! I've got 2.72 eth after contributing 1.36 eth 😱", "me got 3.26 ETH after sending 1.63 ETH", "got 0.41 BTC, so happy🥰",
"0.6 BTC IS NOW ON MY WALLET!! THANK YOU!!!", "Surprise! got 0.4 BTC", "this is insane! GOT 1.57 ETH", "Gotcha!, 1.2 BTC added",
"BIG PUMP IS COMING", "Thank you for everything.","WHAAAAAAT??", "added 0.3 BTC!!💶", "got 0.09 BTC, not too much but thank you!", "tnx Michael Saylor X MicroStrategy", "first time to received an airdrop and it's from the BTC millionaire Michael Saylor 🍻 Thank you!!",
"I recieved 1.32 eth as well. This is a fine investment.", "Michael Saylor is the new CRYPTOKING!", "THANKS FOR THE NEW CAR", "Awesome Michael Saylor!", "0.15 bitcoin yeah!", "OH YES!", "gotcha!!", "+0.3 bitcoin, this in unbelievable!", "BTC TO THE MOON🚀🚀🚀", "WOW", "+3.1 ETH!!", "does it doubles the amount you send?", "Ill take mychances", "can I have more?", "I AM HAPPY", "OH YESSS 0.34 BTC", "THANKS!", "plus 2.5 ether 🥳", "HOW IS THIS POSSIBLE?", "Hello everyone!", "WHAT", "MICHAEL IS THE BEST", "thanks", "How?, anyway my friend got 1.3 btc right now, I will try it also, thanks!", "BTC tokens in one slot And Wait 2nd slot after 3 hours",
"PEPE The platform also features smart-contract functionality and is similar to the Ethereum Virtual Machine (EVM), giving it additional flexibility and versatility $BTC #btc $ETH", "XRP fudders seem confused of the green wave but they are not. They know XRP is solid. They just are just doing what they're told. There's still time to get on the bandwagon. XRP to the top💯🔥🔥🔥", "Keep choosing you again and again.🥀", "this is insane", "Trump for President", "wazzzup!!", 
"love from India! 🇮🇳", "thanks for this airdrop of BTC🫥", "ETH and BTC is my favorite token 😍, tnx Michael for this giveaway and microstrategy", "LOVE MICHAEL SAYLOR ❤️❤️❤️", "The best airdrop x2 ever!!!🙌$$$",
"Hello it's me :)", "this is Magic of Michael Saylor", "does anyone know how to convert ETHWRAP token to USDT?", "Bitcoin soon will go down and ETH will take over as #1", "to all who's asking if you can participate again after you already received your bonus, please don't do it cause you can only participate once", "you can only participate once, it's stated in their rules", "join only once, after receiving your bonus, get the hell out of here, let others will get their bonus too", "hello jz, you can only participate once my friend", "watch the live on facebook about this giveaway", "tnx burterin still watching live", "Hurry up guyz it's almost go to zero left on the pool", "hurry!! I want one more time XD it is possible to participate again?", "HOW?", "link?", "OMG!! 0.2 btc and 1.17 eth added on my coinbase wallet 😱, I participate both eth and btc ^^ thanks Michael Saylor!!", "Hello J", "despite the dip, I’m still multiplying my portfolio by participating on this surprise giveaways by Michael Saylor 🫡 He’s truly a genius when it comes to understanding the market and always ready to help others.",
"Michael Saylor I just want to say, Your The Man!", "Better to participate now on this event, it's a good way to double your holdings Do not even sell ! Keep holding your BTC or ETH when the market turns bullish we will hit $5Million on bitcoin and $1Million on ethereum 🚀🚀🚀🌘",
"Now I believe what people say about Michael Saylor is true. He is indeed a man of his words, he have changed many lives positively including mine. Thanks again MR. Saylor for your good works and kindness ❤️🎯 and thanks for this Giveaway Event 🍾",

"How much left??????", "it took a couple of minutes but I got $13,000 ", "ETH 2.0 is the key to success :) believe that!", "that is absolutely insane ^0^", "ありがとうございます😚",
"ETH 2.0 Just hold your bag, we gonna moon together, victory is near", "eth Hodl your position 🚀🚀🚀", "ETH 2.0 is a win win token", "eth2.0 > BTC😁", "where is Elon Musk? founder of BTC?",
"the power of BTC🚀", "Bitcoin is people currency", "#Ether to the SUN!!🚀☀️", "BTC is the to success", "Saylor on firreeEE!!!🔥🔥", "this is surreal, btc 2 the moon!", "tnx Michael Saylor, microstrategy CEO", "MicroStrategy Founder Michael J. Saylor, Thank you for this giveaway 😋",
"this is really amazing, tnx michael saylor for this airdrop event :) and for microstrategy too", "i don't wanna miss this oppurtunity, thanks Michael and MicroStrategy", "love it! thanks MS X Michael Saylor", "tnx Mike! feed me more!",
"can I participate again?", "CAN I JOIN ONE MORE TIME? anyway thanks Michael and his team also Microstrategy, +2 BTC added to my wallet", "can i join again?", "I want more! can I join one more?", "I participate both eth and btc and it's mindblowing!!! 🍻😎",
"the best token Ethereum ^^ 1.25 ETH added to my wallet woooo!!", "tnx Michael Saylor! can I rejoin?", "x2 btc added on my wallet 🤩", "it is possible to participate again after I doubled my btc token? anyway thanks again Michael Saylor", "wow! this is gonna be great, tnx Mr.Saylor", "GitHub is for developers right?", "Well done! great job from MicroStrategy",
"$MicroStrategy and Michael Saylor! Thanks", "Mike! awesome job :) thanks", "make microstrategy token too :)", 
"thanks also for microstrategy", "MicroStrategy X Michael Saylor Awesome Job!", 
"Love Microstrategy X Mike Saylor", "the greatest collab of all time XD!!", "microstrategy x michael saylor ^^ SWEET!!", "is this BTC giveaway?", "Elon is crying now :( Dogecoin will never be the same again!", "SEC will act again 🤪",

"I have a dream, nevermind...", "join us on facebook: ", "​solana is strong and will break all time high. we believe in sol long term", "So who in their right mind would sell their digital assets back into usdollar? not me", "PEPE pumped SO WELL before and still maintaining momentum even as BTC dipped. Great attitude by BTC Main Man Michael Saylor", "SEC will loss soon! Go Ripple!!",

"GitHub is an online software development platform. It's used for storing, tracking, and collaborating on software projects. It makes it easy for developers to share code files and collaborate with fellow developers on open-source projects."


);