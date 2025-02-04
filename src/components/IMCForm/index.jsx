import React from 'react';
import InputMask from 'react-input-mask';

const IMCForm = ({ altura, peso, setAltura, setPeso, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="altura" className="form-label">Altura (m):</label>
                <InputMask
                    mask="9,99"
                    maskChar={null}
                    id="altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="x,xx"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="peso" className="form-label">Peso (kg):</label>
                <input
                    type="number"
                    id="peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    step="0.1"
                    required
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Calcular IMC</button>
        </form>
    );
};

export default IMCForm;