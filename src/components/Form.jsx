import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="card-name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="card-name"
              id=""
            />
          </label>
          <label htmlFor="card-description">
            Descrição
            <textarea
              data-testid="description-input"
              name="card-description"
              id=""
              cols="30"
              rows="10"
            />
          </label>
          <label htmlFor="attr1">
            Attr1
            <input type="number" data-testid="attr1-input" name="attr1" id="" />
          </label>
          <label htmlFor="attr2">
            Attr2
            <input type="number" data-testid="attr2-input" name="attr2" id="" />
          </label>
          <label htmlFor="attr3">
            Attr3
            <input type="number" data-testid="attr3-input" name="attr3" id="" />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="image-input"
              id=""
            />
          </label>
          <label htmlFor="rare-card-input">
            Raridade
            <select name="rare-card-input" data-testid="rare-input" id="">
              <option value="">options</option>
              <option value="">normal</option>
              <option value="">raro</option>
              <option value="">muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="super-trunfo"
              id=""
            />
          </label>
          <button
            type="submit"
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

export default Form;
