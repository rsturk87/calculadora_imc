import React from 'react';

const IMCTable = ({ imc, classificacao }) => {
    if (!imc) return null;

    return (
        <div className="mt-4">
            <h2>Resultado</h2>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{imc}</td>
                        <td>{classificacao}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default IMCTable;