import React from "react";
import Link from "next/link";
import { getGhost } from "@/firebase/ghosts";
import { Header } from "@/components/header";
import styles from "./page.module.css";
import { FilterTypes, Filters, Question } from "@/types";
import { getFilters } from "@/firebase/filters";
import Image from "next/image";

const Back = () => <Link href="/ghosts/search">Назад</Link>;

export default async function Page({
  params: { name },
}: {
  params: { name: string };
}) {
  const ghost = await getGhost(name as string);
  const filters = await getFilters();

  if (ghost === undefined) {
    return (
      <div>
        <Back />
        <div>Данных нет</div>
      </div>
    );
  }
  const humanReadableFilters = getHumanReadableFilters(
    getFiltersWithoutNoOrUnknown(ghost.filters),
    filters
  );

  return (
    <div className={styles.root}>
      <Header
        title={ghost.name}
        backTitle="Определение призрака"
        backHref="/ghosts/search"
      />
      <div className={styles.bunishment}>
        <h2 className={styles.subheader}>Ритуал изгнания</h2>
        <ol className={styles.bunishment_list}>
          {ghost.bunishment.map((banishment) => (
            <li key={banishment}>{banishment}</li>
          ))}
        </ol>
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <div>{makeParagraphs(ghost.description)}</div>
          <div>
            <div className={styles.influence_header}>
              Пример влияния {ghost.name} на людей
            </div>
            <div>{makeParagraphs(ghost.influence)}</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.filters}>
            {humanReadableFilters.map((filter) => (
              <div key={filter}>{filter}</div>
            ))}
          </div>
          {ghost.image && (
            <div className={styles.image}>
              <Image
                src={ghost.image}
                alt={ghost.name}
                width={256}
                height={400}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const getFiltersWithoutNoOrUnknown = (filters: Filters) => {
  const result: Partial<Filters> = {};
  for (const [key, value] of Object.entries(filters)) {
    if (value !== "no" && value !== "unknown") {
      result[key as FilterTypes] = value;
    }
  }
  return result;
};

const getHumanReadableFilters = (
  ghost_filtes: Partial<Filters>,
  all_filters: Question[]
): string[] => {
  const result: string[] = [];
  for (const [key, value] of Object.entries(ghost_filtes)) {
    const filter = all_filters.find((filter) => filter.id === key);
    if (filter !== undefined) {
      if (filter.type === "radio") {
        const variant = filter.variants.find(
          (variant) => variant.value === value
        );
        if (variant !== undefined) {
          result.push(filter.text + ": " + variant.text);
        }
      } else {
        result.push(filter.text);
      }
    }
  }
  return result;
};

const makeParagraphs = (text: string) => {
  return text.split("/").map((paragraf, index) => {
    return <p key={index}>{paragraf}</p>;
  });
};
