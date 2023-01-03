import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box, Typography, useTheme } from '@mui/material';
import TypingEffect from '../components/common/TypingEffect';
import ConstantsContext from '../context/constantsContext';
import MainLayout from '../components/common/MainLayout';
import * as React from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { pages } = React.useContext(ConstantsContext);

  return (
    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout pageData={pages!.home}>
        <main className={styles.main}>
          <div className={styles.description}>
            <div id={styles.navbar}>
              <div className={styles.navItem}>
              <Link href='/about'>About</Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/blog'>Blog</Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/projects'>Projects</Link>
              </div>
            </div>
            {/* <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div> */}
          </div>
          <div className={styles.center}>
            <div className={styles.myName}>
              <h1>I'm Josh</h1>
            </div>
            <div className={styles.typingEffect}>
              <Box>
                <TypingEffect staticText="I am a" text={['software engineer', 'cloud developer']} />
              </Box>
            </div>
          </div>
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Docs <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Learn <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Templates <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Deploy <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Instantly deploy your Next.js site to a shareable URL
                with&nbsp;Vercel.
              </p>
            </a>
          </div>
        </main>
      </MainLayout>
    </>
  )
}
