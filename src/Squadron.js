import React, { Component } from 'react';

export default class extends Component {
    constructor( props ) {
        super( props );
        this.state = { ...props };
    }

    handleAmountChange( event ) {
        this.setState({
            amount : event.target.value
        });
    }

    handleUnitChange( event ) {
        let unit = this.state.unit;
        unit[ event.target.name ] = event.target.value;
        this.setState({
            unit : unit
        });
    }
    
    _weapon( name ) {
        switch( name ) {
            case "baseDamageExplosive":
                return "explosive";
            case "baseDamageKinetic":
                return "kinetic";
            case "baseDamageThermal":
                return "thermal";
            default:
                return "";
        }
    }
    handleWeaponChange( event ) {
        let unit = this.state.unit;
        const damageType = this._weapon( event.target.name );
        unit.weapon[ damageType ] = event.target.value;
        this.setState({
            unit : unit
        });
    }

    _shield( name ) {
        switch( name ) {
            case "shieldExplosive":
                return "explosive";
            case "shieldKinetic":
                return "kinetic";
            case "shieldThermal":
                return "thermal";
            default:
                return "";
        }
    }
    handleShieldChange( event ) {
        let unit = this.state.unit;
        const damageType = this._shield( event.target.name );
        unit.shield[ damageType ] = ( 1.0 - ( event.target.value / 100 ) ).toFixed( 2 );
        this.setState({
            unit : unit
        });
    }

    _armor( name ) {
        switch( name ) {
            case "armorExplosive":
                return "explosive";
            case "armorKinetic":
                return "kinetic";
            case "armorThermal":
                return "thermal";
            default:
                return "";
        }
    }
    handleArmorChange( event ) {
        let unit = this.state.unit;
        const damageType = this._armor( event.target.name );
        unit.armor[ damageType ] = ( 1.0 - ( event.target.value / 100 ) ).toFixed( 2 );
        this.setState({
            unit : unit
        });
    }

    _efficiency( name ) {
        const efficiency = name.split( "Versus" );
        return [ efficiency[ 0 ].substr( 10 ).toLowerCase(), efficiency[ 1 ].toLowerCase() ];
    }
    handleEfficiencyChange( event ) {
        let unit = this.state.unit;
        const value = this._efficiency( event.target.name );
        const efficiency = value[ 0 ];
        const versus = value[ 1 ];
        const checked = event.target.checked;
        if( checked ) {
            unit.efficiency[ efficiency ].versus.push( versus );
        } else {
            const hullClasses = unit.efficiency[ efficiency ].versus.filter( ( hullClass, i ) => hullClass !== versus );
            unit.efficiency[ efficiency ].versus = hullClasses;
        }
        this.setState({
            unit : unit
        });
    }

