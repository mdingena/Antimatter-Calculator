import React, { Component } from 'react';
import './App.css';
import Squadron from './Squadron';

let attackers = [
    {
        amount : 40,
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
                    bonus  : 1.1
                },
                vulnerable : {
                    versus : [],
                    bonus  : 0.75
                }
            },
            special : ""
        }
    },
    {
        amount : 20,
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
                    bonus  : 1.1
                },
                vulnerable : {
                    versus : [ 'cruiser' ],
                    bonus  : 0.75
                }
            },
            special : ""
        }
    },
    {
        amount : 5,
        unit : {
            type : 'dreadnought',
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
                    versus : [ 'capital' ],
                    bonus  : 1.1
                },
                weak : {
                    versus : [],
                    bonus  : 0.75
                },
                resilient : {
                    versus : [ 'frigate', 'cruiser' ],
                    bonus  : 1.1
                },
                vulnerable : {
                    versus : [],
                    bonus  : 0.9
                }
            },
            special : ""
        }
    }
];

let defenders = [
    {
        amount : 60,
        unit : {
            type : 'interceptor',
            hullClass : 'frigate',
            weapon : {
                explosive : 0,
                kinetic : 3,
                thermal : 1
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
                    bonus  : 1.1
                },
                vulnerable : {
                    versus : [],
                    bonus  : 0.75
                }
            },
            special : ""
        }
    },
    {
        amount : 35,
        unit : {
            type : 'interdictor',
            hullClass : 'cruiser',
            weapon : {
                explosive : 0,
                kinetic : 15,
                thermal : 5
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
                    bonus  : 1.1
                },
                vulnerable : {
                    versus : [],
                    bonus  : 0.75
                }
            },
            special : ""
        }
    }
];

class Fleet {
    constructor( commander, fleet ) {
        this.commander = commander;
        this.fleet     = fleet;
    }

    attack( opponent ) {
        let points = {
            explosive : 0,
            kinetic   : 0,
            thermal   : 0
        }
        const opponentFleetSize = opponent.fleet.reduce( ( prev, squadron ) => prev += squadron.amount, 0 );
        opponent.fleet.forEach( defence => {
            const ratio = defence.amount / opponentFleetSize;
            this.fleet.forEach( offence => {
                const advantage   = this._advantage( offence, defence );
                const factor      = ratio * advantage * offence.amount;
                points.explosive += ( factor * offence.unit.weapon.explosive ) * defence.unit.shield.explosive * defence.unit.armor.explosive;
                points.kinetic   += ( factor * offence.unit.weapon.kinetic   ) * defence.unit.shield.kinetic   * defence.unit.armor.kinetic;
                points.thermal   += ( factor * offence.unit.weapon.thermal   ) * defence.unit.shield.thermal   * defence.unit.armor.thermal;
            });
        });
        return points;
    }

    _advantage( offence, defence ) {
        let advantage = 1.0;
        if( offence.unit.efficiency.weak.versus.indexOf( defence.unit.hullType ) !== -1 ) {
            advantage *= offence.unit.efficiency.weak.bonus;
        } else if( offence.unit.efficiency.strong.versus.indexOf( defence.unit.hullType ) !== -1 ) {
            advantage *= offence.unit.efficiency.strong.bonus;
        }
        if( defence.unit.efficiency.vulnerable.versus.indexOf( offence.unit.hullType ) !== -1 ) {
            advantage *= defence.unit.efficiency.vulnerable.bonus;
        } else if( defence.unit.efficiency.resilient.versus.indexOf( offence.unit.hullType ) !== -1 ) {
            advantage *= defence.unit.efficiency.resilient.bonus;
        }
        return advantage;
    }

    destroy( tactic, ratio, isVictor ) {
        if( tactic === 'raid' ) {
            ratio = isVictor ? ratio : 1.0 - ratio;
        } else if( !isVictor ) {
            ratio = 1.0;
        }
        this.fleet.forEach( ( squadron, i, fleet ) => {
            fleet[ i ].amount = Math.round( squadron.amount * ( 1.0 - ratio ) );
        });
    }
}

