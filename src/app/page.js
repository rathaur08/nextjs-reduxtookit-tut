import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <h1>JetSetGo Aviation</h1>
        JetSetGo Aviation Services Private Limited. */}
        <Image
          className={styles.logo}
          // src='https://d3tfanr7troppj.cloudfront.net/static_files/images/000/003/056/original/ipal_logo.png?1569318045'
          // src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/852/original/JetSetGo_logo.png?1711014681"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={240}
          height={80}
          priority
        />
        <AddUser />
        <hr />
        <DisplayUser />
      </main>
    </div>
  );
}
