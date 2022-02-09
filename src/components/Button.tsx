import Link from 'next/link'
import styles from '../styles/Button.module.scss'

type ButtonProps = {
  text: string
  href?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
  return props.href ? (
    <Link href={props.href} passHref>
      <button className={styles.button} onClick={props.onClick}>
        {props.text}
      </button>
    </Link>
  ) : (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
