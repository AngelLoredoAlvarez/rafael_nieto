/**
 * @jest-environment jsdom
 */

import { HomeScreen } from "@app/components/src/HomeScreen";
import { renderWithClient } from "@app/utils";
import * as React from "react";

describe("<HomeScreen />", () => {
  it("it renders the Home Page text", async () => {
    const result = renderWithClient(<HomeScreen />);

    expect(await result.findByText(/home page/i)).toBeInTheDocument();
  });

  it("it renders the name Angel that comes from the Mock", async () => {
    const result = renderWithClient(<HomeScreen />);
    expect(await result.findByText(/angel/i)).toBeInTheDocument();
  });
});
