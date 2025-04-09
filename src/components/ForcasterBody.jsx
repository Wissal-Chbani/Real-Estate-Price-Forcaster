import React, { useState } from 'react';
import axios from 'axios';
import '../styles/forcaster.css';

const RealEstateForm = () => {
  const [formData, setFormData] = useState({
    mois: '',
    annee: '',
    code_postal: '',
    type_local: 'Maison',
    surface_reelle_bati: '',
    nombre_pieces_principales: '',
    longitude: '',
    latitude: '',
    Monument: 0,
    Parc: 0,
    indice_commercial: '',
    indice_educatif: '',
    indice_sante: '',
    indice_loisirs: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    // Ensure that numeric values like surface_reelle_bati, longitude, and latitude are parsed as floats
    const dataToSend = {
      code_postal: parseInt(formData.code_postal),
      surface_reelle_bati: parseFloat(formData.surface_reelle_bati), // ensure this is a float
      nombre_pieces_principales: parseInt(formData.nombre_pieces_principales),
      longitude: parseFloat(formData.longitude), // ensure this is a float
      latitude: parseFloat(formData.latitude), // ensure this is a float
      Monument: parseInt(formData.Monument),
      Parc: parseInt(formData.Parc),
      Indice_Commercial: parseInt(formData.indice_commercial),
      Indice_Educatif: parseInt(formData.indice_educatif),
      Indice_Sante: parseInt(formData.indice_sante),
      Indice_Loisirs: parseInt(formData.indice_loisirs),
      year: parseInt(formData.annee),
      month: parseInt(formData.mois),
      'type_local_Local industriel. commercial ou assimilé': formData.type_local === 'Industriel' ? 1 : 0,
      'type_local_Maison': formData.type_local === 'Maison' ? 1 : 0
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/predict/', dataToSend);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Prediction error:', error);
      if (error.response) {
        setError(error.response.data.error || 'Prediction failed');
      } else if (error.request) {
        setError('No response from server');
      } else {
        setError('Request setup error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='forcaster-container'>
      <div className='features-container'>
        <h2 className='forcaster-title'>Feature Engineering for Real Estate Price Prediction</h2>

        {error && (
          <div className="error-message" style={{ color: 'red', marginBottom: '15px' }}>
            Error: {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='feature'>
            <label className='feature-name'>Month</label>
            <input
              className='feature-case'
              type="number"
              name="mois"
              min="1"
              max="12"
              required
              value={formData.mois}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Year</label>
            <input
              className='feature-case'
              type="number"
              name="annee"
              min="1900"
              max="2100"
              required
              value={formData.annee}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Postal Code</label>
            <input
              className='feature-case'
              type="number"
              name="code_postal"
              required
              value={formData.code_postal}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Property Type</label>
            <select
              className='feature-case'
              name="type_local"
              required
              value={formData.type_local}
              onChange={handleChange}
            >
              <option className='option' value="Maison">Maison</option>
              <option className='option' value="Industriel">Industriel/Commercial/Assimilé</option>
            </select>
          </div>

          <div className='feature'>
            <label className='feature-name'>Surface Area (m²)</label>
            <input
              className='feature-case'
              type="number"
              step="0.1"
              name="surface_reelle_bati"
              min="0"
              required
              value={formData.surface_reelle_bati}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Number of Main Rooms</label>
            <input
              className='feature-case'
              type="number"
              name="nombre_pieces_principales"
              min="0"
              required
              value={formData.nombre_pieces_principales}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Longitude</label>
            <input
              className='feature-case'
              type="number"
              step="0.000001"
              name="longitude"
              required
              value={formData.longitude}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Latitude</label>
            <input
              className='feature-case'
              type="number"
              step="0.000001"
              name="latitude"
              required
              value={formData.latitude}
              onChange={handleChange}
            />
          </div>

          <div className='feature checkbox-group'>
            <div className='checkbox-item'>
              <label className='feature-name'>Monument Index</label>
              <input
                className='feature-case'
                type="number"
                name="Monument"
                min="0"
                required
                value={formData.Monument}
                onChange={handleChange}
              />
            </div>
            <div className='checkbox-item'>
              <label className='feature-name'>Park Index</label>
              <input
                className='feature-case'
                type="number"
                name="Parc"
                min="0"
                required
                value={formData.Parc}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='feature'>
            <label className='feature-name'>Commercial Index</label>
            <input
              className='feature-case'
              type="number"
              name="indice_commercial"
              min="0"
              required
              value={formData.indice_commercial}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Educational Index</label>
            <input
              className='feature-case'
              type="number"
              name="indice_educatif"
              min="0"
              required
              value={formData.indice_educatif}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Health Index</label>
            <input
              className='feature-case'
              type="number"
              name="indice_sante"
              min="0"
              required
              value={formData.indice_sante}
              onChange={handleChange}
            />
          </div>

          <div className='feature'>
            <label className='feature-name'>Leisure Index</label>
            <input
              className='feature-case'
              type="number"
              name="indice_loisirs"
              min="0"
              required
              value={formData.indice_loisirs}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <button 
              className='predict-btn' 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Predicting...' : 'Predict Price'}
            </button>
            <div className='predict-case'>
              <p id="predicted-price" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {prediction ? `$${prediction.toLocaleString()}` : 'Awaiting prediction...'}
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className='maps-container'>
        <div style={{ height: '100%' }}>
          <h3>Map will go here</h3>
        </div>
      </div>
    </div>
  );
};

export default RealEstateForm;
