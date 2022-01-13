import { Card, CardContent,Grid} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import digitalStore from '../../../assets/digital-store.jpg'

const useStyle = makeStyles(()=>({
    card: {
        // border:'2px solid black',
        height:600,
        width:900,
        borderRadius:19,
        boxShadow:'5px 5px 5px 5px #888888'
    },
    loginContainer:{
        // border:'2px solid black',
        height:596,
        display:'flex'
    },
    loginContainerItem:{
        // border:'2px solid black',
        width:'50%'
    },
    image:{
        height: '596px',
        width: '100%',
    }
}))

const Login = () => {
    const classes = useStyle();


    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
            <Card className={classes.card}>
                <CardContent style={{padding:0}}>
                    <div className={classes.loginContainer}>
                        <div className={classes.loginContainerItem}>

                        </div>
                        <div className={classes.loginContainerItem}>
                            <img src={digitalStore} className={classes.image}/>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
