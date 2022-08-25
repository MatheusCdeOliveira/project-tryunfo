import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    savedCards: [],
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  btnSave = () => {
    const { cardName, cardImage, cardDescription, savedCards, cardTrunfo } = this.state;
    const obj = { cardName, cardImage, cardDescription, cardTrunfo };
    this.setState({
      savedCards: [...savedCards, obj],
      hasTrunfo: [...savedCards, obj].some((element) => element.cardTrunfo),
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    });
    document.getElementById('card-name').value = '';
    document.getElementById('card-description').value = '';
    document.getElementById('image-input').value = '';
  };

  deletar = (item) => {
    const { savedCards } = this.state;
    console.log(item);
    const filteredCards = savedCards
      .filter((element) => (element.cardName === item ? !element : element));
    const isTrunfo = filteredCards.filter((element) => element.cardTrunfo);
    this.setState({ savedCards: filteredCards, hasTrunfo: isTrunfo.length > 0 });
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;
    const isValid = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0;
    const number1 = Number(cardAttr1);
    const number2 = Number(cardAttr2);
    const number3 = Number(cardAttr3);
    const limite90 = 90;
    const limite210 = 210;
    const attValid1 = number1 <= limite90 && number1 >= 0
    && (number1 + number2 + number3 <= limite210);
    const attValid2 = number2 <= limite90 && number2 >= 0
    && (number1 + number2 + number3 <= limite210);
    const attValid3 = number3 <= limite90 && number3 >= 0
    && (number1 + number2 + number3 <= limite210);
    const numbers = attValid1 && attValid2 && attValid3;
    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ !isValid || !numbers }
          onSaveButtonClick={ this.btnSave }
          hasTrunfo={ hasTrunfo }
        />
        {savedCards.map((element) => (<Card
          key={ element.cardName }
          cardName={ element.cardName }
          cardDescription={ element.cardDescription }
          cardAttr1={ element.cardAttr1 }
          cardAttr2={ element.cardAttr2 }
          cardAttr3={ element.cardAttr3 }
          cardImage={ element.cardImage }
          cardRare={ element.cardRare }
          cardTrunfo={ cardTrunfo }
          deletar={ this.deletar }
        />))}
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
