'use client'

import { Container, Grid } from '@mui/material';
import CardComponent from './components/CoreComponents/Card'
import { TOP_HEADLINES_API } from './components/navbar/SecondaryNav/constants';
import { useState, useEffect, useMemo } from 'react';
import HomepageComponent from './homepage/page';

export default function Home() {


  return (
    <main>
      <HomepageComponent />
    </main>
  )
}
