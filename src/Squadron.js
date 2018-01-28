import React, { Component } from 'react';

export default class extends Component {
    constructor( props ) {
        super( props );
        this.squadron = { ...props };
    }

    handleAmountChange( event ) {
        this.squadron.amount = parseInt( event.target.value, 10 )
        this.props.unitChanged( this.squadron );
    }

    handleUnitChange( event ) {
        this.squadron.unit[ event.target.name ] = event.target.value;
        this.props.unitChanged( this.squadron );
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
        const damageType = this._weapon( event.target.name );
        this.squadron.unit.weapon[ damageType ] = event.target.value;
        this.props.unitChanged( this.squadron );
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
        const damageType = this._shield( event.target.name );
        this.squadron.unit.shield[ damageType ] = ( 1.0 - ( event.target.value / 100 ) ).toFixed( 2 );
        this.props.unitChanged( this.squadron );
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
        const damageType = this._armor( event.target.name );
        this.squadron.unit.armor[ damageType ] = ( 1.0 - ( event.target.value / 100 ) ).toFixed( 2 );
        this.props.unitChanged( this.squadron );
    }

    _efficiency( name ) {
        const efficiency = name.split( "Versus" );
        return [ efficiency[ 0 ].substr( 10 ).toLowerCase(), efficiency[ 1 ].toLowerCase() ];
    }
    handleEfficiencyChange( event ) {
        const value = this._efficiency( event.target.name );
        const efficiency = value[ 0 ];
        const versus = value[ 1 ];
        const checked = event.target.checked;
        if( checked ) {
            this.squadron.unit.efficiency[ efficiency ].versus.push( versus );
        } else {
            const hullClasses = this.squadron.unit.efficiency[ efficiency ].versus.filter( ( hullClass, i ) => hullClass !== versus );
            this.squadron.unit.efficiency[ efficiency ].versus = hullClasses;
        }
        this.props.unitChanged( this.squadron );
    }

