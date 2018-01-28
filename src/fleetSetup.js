export let offence = [
    {
        amount : 60,
        unit : {
            type : 'fighter',
            hullClass : 'frigate',
            weapon : {
                explosive : 3,
                kinetic : 1,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 0,
        unit : {
            type : 'assaultFrigate',
            hullClass : 'frigate',
            weapon : {
                explosive : 3,
                kinetic : 1,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 0,
        unit : {
            type : 'interceptor',
            hullClass : 'frigate',
            weapon : {
                explosive : 3,
                kinetic : 1,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [ 'frigate' ],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 0,
        unit : {
            type : 'covertOps',
            hullClass : 'frigate',
            weapon : {
                explosive : 0,
                kinetic : 0,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'frigate' ],
                    bonus  : 1.25
                }
            },
            special : "Counter Covert Ops combat only; hacks for intel"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'shuttle',
            hullClass : 'frigate',
            weapon : {
                explosive : 0,
                kinetic : 0,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'frigate' ],
                    bonus  : 1.25
                }
            },
            special : "Non-combat; transports ambassadors"
        }
    },
    {
        amount : 5,
        unit : {
            type : 'destroyer',
            hullClass : 'cruiser',
            weapon : {
                explosive : 15,
                kinetic : 5,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [ 'frigate' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [ 'capital' ],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'cruiser' ],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 0,
        unit : {
            type : 'interdictor',
            hullClass : 'cruiser',
            weapon : {
                explosive : 15,
                kinetic : 5,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [ 'frigate' ],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 1,
        unit : {
            type : 'commandShip',
            hullClass : 'cruiser',
            weapon : {
                explosive : 6,
                kinetic : 2,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'frigate' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'capital' ],
                    bonus  : 1.25
                }
            },
            special : "Boosts combat efficiency"
        }
    },
    {
        amount : 2,
        unit : {
            type : 'logistics',
            hullClass : 'cruiser',
            weapon : {
                explosive : 0,
                kinetic : 0,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'frigate', 'cruiser', 'capital' ],
                    bonus  : 1.25
                }
            },
            special : "Non-combat; transports resources"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'carrier',
            hullClass : 'capital',
            weapon : {
                explosive : 45,
                kinetic   : 15,
                thermal   : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [ 'frigate' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : "Docking bay for frigates"
        }
    },
    {
        amount : 1,
        unit : {
            type : 'dreadnought',
            hullClass : 'capital',
            weapon : {
                explosive : 120,
                kinetic   : 40,
                thermal   : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [ 'capital' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [ 'frigate', 'cruiser' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : "Siege weapon"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'interstellarArk',
            hullClass : 'capital',
            weapon : {
                explosive : 0,
                kinetic   : 0,
                thermal   : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : "Non-combat; Creates a new Dyson sphere"
        }
    }
];

export let defence = [
    {
        amount : 15,
        unit : {
            type : 'fighter',
            hullClass : 'frigate',
            weapon : {
                explosive : 3,
                kinetic : 1,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 10,
        unit : {
            type : 'assaultFrigate',
            hullClass : 'frigate',
            weapon : {
                explosive : 3,
                kinetic : 1,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 5,
        unit : {
            type : 'interceptor',
            hullClass : 'frigate',
            weapon : {
                explosive : 3,
                kinetic : 1,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [ 'frigate' ],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 0,
        unit : {
            type : 'covertOps',
            hullClass : 'frigate',
            weapon : {
                explosive : 0,
                kinetic : 0,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'frigate' ],
                    bonus  : 1.25
                }
            },
            special : "Counter Covert Ops combat only; hacks for intel"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'shuttle',
            hullClass : 'frigate',
            weapon : {
                explosive : 0,
                kinetic : 0,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong     : {
                    versus : [],
                    bonus  : 1.1
                },
                weak       : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'frigate' ],
                    bonus  : 1.25
                }
            },
            special : "Non-combat; transports ambassadors"
        }
    },
    {
        amount : 5,
        unit : {
            type : 'destroyer',
            hullClass : 'cruiser',
            weapon : {
                explosive : 15,
                kinetic : 5,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [ 'frigate' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [ 'capital' ],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'cruiser' ],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 5,
        unit : {
            type : 'interdictor',
            hullClass : 'cruiser',
            weapon : {
                explosive : 15,
                kinetic : 5,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [ 'frigate' ],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'cruiser', 'capital' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : ""
        }
    },
    {
        amount : 0,
        unit : {
            type : 'commandShip',
            hullClass : 'cruiser',
            weapon : {
                explosive : 6,
                kinetic : 2,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [ 'frigate' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'capital' ],
                    bonus  : 1.25
                }
            },
            special : "Boosts combat efficiency"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'logistics',
            hullClass : 'cruiser',
            weapon : {
                explosive : 0,
                kinetic : 0,
                thermal : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient  : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [ 'frigate', 'cruiser', 'capital' ],
                    bonus  : 1.25
                }
            },
            special : "Non-combat; transports resources"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'carrier',
            hullClass : 'capital',
            weapon : {
                explosive : 45,
                kinetic   : 15,
                thermal   : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [ 'frigate' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : "Docking bay for frigates"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'dreadnought',
            hullClass : 'capital',
            weapon : {
                explosive : 120,
                kinetic   : 40,
                thermal   : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [ 'capital' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [ 'frigate', 'cruiser' ],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : "Siege weapon"
        }
    },
    {
        amount : 0,
        unit : {
            type : 'interstellarArk',
            hullClass : 'capital',
            weapon : {
                explosive : 0,
                kinetic   : 0,
                thermal   : 0
            },
            shield : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            armor : {
                explosive : 1.0,
                kinetic   : 1.0,
                thermal   : 1.0
            },
            efficiency : {
                strong : {
                    versus : [],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [],
                    bonus  : 0.9
                },
                vulnerable : {
                    versus : [],
                    bonus  : 1.25
                }
            },
            special : "Non-combat; Creates a new Dyson sphere"
        }
    }
];