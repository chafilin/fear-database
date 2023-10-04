import { Ghost } from "../types";
import { TagsList } from "@/components/tagslist";
import { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { searchGhosts } from "@/helpers/algoliasearch";
import { SearchBar } from "@/components/searchbar";

export default function Ghosts() {
  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const [filtered, setFiltered] = useState<Ghost[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    searchGhosts(search).then((hits) => {
      setGhosts(hits);
    });
  }, [search]);

  // add checked tag to list of checked tags
  // remove unchecked tag from list of checked tags
  const [checked, setChecked] = useReducer(
    (state: string[], action: string) => {
      if (state.includes(action)) {
        return state.filter((tag) => tag !== action);
      } else {
        return [...state, action];
      }
    },
    [],
  );

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  useEffect(() => {
    if (checked.length > 0) {
      setFiltered(
        ghosts.filter((item) =>
          checked.every((tag) => item.tags.includes(tag)),
        ),
      );
    } else {
      setFiltered(ghosts);
    }
  }, [checked, ghosts]);

  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      <Link href="/">Главная</Link>
      <SearchBar onSubmit={setSearch} />
      <TagsList ghosts={ghosts} onCheck={onCheck} filtered={filtered} />
      {filtered.map((item) => (
        <div key={item.name}>
          <Link href={"/ghosts/" + item.name}>
            <h1>{item.name}</h1>
          </Link>
          <p>{item.description}</p>
          <ul>
            {item.tags.map((tag) => (
              <li key={item.name + tag}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
