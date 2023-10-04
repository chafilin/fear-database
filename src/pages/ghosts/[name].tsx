import React from "react";
import useSWR from 'swr';
import { Ghost } from "@/types";
import { useRouter } from 'next/router'
import Link from 'next/link';

import {fetcher} from '@/helpers/fetcher';

function Page() {
    const router = useRouter()

    const {data: response, error, isLoading} = useSWR('/api/staticdata', fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (isLoading) return <div>Loading...</div>;
    let data: Ghost[] = JSON.parse(response);

    const ghost = data.find((item) => item.name === router.query.name);
    if (ghost === undefined ){
        return <div>Failed to load</div>;
    }
    return (
        <div>
            <Link href="/">Back</Link>
            <h1>{ghost.name}</h1>
            <p>{ghost.description}</p>
            <ul>
                {ghost.tags.map((tag) => (
                <li key={tag}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default Page;
