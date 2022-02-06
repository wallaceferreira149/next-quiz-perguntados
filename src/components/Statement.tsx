import styles from '../styles/Statement.module.scss'

type StatementProps = {
  text: string
}

export function Statement(props: StatementProps) {
  return (
    <div className={styles.statement}>
      <span className={styles.text}>{props.text}</span>
    </div>
  )
}
