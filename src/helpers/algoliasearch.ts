import algoliasearch from "algoliasearch/lite";
import { Ghost } from "../types/index";

export const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
    );

export const index = client.initIndex("fear-database");


export const searchGhosts = (search:string) => index.search<Ghost>(search).then(({ hits }) => hits);
