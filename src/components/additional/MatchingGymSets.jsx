import { Link } from "react-router-dom"

function MatchingGymSets() {
    return (
        <div className='matching-sets-container' style={{backgroundColor: 'var(--matching-gym-sets-background)'}}>
            <div className='mathing-sets-text'>
                <h2 className="matching-sets-title">MATCHING <br /> GYM WEAR <br /> SETS</h2>
                <p className='matching-sets-subtitle'>Comfortable and fashionable gym <br /> wear sets for Men and Women.</p>
                <Link to='/shop' className="matching-sets-shop">Shop</Link>
            </div>
            <img src="/public/woman-posing.jpg" alt="woman in green gym set posing and smiling" className='matching-sets-image' />
        </div>
    )
}

export default MatchingGymSets