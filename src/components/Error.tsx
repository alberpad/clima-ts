import React from 'react';
interface IErrorProps {
  mensaje: string;
}
function Error(props: IErrorProps) {
  const { mensaje } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel red darken-4 error">{mensaje}</div>
        </div>
      </div>
    </div>
  );
}

export default Error;
