import React, { use, useEffect, useState } from "react";
import useSWR from "swr";
import { Ghost } from "@/types";
import { useRouter } from "next/router";
import Link from "next/link";
import { index } from "@/helpers/algoliasearch";

function Page() {
  const router = useRouter();

  const [ghost, setGhost] = useState<Ghost>();

  useEffect(() => {
    if (router.query.name) {
      index.search<Ghost>(router.query.name as string).then(({ hits }) => {
        setGhost(hits[0]);
      });
    }
  }, [router.query.name]);

  if (ghost === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link href="/search">Back</Link>
      <h1>{ghost.name}</h1>
      <p>{ghost.description}</p>
      <ul>
        {ghost.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
