import { FC } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import { PageLayout } from "../../layouts"
import { PageItem } from "../../components/page-item"
import { dataContent } from "./lib/dataContent"

interface IMethodologicalKP {}

export const MethodologicalKP: FC<IMethodologicalKP> = () => {
    return (
        <PageLayout title="Методичні рекомендації до виконання курсових проектів та робіт">
            {dataContent.map((e, i) => (
                <PageItem {...e} key={i} />
            ))}
        </PageLayout>
    )
}