	render() {
		return (
			<div className="squadron">
				<input type="number"    name="amount" className="amount"        value={ this.squadron.amount }         onChange={ event => this.handleAmountChange( event ) } min={ 0 } />
                <input type="text"      name="type"   className="type"          value={ this.squadron.unit.type }      onChange={ event => this.handleUnitChange( event ) } />
                <fieldset                 id={ "hullClass-" + this.props.id }   value={ this.squadron.unit.hullClass } onChange={ event => this.handleUnitChange( event ) }>
                    <input type="radio" name={ "hullClass-" + this.props.id }   value="frigate" defaultChecked={ this.squadron.unit.hullClass === 'frigate' } />
                    <input type="radio" name={ "hullClass-" + this.props.id }   value="cruiser" defaultChecked={ this.squadron.unit.hullClass === 'cruiser' } />
                    <input type="radio" name={ "hullClass-" + this.props.id }   value="capital" defaultChecked={ this.squadron.unit.hullClass === 'capital' } />
                </fieldset>
                <input type="number"   name="baseDamageExplosive"               className="baseDamageExplosive"        value={ this.squadron.unit.weapon.explosive }                                           onChange={ event => this.handleWeaponChange( event) }     min={ 0 } />
                <input type="number"   name="baseDamageKinetic"                 className="baseDamageKinetic"          value={ this.squadron.unit.weapon.kinetic }                                             onChange={ event => this.handleWeaponChange( event) }     min={ 0 } />
                <input type="number"   name="baseDamageThermal"                 className="baseDamageThermal"          value={ this.squadron.unit.weapon.thermal }                                             onChange={ event => this.handleWeaponChange( event) }     min={ 0 } />
                <input type="checkbox" name="efficiencyStrongVersusFrigate"     className="efficiencyStrongVersus"     checked={ this.squadron.unit.efficiency.strong.versus.indexOf( 'frigate' ) !== -1 }     onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyStrongVersusCruiser"     className="efficiencyStrongVersus"     checked={ this.squadron.unit.efficiency.strong.versus.indexOf( 'cruiser' ) !== -1 }     onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyStrongVersusCapital"     className="efficiencyStrongVersus"     checked={ this.squadron.unit.efficiency.strong.versus.indexOf( 'capital' ) !== -1 }     onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyWeakVersusFrigate"       className="efficiencyWeakVersus"       checked={ this.squadron.unit.efficiency.weak.versus.indexOf( 'frigate' ) !== -1 }       onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyWeakVersusCruiser"       className="efficiencyWeakVersus"       checked={ this.squadron.unit.efficiency.weak.versus.indexOf( 'cruiser' ) !== -1 }       onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyWeakVersusCapital"       className="efficiencyWeakVersus"       checked={ this.squadron.unit.efficiency.weak.versus.indexOf( 'capital' ) !== -1 }       onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="number"   name="shieldExplosive"                   className="shieldExplosive"            value={ Math.round( ( 1.0 - this.squadron.unit.shield.explosive ) * 100 ) }               onChange={ event => this.handleShieldChange( event) }     min={ 0 } max={ 100 } />
                <input type="number"   name="shieldKinetic"                     className="shieldKinetic"              value={ Math.round( ( 1.0 - this.squadron.unit.shield.kinetic ) * 100 ) }                 onChange={ event => this.handleShieldChange( event) }     min={ 0 } max={ 100 } />
                <input type="number"   name="shieldThermal"                     className="shieldThermal"              value={ Math.round( ( 1.0 - this.squadron.unit.shield.thermal ) * 100 ) }                 onChange={ event => this.handleShieldChange( event) }     min={ 0 } max={ 100 } />
                <input type="number"   name="armorExplosive"                    className="armorExplosive"             value={ Math.round( ( 1.0 - this.squadron.unit.armor.explosive ) * 100 ) }                onChange={ event => this.handleArmorChange( event) }      min={ 0 } max={ 100 } />
                <input type="number"   name="armorKinetic"                      className="armorKinetic"               value={ Math.round( ( 1.0 - this.squadron.unit.armor.kinetic ) * 100 ) }                  onChange={ event => this.handleArmorChange( event) }      min={ 0 } max={ 100 } />
                <input type="number"   name="armorThermal"                      className="armorThermal"               value={ Math.round( ( 1.0 - this.squadron.unit.armor.thermal ) * 100 ) }                  onChange={ event => this.handleArmorChange( event) }      min={ 0 } max={ 100 } />
                <input type="checkbox" name="efficiencyResilientVersusFrigate"  className="efficiencyResilientVersus"  checked={ this.squadron.unit.efficiency.resilient.versus.indexOf( 'frigate' ) !== -1 }  onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyResilientVersusCruiser"  className="efficiencyResilientVersus"  checked={ this.squadron.unit.efficiency.resilient.versus.indexOf( 'cruiser' ) !== -1 }  onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyResilientVersusCapital"  className="efficiencyResilientVersus"  checked={ this.squadron.unit.efficiency.resilient.versus.indexOf( 'capital' ) !== -1 }  onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyVulnerableVersusFrigate" className="efficiencyVulnerableVersus" checked={ this.squadron.unit.efficiency.vulnerable.versus.indexOf( 'frigate' ) !== -1 } onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyVulnerableVersusCruiser" className="efficiencyVulnerableVersus" checked={ this.squadron.unit.efficiency.vulnerable.versus.indexOf( 'cruiser' ) !== -1 } onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="checkbox" name="efficiencyVulnerableVersusCapital" className="efficiencyVulnerableVersus" checked={ this.squadron.unit.efficiency.vulnerable.versus.indexOf( 'capital' ) !== -1 } onChange={ event => this.handleEfficiencyChange( event) } />
                <input type="text"     name="special"                           className="special"                    value={ this.squadron.unit.special }                                                    onChange={ event => this.handleUnitChange( event) } />
			</div>
        );
	}
}
