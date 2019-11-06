/*
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { CheckboxControl, PanelBody, PanelRow } from '@wordpress/components';
const { InspectorControls } = wp.editor;

class Inspector extends Component {
  render() {
    const { attributes, className, setAttributes} = this.props;
    const { checkboxField } = attributes;

    function onChangeCheckboxField( newValue ) {
  			setAttributes( { checkboxField: newValue } );
  	}

    return (
        <InspectorControls>
          <PanelBody title={ __( 'Card Settings', 'batch' ) }>
            <PanelRow>
              <CheckboxControl
      						label="Hover"
      						checked={ checkboxField }
      						onChange={ onChangeCheckboxField }
      					/>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
    );
  }
}

export default Inspector;
