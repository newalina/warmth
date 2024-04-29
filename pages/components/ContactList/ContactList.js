import React from "react";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  const mapWarmth = (warmth) => {
    if (warmth >= 90 && warmth <= 100) {
      return { warmthTag: "hot", warmthColour: "#f95738" };
    } else if (warmth >= 70 && warmth < 90) {
      return { warmthTag: "very warm", warmthColour: "#ee964b" };
    } else if (warmth >= 50 && warmth < 70) {
      return { warmthTag: "moderately warm", warmthColour: "#f4D35e" };
    } else if (warmth >= 30 && warmth < 50) {
      return { warmthTag: "moderately cool", warmthColour: "#a8dadc" };
    } else if (warmth >= 10 && warmth < 30) {
      return { warmthTag: "very cool", warmthColour: "#759fbc" };
    } else {
      return { warmthTag: "cold", warmthColour: "#1f5673" };
    }
  };

  return (
    <div className={styles.list}>
      {contacts.map((contact) => (
        <div key={contact.id} className="contact">
          <details className={styles.details}>
            <summary className={styles.summary}>
              <span className={styles.contact}>
                <p>
                  {contact.firstName} {contact.lastName}
                </p>
                <img
                  className={styles.profile}
                  src={contact.imageUrl}
                  height="40"
                  width="40"
                  alt={`${contact.firstName} ${contact.lastName}'s profile picture`}
                />
              </span>
            </summary>
          </details>
          <div className="content">
            <div className={styles.info}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {" • "}
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
            <p>
              You and {contact.firstName} are{" "}
              <strong style={{ color: mapWarmth(contact.warmth).warmthColour }}>
                {mapWarmth(contact.warmth).warmthTag}
              </strong>
              . You last communicated with them {contact.lastCommunicated}. On
              average, you interact with them {contact.frequency}, and it’s
              mostly on {contact.primaryChannel}. Your warmth score with{" "}
              {contact.firstName} is{" "}
              <strong style={{ color: mapWarmth(contact.warmth).warmthColour }}>
                {contact.warmth}
              </strong>
              .
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
