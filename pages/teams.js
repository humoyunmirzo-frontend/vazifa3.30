import Head from 'next/head'
import Dashboard from '@/components/Dashboard'
import { CssBaseline, Grid, ThemeProvider, Typography, createTheme } from '@mui/material'
import { useState } from 'react'
import { ThemeContext } from '@/contexts/themeContext'
import { teams } from '@/data/teams'
import { useRouter } from 'next/router'
export default function Home() {
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Teams</title>
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
            <Grid spacing={3} sx={{mt:2}} container>
              {
                teams.map((item, index) => (
                  <Grid sx={{cursor:"pointer"}} onClick={(()=> router.push(router.pathname + item.path))} key={index} item xs={12} sm={6} md={3} lg={4}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-subtitle">
                          Quantity of members: {item.members.length}
                        </div>
                      </div>
                    </div>
                  </Grid>

                ))
              }
            </Grid>
          </Dashboard>
        </ThemeProvider>
      </ThemeContext.Provider >
    </>
  )
}
