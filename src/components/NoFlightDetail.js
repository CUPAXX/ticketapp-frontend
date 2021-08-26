import React from 'react'

const NoFlightDetail = () => {
  return (
    <div style={styles.zeroItem}>
      <p style={styles.zeroItemText}>Zero ticket has been found, please make sure you have chosen one</p>
    </div>
  )
}

const styles = {
  zeroItem: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
    alignItems: 'center'
  },
  zeroItemText: {
    fontSize: '50px',
    fontFamily: 'Poppins',
    color: '#fff'
  }
}

export default NoFlightDetail
