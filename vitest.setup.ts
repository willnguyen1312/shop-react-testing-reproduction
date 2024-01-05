import { destroyAll } from "@shopify/react-testing";
import "@shopify/react-testing/matchers";
import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import { afterEach } from "vitest";

afterEach(() => {
  destroyAll();
});
