import styles from './PromoText.module.css'

const PromoText = () => {
    return (
    <section className={styles['promo-text']}>
        <h2>Кухня Онлайн</h2>
        <p>
            Онлайн кухня - это домашний ресторан, в котором выши любимые блюда готовит команда профессиональных поваров
        </p>
        <p>
            Быстрая работа и качественная продукция, а также самые настоящие 
            компоненты придают хороший вкус блюдам, дарят насыщение от трапезы
        </p>
    </section>
    )
}

export default PromoText