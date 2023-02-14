/**
 * @jest-environment jsdom
 */

import { createWrapper } from "@app/utils";
import { renderHook, waitFor } from "@testing-library/react";

import { useHomeScreenQuery } from "../src/queries/useHomeScreenQuery";

describe("useHomeScreenQuery hook", () => {
  it("the hook runs successfully", async () => {
    const { result } = renderHook(() => useHomeScreenQuery(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.currentUser?.id).toBe(1);
    expect(result.current.data?.currentUser?.name).toBe("Angel");
  });
});
