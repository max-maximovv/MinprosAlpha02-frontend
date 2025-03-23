import styles from "./blue-block.module.css";

export default function BlueBlock(props) {
  return (
    <div className={styles.blueBlock}>
      <div
        className={styles.blueBlockLeft}
        style={{
          backgroundImage: 'url("/imgs/backgrounds/bg-blue-сopy.png")',
        }}
      >
        {props.left}
      </div>
      <div className={styles.blueBlockRight}>{props.right}</div>
    </div>
  );
}
