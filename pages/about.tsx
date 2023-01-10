import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Josh Gilley</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' name='viewport' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Software engineer based out of Charleston, SC with a computer
            science degree and over 2 years of experience in the industry.
            Proficient in a variety of programming languages including
            JavaScript, HTML, CSS, and React.js. Experienced in developing and
            maintaining both front-end and back-end web applications. Strong
            problem-solving skills and the ability to effectively communicate
            technical concepts to both technical and non-technical audiences.&nbsp;
          </p>
          <p>
          Able to work independently as well as part of a team, and have a
            strong focus on delivering high-quality products. In my previous
            roles, I have worked on a variety of projects ranging from small
            business websites to large-scale e-commerce platforms. I am
            constantly seeking to learn and stay up-to-date on the latest
            technologies and industry best practices.&nbsp;
          </p>
        </div>
      </main>
    </>
  );
}
