import { FC, useState } from "react"
import clsx from "clsx"
import styles from "./index.module.scss"
import { IContact } from "@/types/contacts.interface"

interface IContacts {
    data: IContact[]
}

export const ContactsSection: FC<IContacts> = ({ data }) => {
    const [itemsPerRow, setItemsPerRow] = useState<number>(2)

    return (
        <div className={clsx(styles.contacts)}>
            {Array(Math.ceil(data.length / itemsPerRow))
                .fill(null)
                .map((_, i) => {
                    return (
                        <div className={clsx(styles.contacts_container)} key={i}>
                            {data.slice(i * itemsPerRow, itemsPerRow * (i + 1)).map((el, ind) => (
                                <div className={clsx(styles.contacts_container_item)} key={ind}>
                                    <img className={clsx(styles.contacts_container_item_img)} src={el.img} alt="" />
                                    <div className={clsx(styles.contacts_container_item_info)}>
                                        <div className={clsx(styles.contacts_container_item_info_header)}>
                                            <div className={clsx(styles.contacts_container_item_info_header_title)}>{el.name}</div>
                                            <div className={clsx(styles.contacts_container_item_info_header_items)}>
                                                {el.info?.map((infoItem, i) => (
                                                    <div className={clsx(styles.contacts_container_item_info_header_items_item)} key={i}>
                                                        {infoItem}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={clsx(styles.contacts_container_item_info_socials)}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                })}
        </div>
    )
}
