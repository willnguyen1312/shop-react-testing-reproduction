import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it } from "vitest";

import { PolarisTestProvider } from "@shopify/polaris";
import { App } from "./App";
import { checkA11y } from "./testUtils";

describe("Testing App component with rtl", () => {
  it("should work for normal user", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <PolarisTestProvider>
        <App />
      </PolarisTestProvider>,
    );

    await checkA11y(container);

    const firstNumberInput = screen.getByLabelText(/First number/i);
    await user.click(firstNumberInput);
    await user.type(firstNumberInput, "10");

    const secondNumberInput = screen.getByLabelText(/Second number/i);
    await user.click(secondNumberInput);
    await user.type(secondNumberInput, "20");

    const submitButton = screen.getByText(/Calculate/i);
    await user.click(submitButton);

    const result = screen.getByRole("status");
    expect(result).toHaveTextContent("Result: 30");
    expect(result).toBeInTheDocument();
  });

  it("should work for keyboard-only user", async () => {
    const user = userEvent.setup();
    render(
      <PolarisTestProvider>
        <App />
      </PolarisTestProvider>,
    );

    const result = screen.getByRole("status");

    await user.tab();
    await user.keyboard("20");
    await user.keyboard("{enter}");
    expect(result).toHaveTextContent("Result: 20");

    await user.tab();
    await user.keyboard("30");
    await user.tab();
    await user.keyboard("{enter}");
    expect(result).toHaveTextContent("Result: 50");
  });
});
