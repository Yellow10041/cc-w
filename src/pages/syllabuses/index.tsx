import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import { PageLayout } from "../../layouts"
import { PageItem } from "../../components/page-item"
import { dataContent } from "./lib/dataContent"
import axios from "axios"
import { Loading } from "@/components/loading"

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
    const [data, setData] = useState([])
    const [isLoading, srtLoading] = useState<boolean>(true)

    useEffect(() => {
        const apiKey = "AIzaSyDUWS_3nDunYCHjO_FznDxHOqx9blUfLW8"
        const spreadsheetId = "1ZMyB17QsOKgMFqbpI9OMz6okr1xsO3MeYWtxDLrbEZQ"
        const range = "Sheet1"

        axios
            .get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`)
            .then((response) => {
                setData(response.data.values.slice(1))
                srtLoading(false)
            })
            .catch((error) => {
                console.error("Error:", error)
            })
    }, [])
    return (
        <PageLayout title="Дисципліни (силабуси)">
            {/* {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
        ))} */}
            {isLoading && <PageItem content={<Loading />} />}
            {data[0] && (
                <PageItem
                    content={data.map((e, i) => {
                        const Wrapper = e[1] ? "a" : "div"

                        return (
                            <p key={i}>
                                <Wrapper target="_blank" href={e[1]}>
                                    {e[0]}
                                </Wrapper>
                            </p>
                        )
                    })}
                />
            )}
        </PageLayout>
    )
}
