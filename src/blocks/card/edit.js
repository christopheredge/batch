/*
 * Plugin dependencies
 */

/*
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
import { InnerBLocks, MediaUpload, LinkControl } from '@wordpress/block-editor';
const { Button } = wp.components;
/*
 * Allowed blocks
 */
 /*
  * Edit Function
  */
class Edit extends Component {
  render() {
    const { attributes, className, setAttributes, isSelected } = this.props;
    const {
      bgURL,
      bgALT,
      bgID,
    } = attributes;
    const onSelectImage = img => {
      setAttributes({
        bgURL: img.url,
        bgALT: img.alt,
        bgID: img.id,
      });
    };
    const onRemoveImg = () => {
      setAttributes({
        bgUrl: null,
        bgALT: null,
        bgID: null,
      });
    };
    return (
      <Fragment>
        {! bgID ? (
            <MediaUpload
              onSelect= { onSelectImage }
              type='image'
              render={ ( { open } ) => (
              <Button
                  className={ 'button button-large' }
                  onClick={ open }
                  >
                    { __('Upload Image') }
                  </Button>
              ) }
              >
            </MediaUpload>
        ) : (
          <div class="card" style={ {backgroundImage: `url(${bgURL})`}}>
            { isSelected ? (
              <Button className="button button-large" onClick={ onRemoveImg }>Remove Image</Button>
            ) : null }
          </div>
        ) }
      </Fragment>
    );
  }
}

export default Edit;
