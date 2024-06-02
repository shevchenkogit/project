import css from './genr.module.css'

const Genr = ({genres})=> {
    const {name} =  genres
    return (
        <div >
            <a href="">
                <div className={css.Genr}>{name}</div>
            </a>
        </div>
    );
}

export {Genr}