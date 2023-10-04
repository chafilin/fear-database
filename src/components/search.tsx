import React from "react";
import {index} from "@/helpers/algoliasearch";
import { on } from "events";
import { Ghost } from "@/types";


type SearchProps = {
    onSubmit: (search: string) => void;
}

export const Search = ({onSubmit}: SearchProps) => {

    const [search, setSearch] = React.useState<string>('');

    const handleSearch = () => {
        onSubmit(search);
    }

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const onClear = () => {
        setSearch('');
        onSubmit('');
    }

    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={onSearch}/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={onClear}>Clear</button>
        </div>
        )
}
