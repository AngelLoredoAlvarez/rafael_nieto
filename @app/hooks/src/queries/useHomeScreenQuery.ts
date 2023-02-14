import { graphql } from "@app/graphql";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

const HomeScreenQueryDocument = graphql(/* GraphQL */ `
  query HomeScreenQuery {
    currentUser {
      id
      name
    }
  }
`);

const fetchHomeScreenQuery = async () => {
  return await request(
    "http://localhost:5678/graphql",
    HomeScreenQueryDocument,
    {}
  );
};

export const useHomeScreenQuery = () => {
  return useQuery({
    queryKey: ["HomeScreenQuery"],
    queryFn: fetchHomeScreenQuery,
  });
};
