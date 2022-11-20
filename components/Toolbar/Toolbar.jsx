import styles from './toolbar.module.scss';
import Image from 'next/image';

const Toolbar = () => {
  return (
    <div className={styles.toolbarWrapper}>
        <div className={styles.toolbarContentWrapper}>
            <div className={styles.toolbarContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, beatae quam nemo accusamus rem deleniti maiores ad iure adipisci tempore quae quis odio aperiam iusto asperiores. Animi eius veniam amet eum, officia doloribus enim tenetur fugit repudiandae sequi itaque voluptates possimus eligendi suscipit quos asperiores nisi quis repellendus facere aspernatur obcaecati. Accusantium beatae iure corporis nulla magni saepe illum, itaque dicta, sed excepturi, repudiandae eligendi maiores consectetur minus numquam. Recusandae vero provident dicta quidem. Obcaecati ipsa autem iste totam quibusdam illo. Porro impedit blanditiis incidunt facilis ex aut exercitationem fuga veniam eveniet! Blanditiis perspiciatis libero optio doloremque repellat sed, dicta, dolores accusantium tempora, odit vero consequuntur. Iure ducimus distinctio tempore earum sapiente? Corporis minus accusamus nam velit omnis? Suscipit id ea possimus earum dignissimos error. Nam minima, quaerat inventore reiciendis eius consectetur officiis quos vero error dolores laborum, sunt maiores, ex nulla ab pariatur exercitationem cumque? Odio, beatae quibusdam sed quaerat, veniam eligendi aperiam accusamus maxime eveniet dolor labore sit adipisci quas rerum. Laborum, accusantium saepe dolore minus in, quia ullam ratione maiores adipisci assumenda, quidem itaque quod praesentium magni! Asperiores quaerat consequuntur sequi, nesciunt ut necessitatibus reiciendis. Explicabo quos, animi, ad facilis reiciendis quod labore dolorem aperiam illo ex eligendi recusandae enim ipsum neque dolore omnis architecto delectus nesciunt, minima dignissimos. At aliquam ipsam odit harum error, accusamus repellendus. Ab recusandae eveniet voluptas neque, quisquam perspiciatis architecto error corporis tempore minima quas. Sunt nihil nulla velit corporis aliquam nam! Voluptatem dolore vero accusamus recusandae dolorem? Illo mollitia iure temporibus sint placeat obcaecati assumenda, doloribus minima ut amet tempore id dignissimos quo accusamus voluptate repellendus distinctio commodi. Temporibus omnis, voluptate delectus corporis ducimus dolore, porro, perferendis facilis aperiam reiciendis maxime blanditiis! Eos officia laboriosam beatae! Iusto tenetur porro veritatis. Non adipisci quis fugit, odio aperiam molestias officia at aliquid maiores modi accusamus blanditiis quas? Mollitia nostrum dolore pariatur deserunt alias, quibusdam, iste minus molestias corporis enim assumenda libero odit ab voluptatum veritatis, accusantium quidem incidunt minima? Itaque, reiciendis ipsa aliquam necessitatibus minus molestias asperiores laborum repudiandae quisquam debitis nam quas, quidem ut. A laboriosam ipsa ab, perspiciatis dignissimos vitae, sed, vero exercitationem explicabo voluptates dicta. Fugiat soluta sint delectus quaerat expedita provident facilis corrupti, rem perspiciatis minus error perferendis non commodi placeat alias accusamus repellat consequuntur? Numquam illo cum, deserunt dicta totam dolor, architecto, aliquam dolores natus eius hic. Ea tempora nisi maiores. Voluptate dolore doloribus officia. Doloribus totam rerum deleniti saepe necessitatibus vel et fuga hic, corrupti accusamus, nobis similique modi, quas obcaecati quo pariatur unde eius labore architecto soluta incidunt vitae atque. Unde quaerat, reprehenderit quae provident aliquid, eaque placeat quidem facere doloremque voluptatem harum aliquam magnam est sapiente voluptatibus. Ipsa quisquam debitis facilis, omnis ut voluptates doloribus aliquam iusto vero obcaecati ratione enim. Adipisci ipsum, porro quae error quod voluptates natus aliquid rerum, blanditiis rem iste ex ut tempora ab id! Impedit, quaerat iste debitis reprehenderit rerum, aliquid delectus temporibus quia laboriosam ex repellat quibusdam architecto maiores alias quis dolor nobis maxime ullam unde sit reiciendis blanditiis possimus deleniti fugit? Maiores similique iste ea nobis deleniti! Voluptates veritatis, animi non numquam corporis officia exercitationem sunt? Rem ad et deleniti voluptate aut quam modi placeat, est optio. Ut dicta eius animi placeat, voluptatum veritatis odit, excepturi soluta explicabo at labore repudiandae fugit numquam aut, corporis ad non voluptatem perspiciatis ab. Qui suscipit tempore repudiandae sint reiciendis maiores earum necessitatibus dicta quam aliquam? Tenetur dicta rerum vitae placeat provident corrupti? Dolore, repudiandae voluptatum assumenda excepturi voluptate reiciendis laboriosam temporibus aspernatur dolor unde illum maxime, minima, sit molestiae impedit modi libero at! Vero porro cum voluptatem blanditiis tenetur earum perspiciatis?
            </div>
        </div>
        <div className={styles.toolbar}>
        <div className={styles.toolbarItem}>
            <Image src="/images/svg/home-icon.svg" alt="home" width={24} height={24}/>
            <span>Главная</span>
        </div>
        <div className={styles.toolbarItem}>
            <Image src="/images/svg/menu-icon.svg" alt="menu" width={24} height={24}/>
            <span>Каталог</span>
        </div>
        <div className={styles.toolbarItem}>
            <Image src="/images/svg/cart-icon.svg" alt="cart" width={24} height={24}/>
            <span>Корзина</span>
        </div>
        <div className={styles.toolbarItem}>
            <Image src="/images/svg/more-icon.svg" alt="more" width={24} height={24}/>
            <span>Еще</span>
        </div>
        </div>
    </div>
  )
}

export default Toolbar