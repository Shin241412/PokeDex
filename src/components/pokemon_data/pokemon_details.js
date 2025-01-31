export
    const type_charts = {
        'normal': {
            'normal': 1,
            'fighting': 2,
            'flying': 1,
            'poison': 1,
            'ground': 1,
            'rock': 1,
            'bug': 1,
            'ghost': 0,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 1,
            'ice': 1,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'fighting': {
            'normal': 1,
            'fighting': 1,
            'flying': 2,
            'poison': 1,
            'ground': 1,
            'rock': 0.5,
            'bug': 0.5,
            'ghost': 1,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 2,
            'ice': 1,
            'dragon': 1,
            'dark': 0.5,
            'fairy': 2,
        },
        'flying': {
            'normal': 1,
            'fighting': 0.5,
            'flying': 1,
            'poison': 1,
            'ground': 0,
            'rock': 2,
            'bug': 0.5,
            'ghost': 1,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 0.5,
            'electric': 2,
            'psychic': 1,
            'ice': 2,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'poison': {
            'normal': 1,
            'fighting': 0.5,
            'flying': 1,
            'poison': 0.5,
            'ground': 2,
            'rock': 1,
            'bug': 0.5,
            'ghost': 1,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 0.5,
            'electric': 1,
            'psychic': 2,
            'ice': 1,
            'dragon': 1,
            'dark': 1,
            'fairy': 0.5,
        },
        'ground': {
            'normal': 1,
            'fighting': 1,
            'flying': 1,
            'poison': 0.5,
            'ground': 1,
            'rock': 0.5,
            'bug': 1,
            'ghost': 1,
            'steel': 1,
            'fire': 1,
            'water': 2,
            'grass': 2,
            'electric': 0,
            'psychic': 1,
            'ice': 2,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'rock': {
            'normal': 0.5,
            'fighting': 2,
            'flying': 0.5,
            'poison': 0.5,
            'ground': 2,
            'rock': 1,
            'bug': 1,
            'ghost': 1,
            'steel': 2,
            'fire': 0.5,
            'water': 2,
            'grass': 2,
            'electric': 1,
            'psychic': 1,
            'ice': 1,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'bug': {
            'normal': 1,
            'fighting': 0.5,
            'flying': 2,
            'poison': 1,
            'ground': 0.5,
            'rock': 2,
            'bug': 1,
            'ghost': 1,
            'steel': 1,
            'fire': 2,
            'water': 1,
            'grass': 0.5,
            'electric': 1,
            'psychic': 1,
            'ice': 1,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'ghost': {
            'normal': 0,
            'fighting': 0,
            'flying': 1,
            'poison': 0.5,
            'ground': 1,
            'rock': 1,
            'bug': 0.5,
            'ghost': 2,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 1,
            'ice': 1,
            'dragon': 1,
            'dark': 2,
            'fairy': 1,
        },
        'steel': {
            'normal': 0.5,
            'fighting': 2,
            'flying': 0.5,
            'poison': 0,
            'ground': 2,
            'rock': 0.5,
            'bug': 0.5,
            'ghost': 1,
            'steel': 0.5,
            'fire': 2,
            'water': 1,
            'grass': 0.5,
            'electric': 1,
            'psychic': 0.5,
            'ice': 0.5,
            'dragon': 0.5,
            'dark': 1,
            'fairy': 0.5,
        },
        'fire': {
            'normal': 1,
            'fighting': 1,
            'flying': 1,
            'poison': 1,
            'ground': 2,
            'rock': 2,
            'bug': 0.5,
            'ghost': 1,
            'steel': 0.5,
            'fire': 0.5,
            'water': 2,
            'grass': 0.5,
            'electric': 1,
            'psychic': 1,
            'ice': 0.5,
            'dragon': 1,
            'dark': 1,
            'fairy': 0.5,
        },
        'water': {
            'normal': 1,
            'fighting': 1,
            'flying': 1,
            'poison': 1,
            'ground': 1,
            'rock': 1,
            'bug': 1,
            'ghost': 1,
            'steel': 0.5,
            'fire': 0.5,
            'water': 0.5,
            'grass': 2,
            'electric': 2,
            'psychic': 1,
            'ice': 0.5,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'grass': {
            'normal': 1,
            'fighting': 1,
            'flying': 2,
            'poison': 2,
            'ground': 0.5,
            'rock': 1,
            'bug': 2,
            'ghost': 1,
            'steel': 1,
            'fire': 2,
            'water': 0.5,
            'grass': 0.5,
            'electric': 0.5,
            'psychic': 1,
            'ice': 2,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'electric': {
            'normal': 1,
            'fighting': 1,
            'flying': 0.5,
            'poison': 1,
            'ground': 2,
            'rock': 1,
            'bug': 1,
            'ghost': 1,
            'steel': 0.5,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 0.5,
            'psychic': 1,
            'ice': 1,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'psychic': {
            'normal': 1,
            'fighting': 0.5,
            'flying': 1,
            'poison': 1,
            'ground': 1,
            'rock': 1,
            'bug': 2,
            'ghost': 2,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 0.5,
            'ice': 1,
            'dragon': 1,
            'dark': 2,
            'fairy': 1,
        },
        'ice': {
            'normal': 1,
            'fighting': 2,
            'flying': 1,
            'poison': 1,
            'ground': 1,
            'rock': 2,
            'bug': 1,
            'ghost': 1,
            'steel': 2,
            'fire': 2,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 1,
            'ice': 0.5,
            'dragon': 1,
            'dark': 1,
            'fairy': 1,
        },
        'dragon': {
            'normal': 1,
            'fighting': 1,
            'flying': 1,
            'poison': 1,
            'ground': 1,
            'rock': 1,
            'bug': 1,
            'ghost': 1,
            'steel': 1,
            'fire': 0.5,
            'water': 0.5,
            'grass': 0.5,
            'electric': 0.5,
            'psychic': 1,
            'ice': 2,
            'dragon': 2,
            'dark': 1,
            'fairy': 2,
        },
        'dark': {
            'normal': 1,
            'fighting': 2,
            'flying': 1,
            'poison': 1,
            'ground': 1,
            'rock': 1,
            'bug': 2,
            'ghost': 0.5,
            'steel': 1,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 0,
            'ice': 1,
            'dragon': 1,
            'dark': 0.5,
            'fairy': 2,
        },
        'fairy': {
            'normal': 1,
            'fighting': 0.5,
            'flying': 1,
            'poison': 2,
            'ground': 1,
            'rock': 1,
            'bug': 0.5,
            'ghost': 1,
            'steel': 2,
            'fire': 1,
            'water': 1,
            'grass': 1,
            'electric': 1,
            'psychic': 1,
            'ice': 1,
            'dragon': 0,
            'dark': 0.5,
            'fairy': 1,
        }
    }


export 
    const type_color = {
        normal: '#a8a878',
        fire: '#f08030',
        water: '#698fea',
        grass: '#78c850',
        electric: '#f8d030',
        ice: '#98d8d8',
        fighting: '#c03028',
        poison: '#a040a0',
        ground: '#e0c068',
        flying: '#a890f0',
        psychic: '#f85888',
        bug: '#a8b820',
        rock: '#b8a038',
        ghost: '#705898',
        dark: '#705848',
        dragon: '#7038f8',
        steel: '#bdbdce',
        fairy: '#f0b6bc'
    }; 


export 
    const pokemon_name = [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Charizard",
        "Squirtle",
        "Wartortle",
        "Blastoise",
        "Caterpie",
        "Metapod",
        "Butterfree",
        "Weedle",
        "Kakuna",
        "Beedrill",
        "Pidgey",
        "Pidgeotto",
        "Pidgeot",
        "Rattata",
        "Raticate",
        "Spearow",
        "Fearow",
        "Ekans",
        "Arbok",
        "Pikachu",
        "Raichu",
        "Sandshrew",
        "Sandslash",
        "Nidoran-F",
        "Nidorina",
        "Nidoqueen",
        "Nidoran-M",
        "Nidorino",
        "Nidoking",
        "Clefairy",
        "Clefable",
        "Vulpix",
        "Ninetales",
        "Jigglypuff",
        "Wigglytuff",
        "Zubat",
        "Golbat",
        "Oddish",
        "Gloom",
        "Vileplume",
        "Paras",
        "Parasect",
        "Venonat",
        "Venomoth",
        "Diglett",
        "Dugtrio",
        "Meowth",
        "Persian",
        "Psyduck",
        "Golduck",
        "Mankey",
        "Primeape",
        "Growlithe",
        "Arcanine",
        "Poliwag",
        "Poliwhirl",
        "Poliwrath",
        "Abra",
        "Kadabra",
        "Alakazam",
        "Machop",
        "Machoke",
        "Machamp",
        "Bellsprout",
        "Weepinbell",
        "Victreebel",
        "Tentacool",
        "Tentacruel",
        "Geodude",
        "Graveler",
        "Golem",
        "Ponyta",
        "Rapidash",
        "Slowpoke",
        "Slowbro",
        "Magnemite",
        "Magneton",
        "Farfetch’d",
        "Doduo",
        "Dodrio",
        "Seel",
        "Dewgong",
        "Grimer",
        "Muk",
        "Shellder",
        "Cloyster",
        "Gastly",
        "Haunter",
        "Gengar",
        "Onix",
        "Drowzee",
        "Hypno",
        "Krabby",
        "Kingler",
        "Voltorb",
        "Electrode",
        "Exeggcute",
        "Exeggutor",
        "Cubone",
        "Marowak",
        "Hitmonlee",
        "Hitmonchan",
        "Lickitung",
        "Koffing",
        "Weezing",
        "Rhyhorn",
        "Rhydon",
        "Chansey",
        "Tangela",
        "Kangaskhan",
        "Horsea",
        "Seadra",
        "Goldeen",
        "Seaking",
        "Staryu",
        "Starmie",
        "Mr-Mime",
        "Scyther",
        "Jynx",
        "Electabuzz",
        "Magmar",
        "Pinsir",
        "Tauros",
        "Magikarp",
        "Gyarados",
        "Lapras",
        "Ditto",
        "Eevee",
        "Vaporeon",
        "Jolteon",
        "Flareon",
        "Porygon",
        "Omanyte",
        "Omastar",
        "Kabuto",
        "Kabutops",
        "Aerodactyl",
        "Snorlax",
        "Articuno",
        "Zapdos",
        "Moltres",
        "Dratini",
        "Dragonair",
        "Dragonite",
        "Mewtwo",
        "Mew",
        "Chikorita",
        "Bayleef",
        "Meganium",
        "Cyndaquil",
        "Quilava",
        "Typhlosion",
        "Totodile",
        "Croconaw",
        "Feraligatr",
        "Sentret",
        "Furret",
        "Hoothoot",
        "Noctowl",
        "Ledyba",
        "Ledian",
        "Spinarak",
        "Ariados",
        "Crobat",
        "Chinchou",
        "Lanturn",
        "Pichu",
        "Cleffa",
        "Igglybuff",
        "Togepi",
        "Togetic",
        "Natu",
        "Xatu",
        "Mareep",
        "Flaaffy",
        "Ampharos",
        "Bellossom",
        "Marill",
        "Azumarill",
        "Sudowoodo",
        "Politoed",
        "Hoppip",
        "Skiploom",
        "Jumpluff",
        "Aipom",
        "Sunkern",
        "Sunflora",
        "Yanma",
        "Wooper",
        "Quagsire",
        "Espeon",
        "Umbreon",
        "Murkrow",
        "Slowking",
        "Misdreavus",
        "Unown",
        "Wobbuffet",
        "Girafarig",
        "Pineco",
        "Forretress",
        "Dunsparce",
        "Gligar",
        "Steelix",
        "Snubbull",
        "Granbull",
        "Qwilfish",
        "Scizor",
        "Shuckle",
        "Heracross",
        "Sneasel",
        "Teddiursa",
        "Ursaring",
        "Slugma",
        "Magcargo",
        "Swinub",
        "Piloswine",
        "Corsola",
        "Remoraid",
        "Octillery",
        "Delibird",
        "Mantine",
        "Skarmory",
        "Houndour",
        "Houndoom",
        "Kingdra",
        "Phanpy",
        "Donphan",
        "Porygon2",
        "Stantler",
        "Smeargle",
        "Tyrogue",
        "Hitmontop",
        "Smoochum",
        "Elekid",
        "Magby",
        "Miltank",
        "Blissey",
        "Raikou",
        "Entei",
        "Suicune",
        "Larvitar",
        "Pupitar",
        "Tyranitar",
        "Lugia",
        "Ho-Oh",
        "Celebi",
        "Treecko",
        "Grovyle",
        "Sceptile",
        "Torchic",
        "Combusken",
        "Blaziken",
        "Mudkip",
        "Marshtomp",
        "Swampert",
        "Poochyena",
        "Mightyena",
        "Zigzagoon",
        "Linoone",
        "Wurmple",
        "Silcoon",
        "Beautifly",
        "Cascoon",
        "Dustox",
        "Lotad",
        "Lombre",
        "Ludicolo",
        "Seedot",
        "Nuzleaf",
        "Shiftry",
        "Taillow",
        "Swellow",
        "Wingull",
        "Pelipper",
        "Ralts",
        "Kirlia",
        "Gardevoir",
        "Surskit",
        "Masquerain",
        "Shroomish",
        "Breloom",
        "Slakoth",
        "Vigoroth",
        "Slaking",
        "Nincada",
        "Ninjask",
        "Shedinja",
        "Whismur",
        "Loudred",
        "Exploud",
        "Makuhita",
        "Hariyama",
        "Azurill",
        "Nosepass",
        "Skitty",
        "Delcatty",
        "Sableye",
        "Mawile",
        "Aron",
        "Lairon",
        "Aggron",
        "Meditite",
        "Medicham",
        "Electrike",
        "Manectric",
        "Plusle",
        "Minun",
        "Volbeat",
        "Illumise",
        "Roselia",
        "Gulpin",
        "Swalot",
        "Carvanha",
        "Sharpedo",
        "Wailmer",
        "Wailord",
        "Numel",
        "Camerupt",
        "Torkoal",
        "Spoink",
        "Grumpig",
        "Spinda",
        "Trapinch",
        "Vibrava",
        "Flygon",
        "Cacnea",
        "Cacturne",
        "Swablu",
        "Altaria",
        "Zangoose",
        "Seviper",
        "Lunatone",
        "Solrock",
        "Barboach",
        "Whiscash",
        "Corphish",
        "Crawdaunt",
        "Baltoy",
        "Claydol",
        "Lileep",
        "Cradily",
        "Anorith",
        "Armaldo",
        "Feebas",
        "Milotic",
        "Castform",
        "Kecleon",
        "Shuppet",
        "Banette",
        "Duskull",
        "Dusclops",
        "Tropius",
        "Chimecho",
        "Absol",
        "Wynaut",
        "Snorunt",
        "Glalie",
        "Spheal",
        "Sealeo",
        "Walrein",
        "Clamperl",
        "Huntail",
        "Gorebyss",
        "Relicanth",
        "Luvdisc",
        "Bagon",
        "Shelgon",
        "Salamence",
        "Beldum",
        "Metang",
        "Metagross",
        "Regirock",
        "Regice",
        "Registeel",
        "Latias",
        "Latios",
        "Kyogre",
        "Groudon",
        "Rayquaza",
        "Jirachi",
        "Deoxys",
        "Turtwig",
        "Grotle",
        "Torterra",
        "Chimchar",
        "Monferno",
        "Infernape",
        "Piplup",
        "Prinplup",
        "Empoleon",
        "Starly",
        "Staravia",
        "Staraptor",
        "Bidoof",
        "Bibarel",
        "Kricketot",
        "Kricketune",
        "Shinx",
        "Luxio",
        "Luxray",
        "Budew",
        "Roserade",
        "Cranidos",
        "Rampardos",
        "Shieldon",
        "Bastiodon",
        "Burmy",
        "Wormadam",
        "Mothim",
        "Combee",
        "Vespiquen",
        "Pachirisu",
        "Buizel",
        "Floatzel",
        "Cherubi",
        "Cherrim",
        "Shellos",
        "Gastrodon",
        "Ambipom",
        "Drifloon",
        "Drifblim",
        "Buneary",
        "Lopunny",
        "Mismagius",
        "Honchkrow",
        "Glameow",
        "Purugly",
        "Chingling",
        "Stunky",
        "Skuntank",
        "Bronzor",
        "Bronzong",
        "Bonsly",
        "Mime-Jr",
        "Happiny",
        "Chatot",
        "Spiritomb",
        "Gible",
        "Gabite",
        "Garchomp",
        "Munchlax",
        "Riolu",
        "Lucario",
        "Hippopotas",
        "Hippowdon",
        "Skorupi",
        "Drapion",
        "Croagunk",
        "Toxicroak",
        "Carnivine",
        "Finneon",
        "Lumineon",
        "Mantyke",
        "Snover",
        "Abomasnow",
        "Weavile",
        "Magnezone",
        "Lickilicky",
        "Rhyperior",
        "Tangrowth",
        "Electivire",
        "Magmortar",
        "Togekiss",
        "Yanmega",
        "Leafeon",
        "Glaceon",
        "Gliscor",
        "Mamoswine",
        "Porygon-Z",
        "Gallade",
        "Probopass",
        "Dusknoir",
        "Froslass",
        "Rotom",
        "Uxie",
        "Mesprit",
        "Azelf",
        "Dialga",
        "Palkia",
        "Heatran",
        "Regigigas",
        "Giratina",
        "Cresselia",
        "Phione",
        "Manaphy",
        "Darkrai",
        "Shaymin",
        "Arceus",
        "Victini",
        "Snivy",
        "Servine",
        "Serperior",
        "Tepig",
        "Pignite",
        "Emboar",
        "Oshawott",
        "Dewott",
        "Samurott",
        "Patrat",
        "Watchog",
        "Lillipup",
        "Herdier",
        "Stoutland",
        "Purrloin",
        "Liepard",
        "Pansage",
        "Simisage",
        "Pansear",
        "Simisear",
        "Panpour",
        "Simipour",
        "Munna",
        "Musharna",
        "Pidove",
        "Tranquill",
        "Unfezant",
        "Blitzle",
        "Zebstrika",
        "Roggenrola",
        "Boldore",
        "Gigalith",
        "Woobat",
        "Swoobat",
        "Drilbur",
        "Excadrill",
        "Audino",
        "Timburr",
        "Gurdurr",
        "Conkeldurr",
        "Tympole",
        "Palpitoad",
        "Seismitoad",
        "Throh",
        "Sawk",
        "Sewaddle",
        "Swadloon",
        "Leavanny",
        "Venipede",
        "Whirlipede",
        "Scolipede",
        "Cottonee",
        "Whimsicott",
        "Petilil",
        "Lilligant",
        "Basculin",
        "Sandile",
        "Krokorok",
        "Krookodile",
        "Darumaka",
        "Darmanitan",
        "Maractus",
        "Dwebble",
        "Crustle",
        "Scraggy",
        "Scrafty",
        "Sigilyph",
        "Yamask",
        "Cofagrigus",
        "Tirtouga",
        "Carracosta",
        "Archen",
        "Archeops",
        "Trubbish",
        "Garbodor",
        "Zorua",
        "Zoroark",
        "Minccino",
        "Cinccino",
        "Gothita",
        "Gothorita",
        "Gothitelle",
        "Solosis",
        "Duosion",
        "Reuniclus",
        "Ducklett",
        "Swanna",
        "Vanillite",
        "Vanillish",
        "Vanilluxe",
        "Deerling",
        "Sawsbuck",
        "Emolga",
        "Karrablast",
        "Escavalier",
        "Foongus",
        "Amoonguss",
        "Frillish",
        "Jellicent",
        "Alomomola",
        "Joltik",
        "Galvantula",
        "Ferroseed",
        "Ferrothorn",
        "Klink",
        "Klang",
        "Klinklang",
        "Tynamo",
        "Eelektrik",
        "Eelektross",
        "Elgyem",
        "Beheeyem",
        "Litwick",
        "Lampent",
        "Chandelure",
        "Axew",
        "Fraxure",
        "Haxorus",
        "Cubchoo",
        "Beartic",
        "Cryogonal",
        "Shelmet",
        "Accelgor",
        "Stunfisk",
        "Mienfoo",
        "Mienshao",
        "Druddigon",
        "Golett",
        "Golurk",
        "Pawniard",
        "Bisharp",
        "Bouffalant",
        "Rufflet",
        "Braviary",
        "Vullaby",
        "Mandibuzz",
        "Heatmor",
        "Durant",
        "Deino",
        "Zweilous",
        "Hydreigon",
        "Larvesta",
        "Volcarona",
        "Cobalion",
        "Terrakion",
        "Virizion",
        "Tornadus",
        "Thundurus",
        "Reshiram",
        "Zekrom",
        "Landorus",
        "Kyurem",
        "Keldeo",
        "Meloetta",
        "Genesect",
        "Chespin",
        "Quilladin",
        "Chesnaught",
        "Fennekin",
        "Braixen",
        "Delphox",
        "Froakie",
        "Frogadier",
        "Greninja",
        "Bunnelby",
        "Diggersby",
        "Fletchling",
        "Fletchinder",
        "Talonflame",
        "Scatterbug",
        "Spewpa",
        "Vivillon",
        "Litleo",
        "Pyroar",
        "Flabebe",
        "Floette",
        "Florges",
        "Skiddo",
        "Gogoat",
        "Pancham",
        "Pangoro",
        "Furfrou",
        "Espurr",
        "Meowstic",
        "Honedge",
        "Doublade",
        "Aegislash",
        "Spritzee",
        "Aromatisse",
        "Swirlix",
        "Slurpuff",
        "Inkay",
        "Malamar",
        "Binacle",
        "Barbaracle",
        "Skrelp",
        "Dragalge",
        "Clauncher",
        "Clawitzer",
        "Helioptile",
        "Heliolisk",
        "Tyrunt",
        "Tyrantrum",
        "Amaura",
        "Aurorus",
        "Sylveon",
        "Hawlucha",
        "Dedenne",
        "Carbink",
        "Goomy",
        "Sliggoo",
        "Goodra",
        "Klefki",
        "Phantump",
        "Trevenant",
        "Pumpkaboo",
        "Gourgeist",
        "Bergmite",
        "Avalugg",
        "Noibat",
        "Noivern",
        "Xerneas",
        "Yveltal",
        "Zygarde",
        "Diancie",
        "Hoopa",
        "Volcanion",
        "Rowlet",
        "Dartrix",
        "Decidueye",
        "Litten",
        "Torracat",
        "Incineroar",
        "Popplio",
        "Brionne",
        "Primarina",
        "Pikipek",
        "Trumbeak",
        "Toucannon",
        "Yungoos",
        "Gumshoos",
        "Grubbin",
        "Charjabug",
        "Vikavolt",
        "Crabrawler",
        "Crabominable",
        "Oricorio",
        "Cutiefly",
        "Ribombee",
        "Rockruff",
        "Lycanroc",
        "Wishiwashi",
        "Mareanie",
        "Toxapex",
        "Mudbray",
        "Mudsdale",
        "Dewpider",
        "Araquanid",
        "Fomantis",
        "Lurantis",
        "Morelull",
        "Shiinotic",
        "Salandit",
        "Salazzle",
        "Stufful",
        "Bewear",
        "Bounsweet",
        "Steenee",
        "Tsareena",
        "Comfey",
        "Oranguru",
        "Passimian",
        "Wimpod",
        "Golisopod",
        "Sandygast",
        "Palossand",
        "Pyukumuku",
        "Type-Null",
        "Silvally",
        "Minior",
        "Komala",
        "Turtonator",
        "Togedemaru",
        "Mimikyu",
        "Bruxish",
        "Drampa",
        "Dhelmise",
        "Jangmo-o",
        "Hakamo-o",
        "Kommo-o",
        "Tapu Koko",
        "Tapu Lele",
        "Tapu Bulu",
        "Tapu Fini",
        "Cosmog",
        "Cosmoem",
        "Solgaleo",
        "Lunala",
        "Nihilego",
        "Buzzwole",
        "Pheromosa",
        "Xurkitree",
        "Celesteela",
        "Kartana",
        "Guzzlord",
        "Necrozma",
        "Magearna",
        "Marshadow",
        "Poipole",
        "Naganadel",
        "Stakataka",
        "Blacephalon",
        "Zeraora",
        "Meltan",
        "Melmetal",
        "Grookey",
        "Thwackey",
        "Rillaboom",
        "Scorbunny",
        "Raboot",
        "Cinderace",
        "Sobble",
        "Drizzile",
        "Inteleon",
        "Blipbug",
        "Dottler",
        "Orbeetle",
        "Rookidee",
        "Corvisquire",
        "Corviknight",
        "Skwovet",
        "Greedent",
        "Nickit",
        "Thievul",
        "Obstagoon",
        "Wooloo",
        "Dubwool",
        "Chewtle",
        "Drednaw",
        "Yamper",
        "Boltund",
        "Gossifleur",
        "Eldegoss",
        "Sizzlipede",
        "Centiskorch",
        "Rolycoly",
        "Carkol",
        "Coalossal",
        "Arrokuda",
        "Barraskewda",
        "Perrserker",
        "Milcery",
        "Alcremie",
        "Applin",
        "Flapple",
        "Appletun",
        "Sirfetch'd",
        "Cursola",
        "Impidimp",
        "Morgrem",
        "Grimmsnarl",
        "Hatenna",
        "Hattrem",
        "Hatterene",
        "Cufant",
        "Copperajah",
        "Cramorant",
        "Toxel",
        "Toxtricity",
        "Silicobra",
        "Sandaconda",
        "Runerigus",
        "Sinistea",
        "Polteageist",
        "Indeedee",
        "Morpeko",
        "Falinks",
        "Snom",
        "Frosmoth",
        "Clobbopus",
        "Grapploct",
        "Pincurchin",
        "Mr-Rime",
        "Stonjourner",
        "Eiscue",
        "Duraludon",
        "Dracozolt",
        "Arctozolt",
        "Dracovish",
        "Arctovish",
        "Dreepy",
        "Drakloak",
        "Dragapult",
        "Zacian",
        "Zamazenta",
        "Eternatus",
        "Kubfu",
        "Urshifu",
        "Zarude",
        "Regieleki",
        "Regidrago",
        "Glastrier",
        "Spectrier",
        "Calyrex"
    ]
