import styles from './pagination-button.module.scss';
import React from 'react';
import Image from 'next/image';

const PaginationButton = React.memo(({contentLength, page, setPage, setIsLoaded}) => {

    const onClickHandler = () => {
        if(page !== contentLength){
            if(setIsLoaded){
                setIsLoaded(false);
            };
            setPage(page + 1);
        };
    };
    
    return (
        <button className={styles.paginationButton} onClick={onClickHandler}>
            <span>Показать больше</span>
            <Image src="/images/svg/load-more.svg" alt="load-more" width={20}  height={20} />
        </button>
      )
    }
);

export default PaginationButton