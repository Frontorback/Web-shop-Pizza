
import './PizzaSection.css'

const PizzaSection = (props) =>{
    return (
        <main>
            {props.item.map((key) =>(
                props.type === key.category  || props.type === 0?
                <div key={key.id} className='main-section'>
                    <img className='pizza-img' src={key.imageUrl} alt='pizza'></img>
                    <div className='pizza-name'>{key.name}</div>
                    <div className='pizza-settings'>
                        <div className='f-settings'>
                            <div>тонкое</div>
                            <div>tr</div>
                        </div>
                        <div className='length-settings'>
                            <div>22</div>
                            <div>33</div>
                            <div>44</div>
                        </div>
     
                    </div>
                    <div className='price-section'>
                        <div className='price'>от {key.price} грн</div>
                        <div className='add-pizza'>+ Добавить  </div>
                    </div>
                </div>
                : null
            ))}
        </main>
    )
}
export default PizzaSection