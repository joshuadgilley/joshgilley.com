import styles from "../../styles/Layout.module.css";
import Link from "next/link";
import FacebookIconLink from "./FacebookIconLink";
import TwitterIconLink from "./TwitterIconLink";
import InstagramIconLink from "./InstagramIconLink";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id={styles.layout}>
        <div id={styles.navbar}>
          <div className={styles.navItem}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/about">About</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
        {children}
        <div id={styles.footer}>
          <div className={styles.socialIcon}>{<FacebookIconLink />}</div>
          <div className={styles.socialIcon}>{<TwitterIconLink />}</div>
          <div className={styles.socialIcon}>{<InstagramIconLink />}</div>
        </div>
      </div>
    </>
  );
}
