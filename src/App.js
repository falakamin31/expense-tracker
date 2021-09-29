/* eslint-disable no-undef */
import React, {useEffect,useRef} from 'react'
import Details from "./components/Details/Details"
import Main from "./components/Main/Main"
import { Grid } from "@material-ui/core"
import useStyles from "./style"
import  {PushToTalkButton, PushToTalkButtonContainer,ErrorPanel} from "@speechly/react-ui";
import {speechState, useSpeechContext} from "@speechly/react-client"

const App = () => {
  const classes  =useStyles();
  const {speechState} = useSpeechContext();
  const main = useRef(null);
  const executeScroll = () => main.current.scrollIntroView();
  useEffect(() => {
    if(speechState === speechState.Recording){
      executeScroll();
    }
   
  }, [speechState])


  return (
    <div>
      <Grid className={classes.grid}container spacing={0} alignItems="center" justify="center" style={{ height: "100vh"}}>
      <Grid items xs={12} sm={4} className={classes.mobile}>
        <Details title="Income"/>
        </Grid>

        <Grid red={main} items xs={12} sm={3}  className={classes.main}>
          <Main/>
          </Grid>

        <Grid items xs={12} sm={4}  className={classes.desktop}>
        <Details title="Income"/>
        </Grid>
        
        <Grid items xs={12} sm={4}  className={classes.last}>
        <Details title="Expense"/>
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton/>
        <ErrorPanel/>
      </PushToTalkButtonContainer>
      
    </div>
  )
}

export default App
