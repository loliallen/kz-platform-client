import React, { useCallback, useEffect } from 'react'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import { IdeaContainer } from '../../containers/IdeaContainer'

import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import { StyledButton } from '../../containers/StyledButton'
import ideaAction from "../../storage/actions/ideaActions"
import { useHistory } from 'react-router'

export const IdeasPage = () => {
    const ideas = useSelector(s => s.idea.list)
    const dispatch = useCallback(useDispatch())
    const isAuthed = useSelector(s => s.app.isAuthed)
    const history = useHistory()

    const handleCreate = () => history.push("/ideas/idea/create")

    useEffect(()=>{
        dispatch(ideaAction.request())
    }, [])
    return (
        <>
            <Main>

                <StyledTypographyHeader
                    title="Идеи и предложения"
                />
                {isAuthed && <div className="create_container">
                    <StyledButton
                        color="primary"
                        variant="contained"
                        onClick={handleCreate}
                    >Предложить идею</StyledButton>
                </div>}
                {/* <div className="tender__container">
                    {ideas.map((idea, key) => {
                        return <IdeaContainer
                            key={key}
                            {...idea}
                        />
                    })}
                </div> */}
                <div className="appeals_container">
                    <div>
                        {ideas.slice(0, Math.round(ideas.length / 2)).map((idea, i) => {
                            return <IdeaContainer key={i} {...idea} style={{ marginBottom: 20 }}/>
                        })}
                    </div>
                    <div>
                        {ideas.slice(Math.round(ideas.length / 2), ideas.length).map((idea, i) => {
                            return <IdeaContainer key={i} {...idea} style={{ marginBottom: 20 }}/>
                        })}
                    </div>
                </div>
            </Main>
        </>
    )
}
