import { getEncyclopediaPost } from "@/firebase/encyclopedia";
import Link from "next/link";
import React from "react";

const Back = () => <Link href="/encyclopedia">Назад</Link>;

const EncyclopediaPost = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const encyclopedia = await getEncyclopediaPost(id as string);

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

export default EncyclopediaPost;
