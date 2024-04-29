import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";
import SortOptions from "./components/SortOptions/SortOptions";
import contacts from "../public/contacts.json";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortedContacts, setSortedContacts] = useState([...contacts]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      particlesJS.load("particles-js", "/particles.json", function () {
        console.log("callback - particles.js config loaded");
      });
    }
  }, []);

  useEffect(() => {
    filterAndSort();
  }, [searchTerm, sortBy]);

  const filterAndSort = () => {
    let filtered = contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });

    switch (sortBy) {
      case "firstName":
        filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case "lastName":
        filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));
        break;
      case "warmth":
        filtered.sort((a, b) => b.warmth - a.warmth);
        break;
      default:
        break;
    }

    setSortedContacts(filtered);
  };

  return (
    <div className={styles.background}>
      <div id="particles-js" className={styles.particles}></div>
      <div className={styles.container}>
        <Head>
          <title>Contacts</title>
          <meta name="author" content="newalina" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.title}>
            <h1>Contacts</h1>
            <div className={styles.nav}>
              <SearchBar onSearch={setSearchTerm}></SearchBar>
              <SortOptions sortBy={sortBy} setSortBy={setSortBy}></SortOptions>
            </div>
          </div>
          <ContactList contacts={sortedContacts}></ContactList>
        </main>
      </div>
    </div>
  );
}
