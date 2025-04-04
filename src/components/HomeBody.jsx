import '../styles/HomeBody.css'
import map from '../assets/finalmap.png'
import line from '../assets/line.png'  // Import the new line image

function HomeBody (){
    return (
        <div className='container'>
            <div className="text-container">
                <h1>Predict your property’s future value today!</h1>
                <button className="forcast-button">Start Forecasting</button>
            </div>
            <div className='map-container'>
                <img src={map} className='map-img' alt='Map'></img>
            </div>
            <div className='line-container'>
                <img src={line} className='line-img' alt='Decorative Line'></img>
            </div>
        </div>
    );
}

export default HomeBody;
