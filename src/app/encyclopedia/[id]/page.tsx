"use client";
import { getEncyclopediaPost } from "@/firebase/encyclopedia";
import { EncyclopaediaPost } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Back = () => <Link href="/encyclopedia">Назад</Link>;

const EncyclopaediaPost = () => {
  const params = useParams();
  const { id } = params;

  const [encyclopedia, setEncyclopedia] =
    React.useState<EncyclopaediaPost | null>(null);

  useEffect(() => {
    getEncyclopediaPost(id as string).then((encyclopedia) => {
      setEncyclopedia(encyclopedia);
    });
  }, []);

  if (!encyclopedia) {
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
      <h1>{encyclopedia.title}</h1>
      <p>{encyclopedia.description}</p>
    </div>
  );
};

export default EncyclopaediaPost;
