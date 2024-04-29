import styles from "./SortOptions.module.css";

export default function SortOptions({ sortBy, setSortBy }) {
  return (
    <div className={styles.sort}>
      <fieldset className={styles.fieldset}>
        <legend>Sort</legend>
        <div>
          <input
            type="radio"
            id="firstName"
            name="sortOptions"
            value="firstName"
            checked={sortBy === "firstName"}
            onChange={() => setSortBy("firstName")}
          />
          <label htmlFor="firstName">First name</label>
        </div>

        <div>
          <input
            type="radio"
            id="lastName"
            name="sortOptions"
            value="lastName"
            checked={sortBy === "lastName"}
            onChange={() => setSortBy("lastName")}
          />
          <label htmlFor="lastName">Last name</label>
        </div>

        <div>
          <input
            type="radio"
            id="warmth"
            name="sortOptions"
            value="warmth"
            checked={sortBy === "warmth"}
            onChange={() => setSortBy("warmth")}
          />
          <label htmlFor="warmth">Warmth</label>
        </div>
      </fieldset>
    </div>
  );
}
