import React from 'react'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import { IdeaContainer } from '../../containers/IdeaContainer'

import "./style.css"

export const IdeasPage = () => {
    const tenders = [
        {
            date: new Date(2021, 2, 25),
            title: "А давайте что-то как сделаем, чтобы прям класно стало всем, а потом сделаем еще что-то.",
            content: "Жители Пермского края могут принять участие в совершенствовании внесудебной процедуры банкротства - на портале «Управляем вместе» стартовал онлайн-опрос, в котором пользователи могут поделиться мнениями о внесудебной процедуре банкротства физических лиц. К участию приглашаются граждане, на которых рассчитана данная процедура – физические лица с долгами в размере от 50 до 500 тыс. руб., не имеющие возможности их заплатить. ",
            userId: 1,
            likes: 28,
            dislikes: 1
        }
    ]
    return (
        <>
            <Main>

                <StyledTypographyHeader
                    title="Идеи и предложения"
                />
                <div className="tender__container">

                    <IdeaContainer
                        {...tenders[0]}
                        liked
                    />
                    <IdeaContainer
                        {...tenders[0]}
                        disliked
                    />

                </div>
            </Main>
        </>
    )
}
