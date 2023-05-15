import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Disney+
        </title>
        <link rel='icon' href="../images/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  )
}
