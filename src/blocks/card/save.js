const save = (props) => {
  const { bgURL } = props.attributes;
  return(
    <div class="card" style={ {backgroundImage: `url(${bgURL})`}}>
      <div class="card__content">
        <div class="card__title">
          <h2>Financing</h2>
        </div>
        <div class="card__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut erat a lorem dictum volutpat. Quisque felis neque, volutpat sed elementum in, ultricies.</p>
        </div>
      </div>
      <div class="card__nav">
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default save;
