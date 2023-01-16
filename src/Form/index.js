import { currencies } from "../Currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Button, Field, LabelText, Legend, Fieldset, StyledForm, AdditionalInformation } from "./styled";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState("");

  const findCurrency = () => currencies.find(({ short }) => short === currency);
  const calculateResult = () => {
    setResult({
      currency,
      targetAmount: amount / findCurrency().rate,
      rate: findCurrency().rate,
      sourceAmount: +amount,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>CURRENCY CALCULATOR</Legend>
        <p>
          <label>
            <LabelText>
              Amount in PLN (zł):*
            </LabelText>
            <Field
              placeholder="Amount in PLN (zł)"
              type="number" min="0"
              step={0.01}
              required
              value={amount}
              autoFocus
              onChange={({ target }) => setAmount(target.value)} />
          </label>
        </p>
        <p>
          <label>
            <LabelText>
              Choose currency: *
            </LabelText>
            <Field
              as="select"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map(currency => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))};
            </Field>
          </label>
        </p>
        <p>
          <Button>Count!</Button>
        </p>
        <Result result={result} />
        <AdditionalInformation>*Required field</AdditionalInformation>
        <AdditionalInformation>Exchange rate from 08. 01. 2023.</AdditionalInformation>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;