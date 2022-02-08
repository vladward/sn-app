import s from './Paginator.module.css'
import React, {useState} from "react";
import cn from "classnames";

type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPageHandler: (currentPage: number) => void
    portionSize: number
}

export const Paginator = ({
                              pageSize,
                              totalUsersCount,
                              currentPage,
                              setCurrentPageHandler,
                              portionSize = 10
                          }: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={s.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 setCurrentPageHandler(p);
                             }}>{p}</span>
            })}
    { portionCount > portionNumber &&
    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


</div>
}