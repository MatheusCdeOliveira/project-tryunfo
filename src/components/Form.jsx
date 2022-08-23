import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="card-name">
            Nome
            <input
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
              name="cardName"
              id="card-name"
            />
          </label>
          <label htmlFor="card-description">
            Descrição
            <textarea
              name="cardDescription"
              defaultValue={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              id="card-description"
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="attr1">
            Attr1
            <input
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              name="cardAttr1"
              id="attr1"
            />
          </label>
          <label htmlFor="attr2">
            Attr2
            <input
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              name="cardAttr2"
              id="attr2"
            />
          </label>
          <label htmlFor="attr3">
            Attr3
            <input
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              name="cardAttr3"
              id="attr3"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
              name="cardImage"
              id="image-input"
            />
          </label>
          <label htmlFor="rare-card-input">
            Raridade
            <select
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              id="rare-card-input"
            >
              <option onChange={ onInputChange } value="normal">normal</option>
              <option onChange={ onInputChange } value="raro">raro</option>
              <option onChange={ onInputChange } value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              onChange={ onInputChange }
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="super-trunfo"
            />
          </label>
          <button
            type="submit"
            disabled={ isSaveButtonDisabled() }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            name="btn-salvar"
            id="btn-salvar"
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
