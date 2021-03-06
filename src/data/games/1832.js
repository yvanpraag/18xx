const game = {
  // Generic Game Info
  info: {
    title: "1832",
    subtitle: "The South",
    designer: "W.R. Dixon",
    background: "gray",
    titleX: 50,
    titleY: 1500,
    width: 150,
    color_10: "orange",
    hexCoords: true,
    extraHomeTokens: 6,
    currency: "USD"
  },

  // Extra Tokens
  tokens: ["Round","#port","+$10","Coal","Coal","Coal","Coal","Coal","Coal","KW"],

  // Need an IPO sheet
  ipo: true,

  bank: "$12,000",

  players: [
    {
      number: 2,
      certLimit: 28,
      capital: "$1050"
    },
    {
      number: 3,
      certLimit: 20,
      capital: "$700"
    },
    {
      number: 4,
      certLimit: 16,
      capital: "$525"
    },
    {
      number: 5,
      certLimit: 13,
      capital: "$420"
    },
    {
      number: 6,
      certLimit: 11,
      capital: "$350"
    },
    {
      number: 7,
      certLimit: 9,
      capital: "$300"
    },
  ],

  // Railway Companies
  companies: [
    {
      name: "Atlantic Coast Line Railroad",
      abbrev: "ACL",
      tokens: ["Free", "$40", "$100"],
      color: "purple",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Atlanta & West Point Railroad",
      abbrev: "A&WP",
      tokens: ["Free", "$40"],
      color: "pink",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Seaboard Air Line Railway",
      abbrev: "SALR",
      tokens: ["Free", "$40", "$100"],
      color: "orange",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Norfolk & Western Railway",
      abbrev: "N&W",
      tokens: ["Free", "$40", "$100"],
      color: "black",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Central of Georgia Railway",
      abbrev: "CGR",
      tokens: ["Free", "$40", "$100"],
      color: "gray",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Louisville & Nashville Railroad",
      abbrev: "L&N",
      tokens: ["Free", "$40", "$100"],
      color: "blue",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Georgia Railroad",
      abbrev: "GRR",
      tokens: ["Free", "$40"],
      color: "cyan",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Gulf, Mobile & Ohio Railroad",
      abbrev: "GM&O",
      tokens: ["Free", "$40","$100"],
      color: "yellow",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Southern Railway",
      abbrev: "SR",
      tokens: ["Free", "$40","$100"],
      color: "darkGreen",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    },
    {
      name: "Florida East Coast Railroad",
      abbrev: "FECR",
      tokens: ["Free", "$40","$100 KW only"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 18,
          percent: "10/5",
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 7,
      price: "$80",
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
      quantity: 6,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "$300",
      color: "green",
      info: [
        {
          color: "gray",
          note: "Rusted by 8"
        }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "gray",
          note: "Rusted by 12"
        }
      ]
    },
    {
      name: "6",
      quantity: 3,
      price: "$630",
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
      quantity: 3,
      price: "$800",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "10",
      quantity: 2,
      price: "$950",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "12",
      quantity: 6,
      price: "$1100",
      color: "gray",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "P1: Carolina Stage Coach",
      price: "$20",
      revenue: "$5",
      description: ""
    },
    {
      name: "P2: Cotton Warehouse",
      price: "$40",
      revenue: "$10",
      description:
      "This company has a $10 token which may be placed in any non-coastal city (Atlantic or Gulf Coast) as an extra token lay during the token placement step of an owning public company's operating round."
    },
    {
      name: "P3: Atlantic Shipping",
      price: "$50",
      revenue: "$10",
      description:
      "This company has a Port token which may be placed on any city on the coasts an extra token lay during the token placement step of an owning public company's operating round. All eligible cities are marked with an anchor symbol. This token increases the value of the selected city by $20 for the owning company and by $10 for all other companies."
    },
    {
      name: "P4: London Investment",
      price: "$70",
      revenue: "$10",
      description:
      "This company represents those shrewd investors in London. They have hired you to invest their money in the new Southern railways. They will purchase a share in your choice of any newly started company. You get the share. After the company pays its first dividend, the London Investment Company is closed, as they realize they have paid you for nothing and you spent the money for yourself."
    },
    {
      name: "P5: West Virginia Coalfields",
      price: "$80",
      revenue: "$15",
      description:
      "This private company gives the owning company a WVCF token for free. When other companies connect to the coal fields, they may buy a WVCF token (if available) during their operating round for $80 ($40 goes to the company owning the WVCF private company)."
    },
    {
      name: "P6: Southern Bank (var)",
      price: "$100",
      revenue: "$10/10%",
      description:
      "You may loan money to your company by taking out a mortgage on a company asset. The mortgage value is from half to double the value of the asset. At the start of each operating round, the company will pay you 10% interest (10% of the value of the mortgaged asset). If the company does not have enough money to pay the interest, it pays nothing. The company will repay the mortgage for half to full value of the asset. "
    },
    {
      name: "P7: Central Railroad & Canal",
      price: "$200",
      revenue: "$30",
      description:
      "Comes with the president's share of the Central of Georgia Railway. The player buying this private company must immediately set the par value of the CoG. "
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "7",
      tiles: "yellow",
      notes: "P5 may be sold 0.5-2x"
    },
    {
      name: "3",
      limit: "4",
      number: "6",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "All but P6 are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "private tokens removed"
    },
    {
      name: "8",
      limit: "2",
      number: "2",
      rust: "4",
      tiles: "gray",
    },
    {
      name: "10",
      limit: "2",
      number: "2",
      tiles: "gray",
    },
    {
      name: "12",
      limit: "2",
      number: "inf",
      rust: "5",
      tiles: "gray"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Dividends for shares in the open market are paid to the bank."
        },
        {
          color: "brown",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares then buy one share",
        "Buy one share then sell any number of shares",
        "Redeem shares",
        "Reissue shares"
      ],
      ordered: false,
    },
    {
      name: "Merger Phase",
      steps: [
        "Conducted after each SR during Phases 4 and 5",
      ],
      ordered: false,
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true,
      optional: ["Purchase private companies"]
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [
        {
          label: 275,
          color: "yellow",
          width: "1.5in"
        },
        {
          label: 250,
          color: "yellow",
          width: "1.5in"
        },
        {
          label: 225,
          color: "yellow",
          width: "1.5in"
        },
        {
          label: "200 (275)",
          width: "1.5in"
        },
        {
          label: "180 (250)",
          width: "1.5in"
        },
        {
          label: "160 (225)",
          width: "1.5in"
        },
        {
          label: "140 (180)",
          width: "1.5in"
        },
        {
          label: "120 (160)",
          width: "1.5in"
        },
        {
          label: "110 (140)",
          width: "1.5in"
        },
        {
          label: 100,
          color: "white",
          width: "1.5in"
        },
        {
          label: "90 (120)",
          color: "white",
          width: "1.5in"
        },
        {
          label: "82 (110)",
          color: "white",
          width: "1.5in"
        },
        {
          label: "76 (100)",
          color: "white",
          width: "1.5in"
        },
        {
          label: 72,
          color: "white",
          width: "1.5in"
        },
        {
          label: 68,
          color: "white",
          width: "1.5in"
        }
      ]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { value: 64, label: 64, legend: 0, arrow: "down" },
        68,
        72,
        76,
        82,
        90,
        { value: 100, label: 100, par: true },
        110,
        120,
        140,
        160,
        180,
        200,
        225,
        250,
        275,
        300,
        325,
        350,
        375,
        400
      ],
      [
        { value: 60, label: 60, legend: 0, arrow: "down" },
        { value: 64, label: 64, legend: 0 },
        68,
        72,
        76,
        82,
        { value: 90, label: 90, par: true },
        100,
        110,
        120,
        140,
        160,
        180,
        200,
        225,
        250,
        { value: 275, label: 275, borders: [
          {color: "red", side: "bottom" }]},
        { value: 300, label: 300, borders: [
          {color: "red", side: "bottom" }]},
        { value: 325, label: 325, borders: [
          {color: "red", side: "bottom" }]},
        { value: 350, label: 350, borders: [
          {color: "red", side: "bottom" }]},
        { value: 375, label: 375, arrow: "up", borders: [
          {color: "red", side: "bottom" }]}
      ],
      [
        { value: 55, label: 55, legend: 0, arrow: "down" },
        { value: 60, label: 60, legend: 0 },
        { value: 64, label: 64, legend: 0 },
        68,
        72,
        76,
        { value: 82, label: 82, par: true },
        90,
        100,
        110,
        120,
        140,
        160,
        { value: 180, label: 180, borders: [
          {color: "red", side: "bottom" }]},
        { value: 200, label: 200, borders: [
          {color: "red", side: "bottom" }]},
        { value: 225, label: 225, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        250,
        275,
        300,
        325,
        { value: 350, label: 350, arrow: "up" }
      ],
      [
        { value: 50, label: 50, legend: 1, arrow: "down" },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        { value: 64, label: 64, legend: 0 },
        68,
        72,
        { value: 76, label: 76, par: true },
        82,
        90,
        100,
        110,
        { value: 120, label: 120, borders: [
          {color: "red", side: "bottom" }]},
        { value: 140, label: 140, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        160,
        180,
        200,
        225,
        250,
        275,
        300,
        { value: 325, label: 325, arrow: "up" }
      ],
      [
        { value: 40, label: 40, legend: 1, arrow: "down" },
        { value: 50, label: 50, legend: 1 },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        64,
        68,
        { value: 72, label: 72, par: true },
        76,
        82,
        90,
        { value: 100, label: 100, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        110,
        120,
        140,
        160,
        { value: 180, label: 180, arrow: "up" }
      ],
      [
        { value: 30, label: 30, legend: 2, arrow: "down" },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 1 },
        { value: 55, label: 55, legend: 0 },
        { value: 60, label: 60, legend: 0 },
        64,
        { value: 68, label: 68, par: true },
        72,
        76,
        { value: 82, label: 82, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        90,
        100,
        { value: 110, label: 110, arrow: "up" }
      ],
      [
        { value: 20, label: 20, legend: 2, arrow: "down" },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 1 },
        { value: 55, label: 55, legend: 0 },
        60,
        64,
        68,
        { value: 72, label: 72, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        76,
        { value: 82, label: 82, arrow: "up" }
      ],
      [
        { value: 10, label: 10, legend: 2, arrow: "down" },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 55, label: 55, legend: 0 },
        60,
        { value: 64, label: 64, arrow: "up", borders: [
          {color: "red", side: "right" },
          {color: "red", side: "bottom" }]},
        68,
        { value: 72, label: 72, arrow: "up" }
      ],
      [
        { color: "black" },
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0 },
        { value: 55, label: 55, arrow: "up", legend: 0, borders: [
          {color: "red", side: "right" }]},
        60,
        { value: 64, label: 64, arrow: "up" }
      ],
      [
        { color: "black" },
        { color: "black" },
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1 },
        { value: 50, label: 50, legend: 0, arrow: "up" }
      ],
      [
        { label: "Closed", verticalAlign: "bottom", color: "black" },
        { color: "black" },
        { color: "black" },
        { value: 10, label: 10, legend: 2 },
        { value: 20, label: 20, legend: 2 },
        { value: 30, label: 30, legend: 2 },
        { value: 40, label: 40, legend: 1, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "yellow",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      },
      {
        color: "orange",
        description: "Players may own more than 60% of this corporation",
        icon: "percentage"
      },
      {
        color: "brown",
        description:
        "Players may purchase any number of shares of this corporation in one stock action",
        icon: "money-bill-wave"
      },
      {
        color: "black",
        description: "Companies entering this area are immediately closed.",
        icon: "times"
      }
    ]
  },

  tiles: {
    "1": 1,
    "2": 1,
    "3": 3,
    "4": 4,
    "5": 2,
    "7": 7,
    "8": 20,
    "9": 20,
    "55": 1,
    "56": 1,
    "57": 5,
    "58": 4,
    "69": 1,
    "14": 4,
    "15": 4,
    "16": 1,
    "17": 1,
    "18": 1,
    "19": 1,
    "20": 1,
    "23": 4,
    "24": 4,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "141": 1,
    "142": 1,
    "143": 1,
    "144": 1,
    "190": 1,
    "39": 1,
    "40": 1,
    "41": 3,
    "42": 3,
    "43": 2,
    "44": 1,
    "45": 2,
    "46": 2,
    "47": 2,
    "63": 4,
    "70": 1,
    "145": 1,
    "146": 1,
    "147": 1,
    "191": 1,
    "193": 1,
    "611|JC": 2
  },

  map: {
    hexes: [
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Louisville"
          },
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              cost: "50"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 5
          },
          {
            side: 6
          }
        ],
        hexes: ["A7"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Richmond"
          },
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              cost: "50"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 5
          },
          {
            side: 6
          }
        ],
        hexes: ["A21"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {
            name: "Kansas city"
          },
          angle: 90,
          percent: 0.2,
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "brown",
              cost: "50"
            },
            {
              color: "gray",
              cost: "60"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 4
          },
          {
            side: 5
          }
        ],
        hexes: ["B2"]
      },
      {
        color: "plain",
        water: {cost: "$40"},
        hexes: ["B4"]
      },
      {
        color: "plain",
        hexes: ["B6"]
      },
      {
        color: "plain",
        hexes: ["B8"]
      },
      {
        color: "plain",
        mountain: {cost: "$60"},
        hexes: ["B10"]
      },
      {
        color: "plain",
        mountain: {cost: "$60"},
        hexes: ["B12"]
      },
      {
        color: "gray",
        track: [{side: 1}, {side: 4}, {side: 5}, {side: 6}],
        offBoardRevenue: {
          angle: 180,
          percent: 0.4,
          name: {name: "W. Va. Coalfields"},
          revenues: [{color: "yellow", cost: "40"},
                     {color: "brown", cost: "50"}]
        },
        icons: [{type: "coal", percent: 0.8}],
        centerTowns: [{ }],
        hexes: ["B14"]
      },
      {
        color: "plain",
        mountain: {cost: "$70"},
        hexes: ["B16"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Lynchburg"
            }
          }
        ],
        hexes: ["B18"]
      },
      {
        color: "plain",
        hexes: ["B20"]
      },
      {
        color: "plain",
        hexes: ["B22"]
      },
      {
        color: "gray",
        cities: [
          {
            angle: 60,
            percent: 0.6,
            companies: [
              {
                label: "N&W",
                color: "black"
              }
            ]
          },
        ],
        track: [
          {
            type: "sharp",
            side: 6
          },
        ],
        icons: [
          {
            type: "port",
            angle: 0,
            percent: 0.75
          }
        ],
        offBoardRevenue: {
          angle: 240,
          percent: 0.3,
          name: {
            name: "Norfolk"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            },
            {
              color: "gray",
              cost: "50"
            }
          ]
        },
        hexes: ["B24"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0.6,
          cost: "$40"
        },
        centerTowns: [
          {
            name: {
              name: "Jackson"
            }
          }
        ],
        hexes: ["C3"]
      },
      {
        color: "plain",
        hexes: ["C5"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Nashville"
            },
            companies: [
              {
                label: "L&N",
                color: "blue"
              }
            ]
          },
        ],
        hexes: ["C7"]
      },
      {
        color: "plain",
        mountain: {cost: "$60"},
        hexes: ["C9"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0.7,
          cost: "$60"
        },
        cities: [
          {
            name: {
              name: "Knoxville"
            },
            companies: [
              {
                label: "SR",
                color: "darkGreen"
              }
            ]
          },
        ],
        hexes: ["C11"]
      },
      {
        color: "plain",
        mountain: {cost: "$80"},
        hexes: ["C13"]
      },
      {
        color: "plain",
        mountain: {cost: "$70"},
        hexes: ["C15"]
      },
      {
        color: "plain",
        centerTowns: [
          { x: -20, y: -15, name: { name: "Winston Salem", reverse: false } },
          { x: 30, y: 15, name: { name: "Greensboro", reverse: true } }
        ],
        hexes: ["C17"]
      },
      {
        color: "plain",
        hexes: ["C19"]
      },
      {
        color: "plain",
        hexes: ["C21"]
      },
      {
        color: "plain",
        hexes: ["C23"]
      },
      {
        color: "plain",
        hexes: ["D2"]
      },
      {
        color: "plain",
        terrain: [{type:"water",percent:0.667,cost:"$40"}],
        centerTowns: [{name: {name: "Corinth"}}],
        hexes: ["D4"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["D6"]
      },
      {
        color: "plain",
        terrain: [{type: "water", percent: 0.667, cost: "$40"}],
        mediumCities: [{name: {name: "Chattanooga"}}],
        hexes: ["D8"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$60"
        },
        hexes: ["D10"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["D12"]
      },
      {
        color: "plain",

        hexes: ["D14"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Charlotte"
            }
          }
        ],
        hexes: ["D16"]
      },
      {
        color: "plain",
        hexes: ["D18"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Raleigh"
            },
            companies: [
              {
                label: "SALR",
                color: "orange"
              }
            ]
          },
        ],
        hexes: ["D20"]
      },
      {
        color: "plain",
        hexes: ["D22"]
      },
      {
        color: "plain",
        hexes: ["E3"]
      },
      {
        color: "plain",
        hexes: ["E5"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["E7"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["E9"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$60"
        },
        hexes: ["E11"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["E13"]
      },
      {
        color: "plain",
        hexes: ["E15"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Columbia"
            }
          }
        ],
        hexes: ["E17"]
      },
      {
        color: "plain",
        hexes: ["E19"]
      },
      {
        color: "plain",
        icons: [
          {
            type: "port",
            angle: 300,
            percent: 0.75
          }
        ],
        centerTowns: [
          {
            name: {
              name: "Wilmington"
            }
          }
        ],
        hexes: ["E21"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["E23"]
      },
      {
        color: "plain",
        hexes: ["F2"]
      },
      {
        color: "plain",
        hexes: ["F4"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: "Birmingham"
            }
          }
        ],
        hexes: ["F6"]
      },
      {
        color: "plain",
        mountain: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["F8"]
      },
      {
        color: "yellow",
        track: [
          {
            side: 2,
            type: "stop"
          },
          {
            side: 4,
            type: "stop"
          },
          {
            side: 6,
            type: "stop"
          }
        ],
        labels: {
          angle: 330,
          percent: 0.7,
          label: "A"
        },
        values: [ { angle: 210, percent: 0.70, value: 20 } ],
        cities: [
          {
            angle: 30,
            percent: 0.5,
            name: {
              name: "Atlanta"

            },
            companies: [
              {
                label: "A&WP",
                color: "pink"
              }
            ]
          },
          {
            angle: 150,
            percent: 0.5,
            companies: [
              {              }
            ]
          },
          {
            angle: 270,
            percent: 0.5,
            companies: [
              {
                label: "GRR",
                color: "cyan"
              }
            ]
          },
        ],
        hexes: ["F10"]
      },
      {
        color: "plain",
        hexes: ["F12"]
      },
      {
        color: "plain",
        terrain: [{type: "water", percent: 0.667, cost: "$40"}],
        mediumCities: [{name: {name: "Augusta"}}],
        hexes: ["F14"]
      },
      {
        color: "plain",
        hexes: ["F16"]
      },
      {
        color: "plain",
        hexes: ["F18"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["F20"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Meridian"
            }
          }
        ],
        hexes: ["G3"]
      },
      {
        color: "plain",
        hexes: ["G5"]
      },
      {
        color: "plain",
        hexes: ["G7"]
      },
      {
        color: "plain",
        mediumCities: [{
          name: {name: "Columbus"}
        }],
        hexes: ["G9"]
      },
      {
        color: "plain",
        mediumCities: [{
          name: {name: "Macon"}
        }],
        hexes: ["G11"]
      },
      {
        color: "plain",
        hexes: ["G13"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$60"
        },
        hexes: ["G15"]
      },
      {
        color: "plain",
        terrain: [{type:"water",percent:0.667,cost:"$60"}],
        icons: [{type: "port", angle: 240, percent: 0.75}],
        cities: [{name: {name: "Charleston"},
                  companies: [{label: "ACL", color: "purple"}]
                 }],
        hexes: ["G17"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["G19"]
      },
      {
        color: "plain",
        hexes: ["H2"]
      },
      {
        color: "plain",
        hexes: ["H4"]
      },
      {
        color: "plain",
        mediumCities: [{
          name: {name: "Montgomery"}
        }],
        hexes: ["H6"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Eufaula"
            }
          }
        ],
        hexes: ["H8"]
      },
      {
        color: "plain",
        hexes: ["H10"]
      },
      {
        color: "plain",
        hexes: ["H12"]
      },
      {
        color: "plain",
        hexes: ["H14"]
      },
      {
        color: "plain",
        terrain: [{type:"water",percent:0.667,cost:"$60"}],
        icons: [{type: "port", angle: 240, percent: 0.75}],
        cities: [{name: {name: "Savannah"},
                  companies: [{label: "CGR", color: "gray"}]
                 }],
        hexes: ["H16"]
      },
      {
        color: "gray",
        track: [{type: "sharp", side: 4}],
        hexes: ["I1"]
      },
      {
        color: "plain",
        icons: [
          {
            type: "port",
            angle: 240,
            percent: 0.75
          }
        ],
        cities: [
          {
            name: {
              name: "Mobile"
            }
          }
        ],
        hexes: ["I3"]
      },
      {
        color: "plain",
        hexes: ["I5"]
      },
      {
        color: "plain",
        hexes: ["I7"]
      },
      {
        color: "plain",
        hexes: ["I9"]
      },
      {
        color: "plain",
        hexes: ["I11"]
      },
      {
        color: "plain",
        hexes: ["I13"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$60"
        },
        hexes: ["I15"]
      },
      {
        color: "gray",
        cities: [{companies: [{label: "GM&O", color: "yellow"}],
                  name: {reverse: true, name: "New Orleans"}}],
        track: [{side:2},{side:3},{side:4}],
        icons: [{type: "port", angle: 240, percent: 0.75}],
        offBoardRevenue: {
          angle: 90,
          percent: 0.7,
          y: -20,
          rows: 3,
          revenues: [{color: "yellow", cost: "20"},
                     {color: "brown", cost: "30"},
                     {color: "gray", cost: "50"}]
        },
        hexes: ["J2"]
      },
      {
        color: "plain",
        icons: [{type: "port", angle: 240, percent: 0.75}],
        terrain: [{type:"water",percent:0.667,cost:"$80"}],
        centerTowns: [{name: {name: "Pensacola"}}],
        hexes: ["J4"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["J6"]
      },
      {
        color: "plain",
        hexes: ["J8"]
      },
      {
        color: "plain",
        icons: [
          {
            type: "port",
            angle: 240,
            percent: 0.75
          }
        ],
        cities: [
          {
            name: {
              name: "Talahassee"
            }
          }
        ],
        hexes: ["J10"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Valdosta"
            }
          }
        ],
        hexes: ["J12"]
      },
      {
        color: "plain",

        icons: [
          {
            type: "port",
            angle: 240,
            percent: 0.75
          }
        ],
        cities: [
          {
            name: {
              name: "Jacksonville"
            },

            companies: [
              {
                label: "FECR",
                color: "red"
              }
            ]
          },
        ],
        hexes: ["J14"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["K9"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["K11"]
      },
      {
        color: "plain",
        hexes: ["K13"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["K15"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["L12"]
      },
      {
        color: "plain",
        mediumCities: [{name: {name: "Orlando"}}],
        hexes: ["L14"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$40"
        },
        hexes: ["L16"]
      },
      {
        color: "plain",
        icons: [
          {
            type: "port",
            angle: 240,
            percent: 0.75
          }
        ],
        water: {
          angle: 0,
          percent: 0.75,
          cost: "$40"
        },
        cities: [
          {
            name: {
              name: "Tampa"
            }
          }
        ],
        hexes: ["M13"]
      },
      {
        color: "plain",
        centerTowns: [
          { x: -20, y: -15, name: { name: "Lakeland", reverse: false } },
          { x: 30, y: 15, name: { name: "Winter Haven", reverse: true } }
        ],
        hexes: ["M15"]
      },
      {
        color: "gray",
        track: [
          {
            type: "gentle",
            side: 6
          },
        ],
        hexes: ["M17"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$80"
        },
        hexes: ["N12"]
      },
      {
        color: "plain",
        water: {
          angle: 0,
          percent: 0,
          cost: "$60"
        },
        hexes: ["N14"]
      },
      {
        color: "offboard",
        cities: [
          {
            companies: [
              {
                label: "KW",
                color: "black"
              }
            ]
          }
        ],
        offBoardRevenue: {
          angle: 0,
          percent: 0.8,
          name: {
            name: "Miami"
          },
          revenues: [
            {
              color: "yellow",
              cost: "20"
            },
            {
              color: "brown",
              cost: "30"
            },
            {
              color: "gray",
              cost: "50"
            }
          ]
        },
        offBoardTrack: [
          {
            side: 3
          },
          {
            side: 2
          },
          {
            side: 1
          }
        ],
        icons: [
          {
            type: "port",
            angle: 300,
            percent: 0.75
          }
        ],
        hexes: ["N16"]
      },
    ]
  }
};

export default game;
