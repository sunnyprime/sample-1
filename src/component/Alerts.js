import React from 'react'
import { Alert } from 'antd';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect'
// import { selectAlerts } from '../redux/alert/alert.selectors'

const alertstyle = {
    Width:'60vw',
    
}

function Alerts({states,message,type,hidden}) {
    console.log(states);
    console.log(message);
    
    
    return (
        <div>
        <div style={alertstyle}>
            <Alert message={message} type={type} showIcon />


        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    states:state,
    hidden:state.alerts.hidden,
    type:state.alerts.type,
    message:state.alerts.message
})

// const mapStateToProps = createSelector({
//     message: selectAlerts
//   });

export default connect(mapStateToProps,null)(Alerts)
