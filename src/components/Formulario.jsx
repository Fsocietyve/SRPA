import React, {Fragment, useState} from 'react';

const Formulario = () => {
const [datos,setDatos] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    residencia: '',
    carro: '',
    modelo: '',
    placa: '',
    año: '',
    color: ''
})

const handleInputChange = () => {
    
}
    return (
       <Fragment>
        
       <div className="col-md-3">
       Consultar<input 
       placeholder="Ingresar dato a consultar"
       className="form-control"
       type="text" 
       name="consulta"
       />
       </div>

       <input type="submit" />

       <form className="row">
       <h2>Datos propietario</h2>

       <div className="col-md-3">
       Nombre<input 
       placeholder="Ingresar nombre"
       className="form-control"
       type="text" 
       name="nombre"
       />
       </div>
        
       <div className="col-md-3">
       Apellido <input 
       placeholder="Ingresar Apellido"
       className="form-control"
       type="text" 
       name="apellido"
       />
       </div> 

       <div className="col-md-3">
       DNI<input 
       placeholder="Ingresar DNI"
       className="form-control"
       type="text" 
       name="dni"
       />
       </div>

       <div className="col-md-3">
       Telefono<input 
       placeholder="Ingresar Telefono"
       className="form-control"
       type="text" 
       name="telefono"
       /> 
       </div>
        
       <div className="col-md-3">
       Residencia<input 
       placeholder="Ingresar Residencia"
       className="form-control"
       type="text" 
       name="residencia"
       />
       </div> 
     
       <hr />  <br />

       <h2>Datos Vehiculo</h2>
       <div className="col-md-3">
       Carro<input 
       placeholder="Ingresar Carro"
       className="form-control"
       type="text" 
       name="carro"
       />
       </div> 
       
       <div className="col-md-3">
       Modelo<input 
       placeholder="Ingresar Modelo"
       className="form-control"
       type="text" 
       name="modelo"
       /> 
       </div>
        
       <div className="col-md-3">
       Placa<input 
       placeholder="Ingresar Placa"
       className="form-control"
       type="text" 
       name="placa"
       />
       </div> 

       <div className="col-md-3">
       Año<input 
       placeholder="Ingresar Año"
       className="form-control"
       type="text" 
       name="año"
       /> 
       </div>
        
       <div className="col-md-3">
       Color<input 
       placeholder="Ingresar Color"
       className="form-control"
       type="text" 
       name="color"
       />
       </div> 
       
       </form>
       </Fragment>
    );
}

export default Formulario;
