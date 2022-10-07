import React, { useState, uniqid } from 'react';

const Listado = () => {
    const [tarea, setTarea] = useState('')
    const [listatareas, setListatareas] = useState([])
    const [modificacion, setModificacion] = useState(false)
    const [id, setId] = useState('')
    const [error , setError] = useState(null)

    const addTarea = (e)=>{
        e.preventDefault()
        if(!tarea.trim()){
            setError('el campo nombre esta vacio')
            return
        }
        const nuevaTarea = {
            id:uniqid,
            tituloTarea:tarea
        }
        setListatareas([...listatareas,nuevaTarea])
        setTarea('')
        setError(null)
    }
    const deleteTarea = (id) =>{
        const nuevaArray = listatareas.filter( item => item.id !== id)
        setListatareas(nuevaArray)

    }
    const editar = (item,e) =>{
        e.preventDefault()
        setModificacion(true)
        setTarea(item.tituloTarea)
        setId(item.id)
    }
    const editarTarea = (e) =>{
        e.preventDefault()
        const nuevoArray = listatareas.map( item => item.id === id ? {id:item.id, tituloTarea:tarea}: item)
        setListatareas(nuevoArray)
    }

    return (
        <div>
            <h2>Listado de Tareas</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de Tareas</h2>
                    <ul className='list-group'>
                        {
                            listatareas.map( item =>
                                <li key="{item.id}" 
                                className='list-group-item'
                                >
                                {item.tituloTarea}
                                <button 
                                className='btn btn-info float-right'
                                onClick={ () => {editar(item)}}
                                >
                                    EDITAR
                                </button>
                                <button 
                                className='btn btn-danger float-right'
                                onClick={ () => {deleteTarea(item.id)}}
                                >
                                    BORRAR
                                </button>
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className='col'>
                    <h2>Agrega las Tareas</h2>
                    <form onSubmit={modificacion ? editar : addTarea} className="form-group">
                        <input
                        placeholder='Apunta tu tarea'
                        onChange={(e)=>{setTarea(e.target.value)}}
                        className='form-control mb-3' 
                        type="text"
                        value={tarea}
                         />
                         <input
                         className='btn btn-info btn-block' 
                         type="submit"
                         value={modificacion ? 'EDITAR TAREA' : 'REGISTRAR NOMBRE'}
                          />
                    </form>
                    {
                        error != null ? (
                            <div className='alert alert-danger'>
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Listado;
/* Alfredo muñoz */