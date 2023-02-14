import { graphql } from "msw";

const handlers = [
  graphql.query("HomeScreenQuery", (_req, res, ctx) => {
    return res(
      ctx.data({
        currentUser: {
          id: 1,
          name: "Angel",
        },
      })
    );
  }),
];

export { handlers };
