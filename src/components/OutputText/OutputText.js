import React from 'react'
import styles from './OutputText.module.css'

const OutputText = ({ digits, error }) => {
  return (
    <>
      <div className={styles.OutputText}>
        {digits}
      </div>
      {error && <div className={`${styles.OutputText} ${styles.InputError}`}>
        {error}
      </div>}
    </>
  )
}

export default React.memo(OutputText)
