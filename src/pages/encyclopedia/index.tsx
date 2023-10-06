import { getEncyclopedia } from "@/firebase/encyclopedia";
import { EncyclopaediaPost } from "@/types";
import Link from "next/link";
import React, { useEffect } from "react";

const EncyclopediaList = () => {
  const [encyclopedia, setEncyclopedia] = React.useState<EncyclopaediaPost[]>(
    []
  );

  useEffect(() => {
    getEncyclopedia().then((encyclopedia) => {
      setEncyclopedia(encyclopedia);
    });
  }, []);

  return (
    <div>
      <Link href="/">Главная</Link>
      {encyclopedia.map((encyclopedia) => (
        <div key={encyclopedia.title}>
          <Link href={"/encyclopedia/" + encyclopedia.id}>
            <h1>{encyclopedia.title}</h1>
          </Link>
          <p>{encyclopedia.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EncyclopediaList;
