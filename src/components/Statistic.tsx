import styles from '../styles/Statistic.module.scss'

type StatisticProps = {
  value: string | number
  text: string
  backColor?: string
  fontColor?: string
}

export function Statistic(props: StatisticProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.value}
        style={{
          background: props.backColor ?? '#FDD60F',
          color: props.fontColor ?? '#333',
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  )
}
