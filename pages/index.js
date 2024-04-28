import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactList from "./components/ContactList";
import contacts from "../public/contacts.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts</title>
        <meta name="author" content="newalina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contacts</h1>

        <ContactList contacts={contacts}></ContactList>
      </main>
    </div>
  );
}