	render() {
		return (
			<div className="squadron">
				<input type="number"    name="amount" className="amount" value={ this.state.amount }         onChange={ event => this.handleAmountChange( event ) } min={ 0 } />
                <input type="text"      name="type"   className="type"   value={ this.state.unit.type }      onChange={ event => this.handleUnitChange( event ) } />
                <fieldset                 id="hullClass"                 value={ this.state.unit.hullClass } onChange={ event => this.handleUnitChange( event ) }>
                    <input type="radio" name="hullClass"                 value="frigate" />
                    <input type="radio" name="hullClass"                 value="cruiser" />
                    <input type="radio" name="hullClass"                 value="capital" />
                </fieldset>
                <input type="number"   name="baseDamageExplosive"               className="baseDamageExplosive"        value={ this.state.unit.weapon.explosive }                                           onChange={ event => this.handleWeaponChange( event) }     min={ 0 } />
                <input type="number"   name="baseDamageKinetic"                 className="baseDamageKinetic"          value={ this.state.unit.weapon.kinetic }                                             onChange={ event => this.handleWeaponChange( event) }     min={ 0 } />
                <input type="number"   name="baseDamageThermal"                 className="baseDamageThermal"          value={ this.state.unit.weapon.thermal }                                             onChange={ event => this.handleWeaponChange( event) }     min={ 0 } />
                <input type="checkbox" name="efficiencyStrongVersusFrigate"     className="efficiencyStrongVersus"     checked={ this.state.unit.efficiency.strong.versus.indexOf( 'frigate' ) !== -1 }     onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyStrongVersusCruiser"     className="efficiencyStrongVersus"     checked={ this.state.unit.efficiency.strong.versus.indexOf( 'cruiser' ) !== -1 }     onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyStrongVersusCapital"     className="efficiencyStrongVersus"     checked={ this.state.unit.efficiency.strong.versus.indexOf( 'capital' ) !== -1 }     onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyWeakVersusFrigate"       className="efficiencyWeakVersus"       checked={ this.state.unit.efficiency.weak.versus.indexOf( 'frigate' ) !== -1 }       onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyWeakVersusCruiser"       className="efficiencyWeakVersus"       checked={ this.state.unit.efficiency.weak.versus.indexOf( 'cruiser' ) !== -1 }       onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyWeakVersusCapital"       className="efficiencyWeakVersus"       checked={ this.state.unit.efficiency.weak.versus.indexOf( 'capital' ) !== -1 }       onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="number"   name="shieldExplosive"                   className="shieldExplosive"            value={ Math.round( ( 1.0 - this.state.unit.shield.explosive ) * 100 ) }               onChange={ event => this.handleShieldChange( event) }     min={ 0 } max={ 100 } />
                <input type="number"   name="shieldKinetic"                     className="shieldKinetic"              value={ Math.round( ( 1.0 - this.state.unit.shield.kinetic ) * 100 ) }                 onChange={ event => this.handleShieldChange( event) }     min={ 0 } max={ 100 } />
                <input type="number"   name="shieldThermal"                     className="shieldThermal"              value={ Math.round( ( 1.0 - this.state.unit.shield.thermal ) * 100 ) }                 onChange={ event => this.handleShieldChange( event) }     min={ 0 } max={ 100 } />
                <input type="number"   name="armorExplosive"                    className="armorExplosive"             value={ Math.round( ( 1.0 - this.state.unit.armor.explosive ) * 100 ) }                onChange={ event => this.handleArmorChange( event) }      min={ 0 } max={ 100 } />
                <input type="number"   name="armorKinetic"                      className="armorKinetic"               value={ Math.round( ( 1.0 - this.state.unit.armor.kinetic ) * 100 ) }                  onChange={ event => this.handleArmorChange( event) }      min={ 0 } max={ 100 } />
                <input type="number"   name="armorThermal"                      className="armorThermal"               value={ Math.round( ( 1.0 - this.state.unit.armor.thermal ) * 100 ) }                  onChange={ event => this.handleArmorChange( event) }      min={ 0 } max={ 100 } />
                <input type="checkbox" name="efficiencyResilientVersusFrigate"  className="efficiencyResilientVersus"  checked={ this.state.unit.efficiency.resilient.versus.indexOf( 'frigate' ) !== -1 }  onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyResilientVersusCruiser"  className="efficiencyResilientVersus"  checked={ this.state.unit.efficiency.resilient.versus.indexOf( 'cruiser' ) !== -1 }  onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyResilientVersusCapital"  className="efficiencyResilientVersus"  checked={ this.state.unit.efficiency.resilient.versus.indexOf( 'capital' ) !== -1 }  onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyVulnerableVersusFrigate" className="efficiencyVulnerableVersus" checked={ this.state.unit.efficiency.vulnerable.versus.indexOf( 'frigate' ) !== -1 } onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyVulnerableVersusCruiser" className="efficiencyVulnerableVersus" checked={ this.state.unit.efficiency.vulnerable.versus.indexOf( 'cruiser' ) !== -1 } onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyVulnerableVersusCapital" className="efficiencyVulnerableVersus" checked={ this.state.unit.efficiency.vulnerable.versus.indexOf( 'capital' ) !== -1 } onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="text"     name="special"                           className="special"                    value={ this.state.unit.special }                                                    onChange={ event => this.handleUnitChange( event) } />
			</div>
        );
	}
}
