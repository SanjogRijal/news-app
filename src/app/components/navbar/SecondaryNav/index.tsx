import { Link, Toolbar } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TOP_HEADLINES_API } from "./constants";

export default function SecondaryNavComponent({ sections }: { sections: Array<{ title: string, url: string }> }) {


    const NavLinks = useMemo(() => {
        return sections.map((section) => (
            <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0 }}
            >
                {section.title}
            </Link>
        ))

    }, [sections]);
    // const getData = async () => {
    //     const data = (await fetch(baseUrl));
    //     console.log(data);
    // }

    // useEffect(() => {
    //     console.log(getData());
    //     console.log(baseUrl)
    // }, [])
    // console.log(baseUrl)
    return <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
    >
        {NavLinks}
    </Toolbar>
}