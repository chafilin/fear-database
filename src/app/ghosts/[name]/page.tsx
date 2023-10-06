"use client";
import React, { useEffect, useState } from "react";
import { Ghost } from "@/types";
import { useParams } from "next/navigation";
import Link from "next/link";

import { getGhost } from "@/firebase/ghosts";

const Back = () => <Link href="/ghosts">Назад</Link>;

function Page() {
  const params = useParams();

  const [ghost, setGhost] = useState<Ghost>();

  useEffect(() => {
    if (params.name) {
      getGhost(params.name as string).then((ghost) => {
        setGhost(ghost);
      });
    }
  }, [params.name]);

  if (ghost === undefined) {
    return (
      <div>
        <Back />
        <div>Загрузка...</div>
      </div>
    );
  }

  return (
    <div>
      <Back />
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
