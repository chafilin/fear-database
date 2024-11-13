import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import styles from "./page.module.css";
import { FilterTypes, Filters, Ghost, Question } from "@/types";
import Image from "next/image";

import ghosts from "@/data/ghosts.json";
import allFilters from "@/data/filters.json";
import { Root } from "@/components/root";

const Back = () => <Link href="/ghosts/search">Назад</Link>;

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const { id } = params;

  const ghost = ghosts.find((ghost) => ghost.id === id) as Ghost;
  const filters = allFilters as Question[];

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
    <Root>
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
          {makeParagraphs(ghost.description)}
          {ghost.influence && (
            <div>
              <div className={styles.influence_header}>
                Пример влияния {ghost.name} на людей
              </div>
              {makeParagraphs(ghost.influence)}
            </div>
          )}
        </div>
        <div className={styles.side}>
          <div className={styles.filters}>
            {humanReadableFilters.map((filter) => (
              <div key={filter}>{filter}</div>
            ))}
          </div>
        </div>
      </div>
      {ghost.image && (
        <div className={styles.image}>
          <Image
            src={ghost.image}
            alt={ghost.name}
            width={1000}
            height={1000}
            style={{
              width: "auto",
              height: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              objectPosition: "top",
            }}
          />
        </div>
      )}
    </Root>
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
