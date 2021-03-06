const game = {
  // Generic Game Info
  info: {
    title: "18EU",
    subtitle: "Railraoding in Europe from the 1830's to the 1930's",
    designer: "David G. D. Hecht",
    background: "gray",
    width: 150,
    orientation: "horizontal",
    color_10: "orange",
    titleX: 1340,
    titleY: 1570,
    titleSize: 165,
    subTitleSize: 17,
    extraMinors: 0,
    hexCoords: true,
    currency: "EUR"
  },

  // Extra Tokens
  tokens: ["Round", "#mountain60", "#mountain60", "#mountain60", "#mountain60", "#mountain60", "#mountain60", "#mountain60", "#mountain60",
           "#mountain120", "#mountain120", "#mountain120", "#mountain120", "#mountain120", "#mountain120", "#mountain120", "#mountain120"],

  // Need an IPO sheet
  ipo: false,

  bank: "£12,000",

  players: [
    {
      number: 2,
      certLimit: 28,
      capital: "£750"
    },
    {
      number: 3,
      certLimit: 20,
      capital: "£450"
    },
    {
      number: 4,
      certLimit: 16,
      capital: "£350"
    },
    {
      number: 5,
      certLimit: 13,
      capital: "£300"
    },
    {
      number: 6,
      certLimit: 11,
      capital: "£250"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Belgian National Railways",
      abbrev: "BNR",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "goldenrod",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "Dutch Railways",
      abbrev: "DR",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "yellow",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "Italian State Railways",
      abbrev: "FS",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "green",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "Royal Bavarian State Railroad",
      abbrev: "RBSR",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "cyan",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "Royal Prussian Railway",
      abbrev: "RPR",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "blue",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "Austrial Imperial Royal State",
      abbrev: "AIRS",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "lightYellow",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "SNCF",
      abbrev: "SNCF",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "red",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    },
    {
      name: "German State Railways",
      abbrev: "GSR",
      tokens: ["Free", "Free", "Free", "Free"],
      color: "Black",
      shares: [ { quantity: 1, label: "President Share", percent: 20, shares: 2 }, { quantity: 8, percent: 10, shares: 1 } ]
    }
  ],

  minorCompanies: [
    {
      name: "Chemin de Fer du Nord",
      abbrev: "1",
      tokens: [""],
      color: "white",
    },
    {
      name: "État Belge",
      abbrev: "2",
      tokens: [""],
      color: "white",
    },
    {
      name: "Paris-Lyon-Méditerranée",
      abbrev: "3",
      tokens: [""],
      color: "white",
    },
    {
      name: "Leipzig-Dresdner-Bahn",
      abbrev: "4",
      tokens: [""],
      color: "white",
    },
    {
      name: "Ferrovia Adriatica",
      abbrev: "5",
      tokens: [""],
      color: "white",
    },
    {
      name: "Kaiser-Ferdinand-Nordbahn",
      abbrev: "6",
      tokens: [""],
      color: "white",
    },
    {
      name: "Berlin-Potsdamer-Bahn",
      abbrev: "7",
      tokens: [""],
      color: "white",
    },
    {
      name: "Ungarische Staatsbahn",
      abbrev: "8",
      tokens: [""],
      color: "white",
    },
    {
      name: "Berlin-Stettiner-Bahn",
      abbrev: "9",
      tokens: [""],
      color: "white",
    },
    {
      name: "Strade Ferrate Alta Italia",
      abbrev: "10",
      tokens: [""],
      color: "white",
    },
    {
      name: "Südbahn",
      abbrev: "11",
      tokens: [""],
      color: "white",
    },
    {
      name: "Hollandsche Maatschappij",
      abbrev: "12",
      tokens: [""],
      color: "white",
    },
    {
      name: "Ludwigsbahn",
      abbrev: "13",
      tokens: [""],
      color: "white",
    },
    {
      name: "Ligne Strasbourg-Bâle",
      abbrev: "14",
      tokens: [""],
      color: "white",
    },
    {
      name: "Grand Central",
      abbrev: "15",
      tokens: [""],
      color: "white",
    },
  ],

  trains: [
    {
      name: "2",
      quantity: 15,
      price: "£0",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 5,
      price: "£200",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "P",
      quantity: 5,
      price: "£100",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "£300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 8"
        }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "£500",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "£600",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "8",
      quantity: 8,
      price: "£800",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4/2",
      number: "15",
      tiles: "yellow",
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Pullman's are available after first 3T is puchased. Red to Red £10 bonus per station."
    },
    {
      name: "4",
      rust: "2",
      limit: "3/1",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Final Exchange Round after ORs finish. Red to Red £20 bonus per station."
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
    },
    {
      name: "8",
      limit: "2",
      number: "U",
      rust: "4",
      tiles: "gray",
      notes: "Red to Red £30 bonus per station."
    }
  ],
  minorPhases: [
    {
      name: "2",
      limit: "2",
      number: "15",
      notes: "Two yellow lays first OR, one after"
    },
    {
      name: "3",
      limit: "2",
      number: "5",
      notes: "One yellow lay per OR"
    },
    {
      name: "4",
      limit: "1",
      number: "4",
      notes: "One yellow lay per OR"
    },
    {
      name: "5",
      limit: "1",
      number: "3",
      notes: "Final Exchange Round after ORs finish"
    },
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the bank"
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "yellow",
          icon: "exclamation",
          note: "As long as a company has not operated a Minor can be merged into it for 1 share."
        },
        {
          color: "red",
          icon: "times",
          note: "Shares in a company cannot be sold until that company has operated"
        },
      ]
    }
  ],

  rounds: [
    {
      name: "OR2",
      color: "yellow"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    },
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share OR Merge minor into un-operated Major for 1 share",
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Place a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains",
        "Issue/Redeem shares",
      ],
      ordered: true,
    }
  ],

  stock: {
    type: "2D",
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends at least share value"]
    },
    market: [
      [
        { value: 82, label: 82, arrow: "down" },
        90,
        100,
        110,
        122,
        135,
        150,
        165,
        180,
        200,
        225,
        245,
        270,
        300,
        330,
        360,
        400
      ],
      [
        { value: 75, label: 75, arrow: "down" },
        82,
        90,
        100,
        110,
        122,
        135,
        150,
        165,
        180,
        200,
        225,
        245,
        { value: 270, label: 270, arrow: "up" }
      ],
      [
        { value: 70, label: 70, arrow: "down" },
        75,
        82,
        90,
        { value: 100, label: 100, par: true },
        110,
        122,
        135,
        150,
        165,
        { value: 180, label: 180, arrow: "up" }
      ],
      [
        { value: 65, label: 65, arrow: "down" },
        70,
        75,
        { value: 82, label: 82, par: true },
        { value: 90, label: 90, par: true },
        100,
        110,
        { value: 122, label: 122, arrow: "up" }
      ],
      [
        { value: 60, label: 60, arrow: "down" },
        65,
        { value: 70, label: 70, par: true },
        { value: 75, label: 75, par: true },
        82,
        { value: 90, label: 90, arrow: "up" }
      ],
      [
        { value: 50, label: 50, arrow: "down" },
        60,
        65,
        70,
        { value: 75, label: 75, arrow: "up" }
      ],
      [
        40,
        50,
        60,
        { value: 65, label: 65, arrow: "up" }
      ],
    ],
  },

  tiles: {
    "3": 8,
    "4": 10,
    "7": 4,
    "8": 15,
    "9": 15,
    "14": 4,
    "15": 4,
    "57": 8,
    "58": 14,
    "80": 4,
    "81": 4,
    "82": 4,
    "83": 4,
    "141": 5,
    "142": 4,
    "143": 2,
    "144": 2,
    "145": 4,
    "146": 5,
    "147": 4,
    "201": 7,
    "202": 9,
    "513": 5,
    "544": 3,
    "545": 3,
    "546": 3,
    "576": 4,
    "577": 4,
    "578": 3,
    "579": 3,
    "580": 1,
    "581": 2,
    "582": 9,
    "583": 1,
    "584": 2,
    "611": 8,
  },

  map: {
    hexes: [
      {
        color: "offboard",
        offBoardRevenue: { name: {name: "Bucharest"}, reverse: true,
                           revenues: [ { color: "yellow", cost: "30" }, { color: "brown", cost: "50" } ] },
        offBoardTrack: [ { side: 3 } ],
        hexes: ["N17"]
      },
      {
        color: "offboard",
        offBoardRevenue: { name: {name: "Warsaw"},
                           revenues: [ { color: "yellow", cost: "20" }, { color: "brown", cost: "30" } ] },
        offBoardTrack: [ { side: 2 } ],
        hexes: ["N5"]
      },
      {
        color: "offboard",
        offBoardRevenue: { name: {name: "London" },revenues: [ { color: "yellow", cost: "40" }, { color: "brown", cost: "70" } ] },
        offBoardTrack: [ { side: 1 }, { side: 6 } ],
        hexes: ["A6"]
      },
      {
        color: "offboard",
        offBoardRevenue: { name: {name: "Hamburg"},
                           percent: 0.333, y: -35, revenues: [ { color: "yellow", cost: "30" }, { color: "brown", cost: "50" } ] },
        track: [{ type: "gentle", side: 6 }, {type: "sharp", side: 6}, {type: "sharp", side: 1}],
        hexes: ["G2"]
      },
      {
        color: "offboard",
        offBoardRevenue: { name: {name: "Rome"},
                           reverse: true,
                           revenues: [ { color: "yellow", cost: "30" }, { color: "brown", cost: "50" } ] },
        offBoardTrack: [ { side: 3 }, { side: 4 }, { side: 5 } ],
        hexes: ["G22"]
      },
      {
        color: "water",
        icons: [{ type: "port", y: -15 }],
        offBoardRevenue: { percent: 0.333, y: -10, revenues: [ { color: "yellow", cost: "10" } ] },
        offBoardTrack: [ { side: 1 } ],
        hexes: ["D1"]
      },
      {
        color: "water",
        icons: [{ type: "port", y: 15 }],
        offBoardRevenue: { percent: 0.333, y: -42, revenues: [ { color: "yellow", cost: "10" } ] },
        offBoardTrack: [ { side: 4 } ],
        hexes: ["B21", "E22", "I20"]
      },
      {
        color: "yellow",
        labels: [ { label: "P", angle: 270, percent: 0.667, x: 10 }, { label: "Paris", angle: 140, y: 25, x: 5, percent: 0.5 } ],
        values: [ { angle: 90, percent: 0.84, value: 40 } ],
        cities: [
          { angle: 230, percent: 0.6, x: -10, companies: [ { label: "1", color: "white"} ] },
          { angle: 40, percent: 0.6, x: 50, companies: [ { label: "3", color: "white"} ] },
        ],
        track: [ { type: "sharpStopRev", side: 5 }, { type: "sharpStop", side: 6 } ],
        hexes: ["A10"]
      },
      {
        color: "yellow",
        labels: [ { label: "B", angle: 270 }, { label: "Berlin", angle: 0, y: 25, percent: 0.5 } ],
        values: [ { angle: 180, percent: 0.7, value: 30 } ],
        cities: [
          { angle: 280, percent: 0.7, x: -10, companies: [ { label: "9", color: "white"} ] },
          { angle: 110, percent: 0.55, companies: [ { label: "7", color: "white"} ] },
        ],
        track: [ { type: "sharpStop", side: 5 }, { type: "sharpStop", side: 2 } ],
        hexes: ["J5"]
      },
      {
        color: "yellow",
        labels: [ { label: "V", angle: 270 }, { label: "Vienna", angle: 300, size: "medium", percent: 0.60 } ],
        values: [ { angle: 150, percent: 0.7, value: 30 } ],
        cities: [
          { angle: 230, percent: 0.7, x: -10, companies: [ { label: "6", color: "white"} ] },
          { angle: 45, percent: 0.55, companies: [ { label: "11", color: "white"} ] },
        ],
        track: [ { type: "sharpStop", side: 4 }, { type: "sharpStop", side: 1 } ],
        hexes: ["K14"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Lyon" }, companies: [ { label: "15", color: "white"} ]} ],
        hexes: ["B17"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Marseille" }} ],
        hexes: ["B19"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Brussels" }, companies: [ { label: "2", color: "white"} ]} ],
        borders: [ { side: 1, dashed: "true", color: "gray" },
                   { side: 2, dashed: "true", color: "gray" },
                   { side: 3, dashed: "true", color: "gray" },
                   { side: 4, dashed: "true", color: "gray" },
                   { side: 5, dashed: "true", color: "gray" },
                   { side: 6, dashed: "true", color: "gray" } ],
        hexes: ["C8"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Amsterdam" }, companies: [ { label: "12", color: "white"} ]} ],
        hexes: ["D3"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Cologne" }} ],
        hexes: ["D7"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Strausburg" }, companies: [ { label: "14", color: "white"} ]} ],
        hexes: ["D13"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Turin" }} ],
        hexes: ["D19"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Dortmund" }} ],
        hexes: ["E6"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Milan" }, companies: [ { label: "10", color: "white"} ]} ],
        hexes: ["E18"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Genoa" }} ],
        hexes: ["E20"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Frankfurt" }} ],
        hexes: ["F9"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Munich" }, companies: [ { label: "13", color: "white"} ]} ],
        hexes: ["G12"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Venice" }, companies: [ { label: "5", color: "white"} ]} ],
        hexes: ["H19"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Trieste" }} ],
        hexes: ["I18"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Dresden" }, companies: [ { label: "4", color: "white"} ]} ],
        hexes: ["J7"]
      },
      {
        color: "plain",
        cities: [ { name: { name: "Prague" }} ],
        hexes: ["J11"]
      },
      {
        color: "plain",
        labels: [ { label: "Y", angle: 270, percent: .75 } ],
        cities: [ { name: { name: "Budapest" }, companies: [ { label: "8", color: "white"} ]} ],
        hexes: ["M16"]
      },
      {
        color: "yellow",
        track: [{ side: 2, type: "gentle" }],
        mountain: { cost: "£60", angle: 300, percent: 0.5 },
        labels: [ { label: "Semmering", percent: .7, size: "medium" } ],
        hexes: ["K16"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Lille" } } ],
        hexes: ["B7"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Dijon" } } ],
        hexes: ["B13"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Rotterdam" } } ],
        hexes: ["C4"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Antwerp" } } ],
        hexes: ["C6"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Geneva" } } ],
        hexes: ["C16"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Utrecht" } } ],
        hexes: ["D5"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Basil" } } ],
        hexes: ["D15"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Stuttgart" } } ],
        hexes: ["E12"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Bremen" } } ],
        hexes: ["F3"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Augsburg" } } ],
        hexes: ["F11"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Florence" } } ],
        borders: [ { side: 1, dashed: "true", color: "gray" },
                   { side: 2, dashed: "true", color: "gray" },
                   { side: 3, dashed: "true", color: "gray" },
                   { side: 4, dashed: "true", color: "gray" },
                   { side: 5, dashed: "true", color: "gray" },
                   { side: 6, dashed: "true", color: "gray" } ],
        hexes: ["F21"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Hannover" } } ],
        hexes: ["G6"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Nuremberg" } } ],
        hexes: ["G10"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Bologne" } } ],
        hexes: ["G20"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Magdeburg" } } ],
        hexes: ["H7"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Leipzig" } } ],
        hexes: ["I8"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Stettin" } } ],
        hexes: ["K4"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Brunn" } } ],
        hexes: ["K12"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Thorn" } } ],
        hexes: ["L5"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Nice" }, y: -10 } ],
        mountain: { cost: "£60", y: 40 },
        hexes: ["C20"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Zürich" }, y: -10 } ],
        mountain: { cost: "£60", y: 40 },
        hexes: ["E14"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Innsbruck" }, y: -10 } ],
        mountain: { cost: "£60", y: 40 },
        hexes: ["H15"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Salzburg" }, y: -10 } ],
        mountain: { cost: "£60", y: 40 },
        hexes: ["I14"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Pressburg" }, y: -10 } ],
        mountain: { cost: "£60", y: 40 },
        hexes: ["L15"]
      },
      {
        color: "plain",
        centerTowns: [ { name: { name: "Krakau" }, y: -10 } ],
        mountain: { cost: "£60", y: 40 },
        hexes: ["M10"]
      },
      {
        color: "plain",
        mountain: { cost: "£60" } ,
        hexes: ["A14", "A16", "C10", "D9", "D11", "F15", "G16", "I10", "I12", "J9", "J13", "K8", "L9"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Fréjus", percent: 0.7, size: "medium" },
        hexes: ["C18"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Lötschberg", percent: 0.7, size: "medium" },
        hexes: ["D17"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Simplon", percent: 0.7, size: "medium" },
        hexes: ["E16"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Gotthard", percent: 0.7, size: "medium" },
        hexes: ["F17"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Albula", percent: .7, size: "medium" },
        hexes: ["G18"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Brenner", percent: .7, size: "medium" },
        hexes: ["H17"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Arlberg", percent: .7, size: "medium" },
        hexes: ["I16"]
      },
      {
        color: "plain",
        mountain: { cost: "£120" },
        labels: { label: "Tauern", percent: .7, size: "medium" },
        hexes: ["J15"]
      },
      {
        color: "plain",
        hexes: [
          "A8",
          "A12",
          "A18",
          "A20",
          "B9",
          "B15",
          "C12",
          "C14",
          "D21",
          "E4",
          "E8",
          "E10",
          "F5",
          "F7",
          "F13",
          "G4",
          "G8",
          "G14",
          "H3",
          "H5",
          "H9",
          "H11",
          "H13",
          "H21",
          "I4",
          "J3",
          "J17",
          "J19",
          "K6",
          "K10",
          "K18",
          "L7",
          "L11",
          "L13",
          "L17",
          "M6",
          "M8",
          "M12",
          "M14",
        ]
      },
      {
        color: "plain",
        hexes: [
          "B11",
          "F19",
          "I6",
        ],
        borders: [ { side: 1, dashed: "true", color: "gray" },
                   { side: 2, dashed: "true", color: "gray" },
                   { side: 3, dashed: "true", color: "gray" },
                   { side: 4, dashed: "true", color: "gray" },
                   { side: 5, dashed: "true", color: "gray" },
                   { side: 6, dashed: "true", color: "gray" } ],
      },
      {
        color: "green",
        hexes: [
          "M18",
          "L19",
          "K20",
          "H23",
          "N7",
          "N9",
          "N11",
          "N13",
          "N15",
          "M4",
          "L3",
        ]
      },
      {
        color: "water",
        hexes: [
          "J21",
          "I22",
          "K2",
          "J1",
          "I2",
          "H1",
          "F1",
          "E2",
          "C2",
          "B3",
          "B5",
          "C22",
          "D23",
          "F23",
        ]
      }
    ]
  }
};

export default game;
