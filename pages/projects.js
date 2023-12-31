import Head from 'next/head'
import { Inter } from 'next/font/google'
import Dashboard from '@/components/Dashboard'
import { TeamsChart } from '@/components/TeamsChart'
import Image from 'next/image'
import { ProjectDeliveriesChart } from '@/components/ProjectDeliveriesChart'
import Notifications from '@/components/Notifications'
import { CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material'
import { useState } from 'react'
import { ThemeContext } from '@/contexts/themeContext'
export default function Home() {
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
       <Dashboard>
       <Typography sx={{mt:3, color:mode==="dark"&&"#fff"}} component="h1" variant="h5" >Projects</Typography>
       </Dashboard>
        </ThemeProvider>
      </ThemeContext.Provider >
    </>
  )
}
