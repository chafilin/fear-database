import React from "react";

type SearchProps = {
  onSubmit: (search: string) => void;
};

export const SearchBar = ({ onSubmit }: SearchProps) => {
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = () => {
    onSubmit(search);
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClear = () => {
    setSearch("");
    onSubmit("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={onSearch}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};
