import css from './productionCountries.module.css'

const ProductionCountries = ({country})=> {
    const {name} =  country
    return (
        <div className={css.Countries}>
                <div className={css.Counry}>{name}</div>
        </div>
    );
}

export {ProductionCountries}