import Image from "next/image";
import Logo from "../public/Logo.svg";
import styles from './styles.module.css';

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex items-center justify-center">
          <Image className={styles.webLogo} src={Logo} alt={"logo"}></Image>
        </div>
        <main className="justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hi, I'm Janush!
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              This website is currently under construction!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
