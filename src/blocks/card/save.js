const { RichText } = wp.blockEditor;
const save = ({ attributes }) => {
  const { cardHeading, cardParagraph, cardUrl } = attributes;
  return(
    <div class="card">
      <div class="card__content">
        <div class="card__title">
          <h2>
            { !RichText.isEmpty(cardHeading) &&
              <RichText.Content
                tag="h2"
                className="card__titleHeading"
                value={ cardHeading }
                />
            }
          </h2>
        </div>
        <div class="card__description">
          <p>
            { !RichText.isEmpty(cardParagraph) &&
              <RichText.Content
                tag="p"
                className="card__titleHeading"
                value={ cardParagraph }
                />
            }
          </p>
        </div>
      </div>
      <div class="card__nav">
        <a href={ cardUrl }>Learn More</a>
      </div>
    </div>
  );
};

export default save;
