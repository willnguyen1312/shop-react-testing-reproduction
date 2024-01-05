import { Page, Text } from "@shopify/polaris";
import { useState } from "react";

import { Button, Form, TextField } from "@shopify/polaris";

export function App() {
  const [result, setResult] = useState(0);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  function handleSubmit() {
    setResult(firstValue + secondValue);
  }

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <TextField
          type="number"
          value={firstValue.toString()}
          onChange={(value) => setFirstValue(+value)}
          label="First number"
          autoComplete="off"
        />
        <TextField
          type="number"
          value={secondValue.toString()}
          onChange={(value) => setSecondValue(+value)}
          label="Second Number"
          autoComplete="off"
        />

        <Text visuallyHidden as="h3">
          Result: {result}
        </Text>

        <p role="status">Result: {result}</p>

        <Button submit>Calculate</Button>
      </Form>
    </Page>
  );
}
