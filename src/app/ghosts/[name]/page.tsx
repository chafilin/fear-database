import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getGhost } from "@/firebase/ghosts";

const Back = () => <Link href="/ghosts/search">Назад</Link>;

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  const ghost = await getGhost(name as string);

  if (ghost === undefined) {
    return (
      <div>
        <Back />
        <div>Данных нет</div>
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
