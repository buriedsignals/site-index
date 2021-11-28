import styles from "./spacer.module.css";

export default function Spacer({ multiplier = 1 }) {
  return (
    <div
      className={styles.spacer}
      style={{ height: `${multiplier * 8}px` }}
    ></div>
  );
}
