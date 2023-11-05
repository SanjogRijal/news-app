'use client'

import { Container, Grid } from '@mui/material';
import CardComponent from '../components/CoreComponents/Card';
import { TOP_HEADLINES_API } from '../components/navbar/SecondaryNav/constants';
import { useState, useEffect, useMemo } from 'react';

export default function HomepageComponent() {
    const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL as string;
    const completeURL = baseUrl + TOP_HEADLINES_API + '/technology/in.json';
    const [topHeadlines, setTopHeadlines] = useState<any[]>()
    const getTopHeadlines = async () => {
        const topHeadlinesData = await (await fetch(completeURL)).json();
        setTopHeadlines(topHeadlinesData.articles);

    }
    useEffect(() => {
        getTopHeadlines();
    }, [])

    const headlinesList = useMemo(() => {
        console.log(topHeadlines);
        return topHeadlines?.map((headline) => {
            return <Grid key={JSON.stringify(headline)} spacing={4} p={4}>
                <Grid item xs={12} sm={6} md={4}><CardComponent imageUrl={headline.urlToImage} heading={headline.title} shortContent={headline.description} fullArticle={headline.content} />
                </Grid>
            </Grid>
        })
    }, [topHeadlines])

    return headlinesList
}