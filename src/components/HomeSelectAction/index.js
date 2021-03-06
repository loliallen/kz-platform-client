import React from 'react'
import { withStyles, Tabs, AppBar, Toolbar } from "@material-ui/core"
import StyledColoredTab from '../../containers/StyledColoredTab'
import { MessageSendIcon } from '../../containers/Icons/MessageSend'
import { ChatIcon } from '../../containers/Icons/Chat'
import { LightIcon } from '../../containers/Icons/Light'
import { BillNoteIcon } from '../../containers/Icons/BillNote'
import { WarnFileIcon } from '../../containers/Icons/WarnFile'
import { useHistory } from "react-router-dom"


const StyledAppBar = withStyles({
    root: {
        position: "absolute",
        height: "20vh",
        bottom: "24px",
        boxShadow: "none",
        '@media (max-width: 1000px)' : {
            bottom: "0px",
            height: 100
        }
    }
})(AppBar)

const StyledTabs = withStyles({
    flexContainer: {
        justifyContent: "center"
    },
    root: {
        height: "20vh",
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "20px",
        '@media (max-width: 1000px)' : {
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            height: 100

        }
    },
    indicator: {
        display: "none",
    },
})(Tabs)


const StyledToolbar = withStyles({
    gutters: {
        marginLeft: "11%",
        marginRight: "11%",
        paddingLeft: "0px",
        paddingRight: "0px",
        '@media (max-width: 1000px)' : {
            marginLeft: "0px",
            marginRight: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            height: 100
        },
        '@media (max-width: 1200px)' : {
            marginLeft: "0px",
            marginRight: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            height: 100
        }
    },

})(Toolbar)


export const HomeSelectAction = ({
    value,
    setValue
}) => {
    const handleChange = (e, newValue) => setValue(newValue + (width > 800 ? 0 : 1))

    const width = window.innerWidth

    const isMobile = width > 800


    return (
        <StyledAppBar
            position="relative"
            color="transparent"
        >
            <StyledToolbar>
                <StyledTabs
                    color="primary"
                    onChange={handleChange}
                    value={value}
                >
                        { isMobile && <StyledColoredTab icon={<MessageSendIcon style={{width: "5vh", height: "5vh"}}  />} hoverColor="blue" label={"???????????? ??????????????????"} />}
                        <StyledColoredTab icon={<WarnFileIcon style={{width: "5vh", height: "5vh"}} />} hoverColor="red" label={ !isMobile ? "????????????????" :"?????????????????? ?? ??????????????????"} />
                        <StyledColoredTab icon={<ChatIcon style={{width: "5vh", height: "5vh"}}  />} hoverColor="blue2" label={ !isMobile ? "??????????????" : <><div style={{
                            fontSize: "2.75vh",
                            textAlign: "left",
                            alignItems: "start",
                            lineHeight: "26.4px",
                            textTransform: "none",
                            fontWeight: 500
                        }}>?????????????? </div><div style={{
                            fontSize: "2.75vh",
                            textAlign: "left",
                            alignItems: "start",
                            lineHeight: "26.4px",
                            textTransform: "none",
                            fontWeight: 500
                        }}>??????????????</div></>} wordBreak={true}/>
                        <StyledColoredTab icon={<BillNoteIcon style={{width: "5vh", height: "5vh"}} />} hoverColor="purple" label={ !isMobile ? "??????????????" :"???????????????????? ????????????????"} />
                        <StyledColoredTab icon={<LightIcon style={{width: "5vh", height: "5vh"}} />}hoverColor="green" label={ !isMobile ? "????????" :"???????? ?? ??????????????????????"} />
                </StyledTabs>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default HomeSelectAction
