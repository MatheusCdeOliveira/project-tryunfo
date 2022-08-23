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
    // hasTrunfo: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // validationBtn = () => {
  //   const { cardName, cardDescription, cardImage, cardRare,
  //     cardAttr1, cardAttr2, cardAttr3 } = this.state;
  //   const isValid = cardName.length > 0
  //   && cardDescription.length > 0
  //   && cardImage.length > 0
  //   && cardRare.length > 0;
  //   const number1 = Number(cardAttr1);
  //   const number2 = Number(cardAttr2);
  //   const number3 = Number(cardAttr3);
  //   const limite90 = 90;
  //   const limite210 = 210;
  //   const attValid1 = number1 <= limite90 && number1 >= 0
  //   && (number1 + number2 + number3 <= limite210);
  //   const attValid2 = number2 <= limite90 && number2 >= 0
  //   && (number1 + number2 + number3 <= limite210);
  //   const attValid3 = number3 <= limite90 && number3 >= 0
  //   && (number1 + number2 + number3 <= limite210);
  //   const numbers = attValid1 && attValid2 && attValid3;
  //   return !isValid || !numbers;
  // };

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
      // hasTrunfo: false,
      isSaveButtonDisabled,
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
        />
        <Card
          // onInputChange={ this.handleChange }
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
