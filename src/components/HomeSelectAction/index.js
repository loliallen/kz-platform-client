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
        height: "160px",
        bottom: "24px",
        boxShadow: "none"
    }
})(AppBar)

const StyledTabs = withStyles({
    flexContainer: {
        justifyContent: "center"
    },
    root: {
        height: "160px",
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "20px"
    },
    indicator: {
        display: "none",
    },
})(Tabs)


const StyledToolbar = withStyles({
    gutters: {
        marginLeft: "11%",
        marginRight: "11%"
    }
})(Toolbar)


export const HomeSelectAction = ({
    value,
    setValue
}) => {
    const handleChange = (e, newValue) => setValue(newValue)
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
                        <StyledColoredTab icon={<MessageSendIcon style={{width: "30px", height: "30px"}}  />} hoverColor="blue" label="Подать обращение" />
                        <StyledColoredTab icon={<WarnFileIcon style={{width: "30px", height: "30px"}} />} hoverColor="red" label="Сообщайте о проблемах" />
                        <StyledColoredTab icon={<ChatIcon style={{width: "30px", height: "30px"}}  />} hoverColor="blue2" label="Местные новости" />
                        <StyledColoredTab icon={<BillNoteIcon style={{width: "30px", height: "30px"}} />} hoverColor="purple" label="Обсуждение тендеров" />
                        <StyledColoredTab icon={<LightIcon style={{width: "30px", height: "30px"}} />}hoverColor="green" label="Идеи и предложения" />
                </StyledTabs>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default HomeSelectAction
