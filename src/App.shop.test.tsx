import { describe, it } from "vitest";

import { Form, PolarisTestProvider, Text, TextField } from "@shopify/polaris";
import { mount } from "@shopify/react-testing";
import { App } from "./App";

describe("Testing App component with react-testing", () => {
  it("should work for nomal use", async () => {
    const wrapper = mount(
      <PolarisTestProvider>
        <App />
      </PolarisTestProvider>,
    );

    const firstValueInput = wrapper.find(TextField, {
      label: "First number",
    });
    const secondValueInput = wrapper.find(TextField, {
      label: "Second Number",
    });

    firstValueInput?.trigger("onChange", "10");
    secondValueInput?.trigger("onChange", "20");

    const form = wrapper.find(Form);
    form?.trigger("onSubmit");

    const result = wrapper.find(Text, {
      as: "h3",
    });

    expect(result).toContainReactText("Result: 30");
  });
});
