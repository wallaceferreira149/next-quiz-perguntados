import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.scss'

type TimerProps = {
  key: number
  duration: number
  timeOut: () => void
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeOut}
        colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']}
        colorsTime={[10, 5, 3, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
