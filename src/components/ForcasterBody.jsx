import React from 'react';
import '../styles/forcaster.css';
// import googlemap from '../assets/map.png';

const RealEstateForm = () => {
  return (
    <div class='forcaster-container'>
      {/* Left Section for Form Entries */}
      <div class='features-container'>
        <h2 class='forcaster-title'>Feature Engineering for Real Estate Price Prediction</h2>
        
        <form>
          <div class='feature'>
            <label class='feature-name'>Month</label>
            <input class='feature-case' type="number" name="mois" min="1" max="12" />
          </div>
          
          <div class='feature'>
            <label  class='feature-name'>Year</label>
            <input class='feature-case' type="number" name="annee" min="1900" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Postal Code</label>
            <input class='feature-case' type="number" name="code_postal" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Property Type</label>
            <select class='feature-case' name="type_local">
              <option class='option' value="Appartement">Appartement</option>
              <option class='option' value="Maison">Maison</option>
              <option class='option' value="Industriel">Industriel/Commercial/Assimilé</option>
            </select>
          </div>

          <div class='feature'>
            <label class='feature-name'>Surface Area (m²)</label>
            <input class='feature-case' type="number" step="any" name="surface_reelle_bati" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Number of Main Rooms</label>
            <input class='feature-case' type="number" name="nombre_pieces_principales" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Longitude</label>
            <input class='feature-case' type="number" name="longitude" step="any" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Latitude</label>
            <input class='feature-case' type="number" name="latitude" step="any" />
          </div>

          <div class='feature checkbox-group'>
            <div class='checkbox-item'>
              <label class='feature-name'>Monument (Y/N)</label>
              <input type="checkbox" name="monument" />
            </div>
            <div class='checkbox-item'>
              <label class='feature-name'>Park (Y/N)</label>
              <input type="checkbox" name="parc" />
            </div>
          </div>

          <div class='feature'>
            <label class='feature-name'>Commercial Index</label>
            <input class='feature-case' type="number" name="indice_commercial" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Educational Index</label>
            <input class='feature-case' type="number" name="indice_educatif" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Health Index</label>
            <input class='feature-case' type="number" name="indice_sante" />
          </div>

          <div class='feature'>
            <label class='feature-name'>Leisure Index</label>
            <input class='feature-case' type="number" name="indice_loisirs" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <button class='predict-btn' type="submit">Predict Price</button>
            <div class='predict-case'>
              <p id="predicted-price" style={{ fontSize: '20px', fontWeight: 'bold' }}>$389000</p>
            </div>
          </div>

        </form>
      </div>

      {/* Right Section for Map */}
      <div class='maps-container'>
        {/* Insert map component here */}
        <div style={{ height: '100%' }}>
          <h3>Map will go here</h3>
          {/* <img src={googlemap} className='google-map' alt='Map'></img> */}
        </div>
      </div>
    </div>
  );
};

export default RealEstateForm;
