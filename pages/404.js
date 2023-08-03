import Head from 'next/head'
import { Typography } from '@mui/material'
export default function Home() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <div style={{minHeight:"100vh"}} className="d-flex flex-column align-items-center justify-content-center">
        <Typography variant="h6">Page not found | <span className="text-danger">404</span></Typography>
    </div >
    </>
  )
}