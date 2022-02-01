import s from './Paginator.module.css'
import React from "react";

type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPageHandler: (currentPage: number) => void
}

export const Paginator = ({pageSize, totalUsersCount, currentPage, setCurrentPageHandler}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>{pages.map((p, i) => {
                    return <span key={i}
                                 style={{backgroundColor: "rosybrown", border: "1px solid black"}}
                                 onClick={() => setCurrentPageHandler(p)}
                                 className={currentPage === p ? s.currentPage : ''}
                    >{p}</span>
                }
            )}</div>
}