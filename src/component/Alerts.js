import React from 'react'
import { Alert } from 'antd';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect'
// import { selectAlerts } from '../redux/alert/alert.selectors'

// const alertstyle = {
//     Width:'60vw',
    
// }

function Alerts({alert}) {
    if(alert.length>0){ 
    console.log(alert);
    return(<div style={{position: 'absolute',margin:'auto'}}>
    {alert.map(alerts => (
        <div style={{margin:'10px 100px 10px 100px',width:'80vw'}}>
        <Alert message={alerts.msg} type={alerts.alertType} showIcon />
        </div>
    ))}

    </div>)
    }
    else{
        return(<></>)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
    //   signIn: (creds) => dispatch(signIn(creds))
    }
  }

const mapStateToProps = state => ({
    alert: state.alerts
})

export default connect(mapStateToProps,mapDispatchToProps)(Alerts)