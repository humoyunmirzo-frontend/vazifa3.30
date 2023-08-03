import Dashboard from '@/components/Dashboard'
import { ThemeContext } from '@/contexts/themeContext'
import { teams } from '@/data/teams'
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
export default function designers() {
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <Head>
        <title>Teams | Designers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
        <Dashboard>
          <Grid container sx={{ mt: 3 }} spacing={3}>
            {teams[0].members.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={2}>
                <div className="card">
                  <Image className="card-img-top w-100 h-25" objectFit={"cover"} src={item.img} alt="Image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Group: {item.groupName}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Dashboard>
      </ThemeProvider>
    </ThemeContext.Provider >
        </>
  )
}