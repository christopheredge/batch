/*
 * Plugin dependencies
 */
import Inspector from './inspector';
/*
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
const { LinkControl, RichText, URLInputButton } = wp.blockEditor;
import { Button } from '@wordpress/components';
/*
 * Allowed blocks & Template
 */
/*
 * Edit Function
 */
class Edit extends Component {
  render() {
    const { attributes, className, setAttributes, isSelected } = this.props;
    const { cardHeading, cardParagraph, cardUrl, checkboxField } = attributes;
    return (
      <Fragment>
        <Inspector { ...this.props } />
        <div class="batch-card">
          <div class="batch-card__content">
            <div class="batch-card__title">
              <RichText
                tagName="h2"
                placeholder="Card Heading"
                value={ cardHeading }
                onChange={ ( cardHeading ) => setAttributes( { cardHeading } ) }
              />
            </div>
            <div class="batch-card__description">
              <RichText
                tagName="p"
                placeholder="Card description..."
                value={ cardParagraph }
                onChange={ ( cardParagraph ) => setAttributes( { cardParagraph } ) }
              />
            </div>
          </div>
          <div class="batch-card__nav">
            <URLInputButton
              url={ cardUrl }
              onChange={ ( cardUrl ) => setAttributes( { cardUrl } ) }
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Edit;
