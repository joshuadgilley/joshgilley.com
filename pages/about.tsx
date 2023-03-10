import Head from "next/head";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>Josh Gilley</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
          name="viewport"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <Image
              src="/newJosh.jpeg"
              alt="ItMe"
              width={300}
              height={500}
              className={styles.img}
              priority={true}
            />
          </div>
          <div className={styles.about}>
            <p>
              Software engineer based out of Charleston, SC with a computer
              science degree and over 3 years of experience in the industry.
              Experienced, as a full-stack developer, in maintaining both
              front-end and back-end web applications. Strong problem-solving
              skills and the ability to effectively communicate technical
              concepts to both technical and non-technical audiences.&nbsp;
            </p>
            <p>
              Able to work independently as well as part of a team, and have a
              strong focus on delivering high-quality products. In my previous
              roles, I have worked on a variety of projects ranging from small
              business websites to scalable cloud computing solutions. I am
              constantly seeking to learn and stay up-to-date on the latest
              technologies and industry best practices.&nbsp;
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
