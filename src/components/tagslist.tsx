import React from "react";
import { Ghost } from "@/types";
import styles from './tagslist.module.css'


type TagsListProps = {
    ghosts: Ghost[];
    onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filtered: Ghost[];
};

function TagsList({ghosts, onCheck, filtered}: TagsListProps){
    let tags: string[] = ghosts.map((item) => item.tags).flat();
    //enable tags that are in list of filtered ghosts if filtered ghosts is not empty
    const disable = (tag: string) => {
        if (filtered.length > 0) {
            return !filtered.some((item) => item.tags.includes(tag));
        }
        return false;
    }

    //Remove duplicates
    tags = [...new Set(tags)];
    return (
        // checkbox for each tag
        <div className={styles.taglist}>
            {tags.map((tag) => (
                <div key={tag}>
                    <input type="checkbox" disabled={disable(tag)} name={tag} value={tag} onChange={onCheck} />
                    <label className={styles.tag} key={tag}>
                        {tag}
                    </label>
                </div>
            ))}
        </div>
    );
}

export {TagsList};
