import React from 'react'
import { Main } from '../../containers/Main'
import { StyledTypographyHeader } from '../../containers/StyledTypographyHeader'
import { TenderContainer } from '../../containers/TenderContainer'

export const TendersPage = () => {

    // const tenders = useSelector(s => s.tenders.list)

    const user = {
        name: "Ivan Ivanov Ivanovich",
        address: {
            city: "Земля"
        },
        phone: "+7 (999) 999 99 99",
        email: "fakemail@fake.fff",
        image: "https://images.unsplash.com/photo-1589155629431-f2fe9a9efc08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvdmlkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }

    const tenders = [
        {
            date: new Date(2021, 2, 25),
            userId: 1,
            comment: "На комплексе ППИ около гаражей снег не вывозится, а сгребается в огромную кучу. Местная детвора вырыла в горе пещеру и играет в ней. Над пещерой 2 метра плотного снега. Если он рухнет, то детей заживо похоронит под 2х метровым слоем. Надо срочно вывезти эту кучу!",
            category: "Дворы / Неубранный снег, гололед во дворе",
            photos: [
                "https://images.unsplash.com/photo-1566503732689-934bcd9a4d90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvY2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1600003014308-b91e8feb7dbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                "https://images.unsplash.com/photo-1595350576574-c04292c1b371?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvY2F0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ],
            status: 0,
            address: "Пермь ГО, Пермь, Профессора Дедюкина, 8",
            likes: 28,
            dislikes: 1,
            user
        }
    ]
    return (
        <Main>
            <StyledTypographyHeader
                title="Идеи и предложения"
            />
            <div className="tender__container">
                <TenderContainer
                    {...tenders[0]}
                    liked
                />
                <TenderContainer
                    {...tenders[0]}

                />
                <TenderContainer
                    {...tenders[0]}
                    liked
                />
                <TenderContainer
                    {...tenders[0]}
                    disliked
                />
                <TenderContainer
                    {...tenders[0]}

                />
            </div>
        </Main>
    )
}