class Battle {
    constructor( offence, tactic, defence ) {
        this.conclusion = this._resolveCombat( offence, defence );
        this.conclusion.winner.destroy( tactic, this.conclusion.ratio, true );
        this.conclusion.loser.destroy( tactic, this.conclusion.ratio, false );
    }

    _resolveCombat( offence, defence ) {
        const attackPoints = offence.attack( defence );
        const defendPoints = defence.attack( offence );
        const attackDamage = this._damage( attackPoints );
        const defendDamage = this._damage( defendPoints );
        if( attackDamage > defendDamage ) {
            return {
                winner : offence,
                loser  : defence,
                ratio  : defendDamage / attackDamage
            }
        } else {
            return {
                winner : defence,
                loser  : offence,
                ratio  : attackDamage / defendDamage
            }
        }
    }

    _damage( points ) {
        return Object.keys( points ).reduce( ( prev, damageType ) => prev += points[ damageType ], 0 );
    }
}

export default class extends Component {
    constructor( props ) {
        super( props );

    }

    handleFleetChange

    handleInputChange( event ) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [ name ] : value
        });
    }
    
    /* 
    -- general
    input efficiencyStrongBonus
    input efficiencyWeakBonus
    input efficiencyResilientBonus
    input efficiencyVulnerableBonus
    */
    render() {
        /*let attacker = new Fleet( 'attacker', attackers );
        let defender = new Fleet( 'defender', defenders );
        const attackPoints = attacker.attack( defender );
        const defendPoints = defender.attack( attacker );
        let battle = new Battle( attacker, 'raid', defender );*/
        return(
            <div className="app">
                <div className="squadron header">
                    <span className="amount">Amount</span>
                    <span className="type">Unit Type</span>
                    <span className="hullClass">Frigate</span>
                    <span className="hullClass">Cruiser</span>
                    <span className="hullClass">Capital</span>
                    <span className="baseDamageExplosive">Explosive Damage</span>
                    <span className="baseDamageKinetic">Kinetic Damage</span>
                    <span className="baseDamageThermal">Thermal Damage</span>
                    <span className="efficiencyStrongVersus">Strong vs. Frigates</span>
                    <span className="efficiencyStrongVersus">Strong vs. Cruisers</span>
                    <span className="efficiencyStrongVersus">Strong vs. Capitals</span>
                    <span className="efficiencyWeakVersus">Weak vs. Frigates</span>
                    <span className="efficiencyWeakVersus">Weak vs. Frigates</span>
                    <span className="efficiencyWeakVersus">Weak vs. Frigates</span>
                    <span className="shieldExplosive">% Explosive Shield</span>
                    <span className="shieldKinetic">% Kinetic Shield</span>
                    <span className="shieldThermal">% Thermal Shield</span>
                    <span className="armorExplosive">% Explosive Armor</span>
                    <span className="armorKinetic">% Kinetic Armor</span>
                    <span className="armorThermal">% Thermal Armor</span>
                    <span className="efficiencyResilientVersus">Resilient vs. Frigates</span>
                    <span className="efficiencyResilientVersus">Resilient vs. Frigates</span>
                    <span className="efficiencyResilientVersus">Resilient vs. Frigates</span>
                    <span className="efficiencyVulnerableVersus">Vulnerable vs. Frigates</span>
                    <span className="efficiencyVulnerableVersus">Vulnerable vs. Frigates</span>
                    <span className="efficiencyVulnerableVersus">Vulnerable vs. Frigates</span>
                    <span className="special">Special</span>
                </div>
                <div id="attackers">{
                    attackers.map( ( squadron, i ) => {
                        return <Squadron key={ i } amount={ squadron.amount } unit={ squadron.unit } />;
                    })
                }</div>
                <br />
                <div id="defenders">{
                    defenders.map( ( squadron, i ) => {
                        return <Squadron key={ i } amount={ squadron.amount } unit={ squadron.unit } />;
                    })
                }</div>
            </div>
        );
    }
}
