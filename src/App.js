import React, { Component } from 'react';
import './App.css';
import { offence as attackers, defence as defenders } from './fleetSetup';
import Squadron from './Squadron';


class Fleet {
    constructor( commander, fleet ) {
        this.commander = commander;
        this.fleet     = fleet;
        this.remaining = JSON.parse( JSON.stringify( fleet ) );
        this.losses    = JSON.parse( JSON.stringify( fleet ) );
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
        ratio = Math.pow( ratio, 1.5 );
        if( tactic === 'raid' ) {
            ratio = ratio / ( 1.0 + ratio );
            if( !isVictor ) {
                ratio = 1.0 - ratio;
            }
        } else if( !isVictor ) {
            ratio = 1.0;
        }
        this.fleet.forEach( ( squadron, i ) => {
            this.remaining[ i ].amount = Math.round( squadron.amount * ( 1.0 - ratio ) );
            this.losses[ i ].amount = Math.round( squadron.amount * ratio );
        });
    }
}

class Battle {
    constructor( offence, tactic, defence ) {
        this.conclusion = this._resolveCombat( offence, defence );
        this.aftermath = this._destroyUnits( tactic );
    }

    _resolveCombat( offence, defence ) {
        const attackPoints = offence.attack( defence );
        const defendPoints = defence.attack( offence );
        const attackDamage = this._damage( attackPoints );
        const defendDamage = this._damage( defendPoints );
        if( attackDamage > defendDamage ) {
            return {
                offence : attackPoints,
                defence : defendPoints,
                victor  : offence,
                loser   : defence,
                ratio   : defendDamage / attackDamage
            }
        } else {
            return {
                offence : attackPoints,
                defence : defendPoints,
                victor  : defence,
                loser   : offence,
                ratio   : attackDamage / defendDamage
            }
        }
    }

    _damage( points ) {
        return Object.keys( points ).reduce( ( prev, damageType ) => prev += points[ damageType ], 0 );
    }

    _destroyUnits( tactic ) {
        this.conclusion.victor.destroy( tactic, this.conclusion.ratio, true );
        this.conclusion.loser.destroy( tactic, this.conclusion.ratio, false );
    }
}

export default class extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            attackers : attackers,
            defenders : defenders,
            tactic    : 'invade'
        }
    }

    handleFleetChange( side, index, state ) {
        let fleet = this.state[ side ];
        fleet[ index ] = state;
        this.setState({
            [ side ] : fleet
        });
    }

    handleTacticChange( event ) {
        this.setState({
            tactic : event.target.checked ? 'raid' : 'invade'
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
        const attacker = new Fleet( 'attacker', this.state.attackers );
        const defender = new Fleet( 'defender', this.state.defenders );
        const battle = new Battle( attacker, this.state.tactic, defender );
        let losses = {};
        if( this.state.tactic === 'raid' ) {
            losses[ battle.conclusion.victor.commander ] = Math.pow( battle.conclusion.ratio, 1.5 ) / ( 1.0 + Math.pow( battle.conclusion.ratio, 1.5 ) );
            losses[ battle.conclusion.loser.commander ]  = 1.0 - losses[ battle.conclusion.victor.commander ];
        } else {
            losses[ battle.conclusion.victor.commander ] = Math.pow( battle.conclusion.ratio, 1.5 );
            losses[ battle.conclusion.loser.commander ]  = 1.0;
        }
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
                    <span className="efficiencyWeakVersus">Weak vs. Cruisers</span>
                    <span className="efficiencyWeakVersus">Weak vs. Capitals</span>
                    <span className="shieldExplosive">% Explosive Shield</span>
                    <span className="shieldKinetic">% Kinetic Shield</span>
                    <span className="shieldThermal">% Thermal Shield</span>
                    <span className="armorExplosive">% Explosive Armor</span>
                    <span className="armorKinetic">% Kinetic Armor</span>
                    <span className="armorThermal">% Thermal Armor</span>
                    <span className="efficiencyResilientVersus">Resilient vs. Frigates</span>
                    <span className="efficiencyResilientVersus">Resilient vs. Cruisers</span>
                    <span className="efficiencyResilientVersus">Resilient vs. Capitals</span>
                    <span className="efficiencyVulnerableVersus">Vulnerable vs. Frigates</span>
                    <span className="efficiencyVulnerableVersus">Vulnerable vs. Cruisers</span>
                    <span className="efficiencyVulnerableVersus">Vulnerable vs. Capitals</span>
                    <span className="special">Special</span>
                </div>
                <div id="attackers" className="offence">{
                    attacker.fleet.map( ( squadron, i ) => {
                        return <Squadron key={ i } id={ attacker.commander + "-" + i } amount={ squadron.amount } unit={ squadron.unit } unitChanged={ state => this.handleFleetChange( 'attackers', i, state ) } />;
                    })
                }</div>
                <br />
                <div id="defenders" className="defence">{
                    defender.fleet.map( ( squadron, i ) => {
                        return <Squadron key={ i } id={ defender.commander + "-" + i } amount={ squadron.amount } unit={ squadron.unit } unitChanged={ state => this.handleFleetChange( 'defenders', i, state ) } />;
                    })
                }</div>
                <div className="score">
                    <label>Raid <input id="tactic" type="checkbox" onChange={ event => this.handleTacticChange( event ) } /></label>
                    <big className="offence"><strong>{ Math.round( Object.keys( battle.conclusion.offence ).reduce( ( prev, damageType ) => prev += battle.conclusion.offence[ damageType ], 0 ) ) }</strong></big>
                    &nbsp;vs.&nbsp;
                    <big className="defence"><strong>{ Math.round( Object.keys( battle.conclusion.defence ).reduce( ( prev, damageType ) => prev += battle.conclusion.defence[ damageType ], 0 ) ) }</strong></big>
                    &nbsp;<small className={ battle.conclusion.loser.commander === 'attacker' ? "offence" : "defence" }>({ ( battle.conclusion.ratio * 100 ).toFixed( 3 ) }%)</small>
                </div>
                < hr />
                <div className="losses">
                    <ul className="offence">
                        <li><strong>{ ( losses.attacker * 100 ).toFixed( 2 ) }% lost</strong></li>
                    {
                        attacker.losses.map( ( squadron, i ) => {
                            return squadron.amount > 0 ? <li key={ i } amount={ squadron.amount } unit={ squadron.unit }>{ squadron.amount } { squadron.unit.type + ( squadron.amount > 1 ? "s" : "" ) }</li> : null;
                        })
                    }</ul>
                    <ul className="defence">
                        <li><strong>{ ( losses.defender * 100 ).toFixed( 2 ) }% lost</strong></li>
                    {
                        defender.losses.map( ( squadron, i ) => {
                            return squadron.amount > 0 ? <li key={ i } amount={ squadron.amount } unit={ squadron.unit }>{ squadron.amount } { squadron.unit.type + ( squadron.amount > 1 ? "s" : "" ) }</li> : null;
                        })
                    }</ul>
                </div>
            </div>
        );
    }
}
