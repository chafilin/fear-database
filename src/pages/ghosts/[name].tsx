import React, { use, useEffect, useState } from "react";
import useSWR from "swr";
import { Ghost } from "@/types";
import { useRouter } from "next/router";
import Link from "next/link";
import { index } from "@/helpers/algoliasearch";
import { getGhost } from "@/firebase/ghosts";

function Page() {
  const router = useRouter();

  const [ghost, setGhost] = useState<Ghost>();

  useEffect(() => {
    if (router.query.name) {
      getGhost(router.query.name as string).then((ghost) => {
        setGhost(ghost);
      });
    }
  }, [router.query.name]);

  if (ghost === undefined) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <Link href="/ghosts">Back</Link>
      <h1>{ghost.name}</h1>
      <p>{ghost.description}</p>
      <p>{ghost.influence}</p>
      <ol>
        {ghost.bunishment.map((banishment) => (
          <li key={banishment}>{banishment}</li>
        ))}
      </ol>
    </div>
  );
}

export default Page;
