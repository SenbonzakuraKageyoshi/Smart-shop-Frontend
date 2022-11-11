import styles from './catalog-menu.module.scss';
import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CatalogMenu = ({catalogOpened}) => {

    const catalogMenu = useMemo(() => {
        return [
          {id: 1, title: 'Гироскутеры', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 2, title: 'Электросамокаты', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 3, title: 'Моноколеса', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 4, title: 'Сигвеи и мини-сигвеи', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 5, title: 'Электроскутеры', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 6, title: 'Электровелосипеды', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 7, title: 'Электроскейты', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 8, title: 'Электромобили', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 9, title: 'Аксессуары', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 10, title: 'Умные игрушки', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
          {id: 11, title: 'Умные игрушки', href: '/catalog', iconSrc: '/images/svg/catalog-item-icon.svg'},
        ];
    }, [])

  return (
    <ul className={styles.catalogList}>
        {catalogMenu.map((item) => (
            <li className={styles.catalogListItem} key={item.id}>
                <Link href={item.href} legacyBehavior>
                    <a className={styles.catalogListLink}>
                        <Image src={item.iconSrc} width={32} height={32} alt="catalog-item-icon"/>
                        <span>{item.title}</span>
                    </a>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default CatalogMenu