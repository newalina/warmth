import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const contacts = [
    {
      id: 0,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily@email.com",
      phone: "(000) 000-0000",
      imageUrl: "profile.png",
    },
    {
      id: 1,
      firstName: "Michael",
      lastName: "Smith",
      email: "michael@email.com",
      phone: "(111) 111-1111",
      imageUrl: "profile.png",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Williams",
      email: "sarah@email.com",
      phone: "(222) 222-2222",
      imageUrl: "profile.png",
    },
    {
      id: 3,
      firstName: "Christopher",
      lastName: "Brown",
      email: "christopher@email.com",
      phone: "(333) 333-3333",
      imageUrl: "profile.png",
    },
    {
      id: 4,
      firstName: "Jessica",
      lastName: "Davis",
      email: "jessica@email.com",
      phone: "(444) 444-4444",
      imageUrl: "profile.png",
    },
    {
      id: 5,
      firstName: "Matthew",
      lastName: "Wilson",
      email: "matthew@email.com",
      phone: "(555) 555-5555",
      imageUrl: "profile.png",
    },
    {
      id: 6,
      firstName: "Olivia",
      lastName: "Taylor",
      email: "olivia@email.com",
      phone: "(666) 666-6666",
      imageUrl: "profile.png",
    },
    {
      id: 7,
      firstName: "Ethan",
      lastName: "Martinez",
      email: "ethan@email.com",
      phone: "(777) 777-7777",
      imageUrl: "profile.png",
    },
    {
      id: 8,
      firstName: "Sophia",
      lastName: "Anderson",
      email: "sophia@email.com",
      phone: "(888) 888-8888",
      imageUrl: "profile.png",
    },
    {
      id: 9,
      firstName: "Alexander",
      lastName: "Garcia",
      email: "alexander@email.com",
      phone: "(999) 999-9999",
      imagePath: "profile.png",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts</title>
        <meta name="author" content="newalina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contacts</h1>

        <div className={styles.list}>
          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>

          <div className="contact">
            <details className={styles.details}>
              <summary className={styles.summary}>
                <span>
                  <p>Alina Kim</p>
                  <Image
                    className={styles.profile}
                    src="/profile.png"
                    height="40"
                    width="40"
                    alt="profile picture"
                  />
                </span>
              </summary>
            </details>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dapibus rutrum feugiat. Curabitur dictum ex eget tellus congue
                fringilla. In finibus lorem quis lacus vulputate fermentum.
                Aliquam tristique felis sed mauris sagittis pharetra. Integer
                justo velit, volutpat et semper pulvinar, scelerisque eget leo.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
