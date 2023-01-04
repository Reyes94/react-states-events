const Boton = () => {
    return(
            <button form="form1" type="submit" className="btn btn-primary mt-4">Submit</button>
    )
}

export default Boton

//form= "form1" para que button quede funcional, pese a que no esté dentro del form
//a <Form/> se le asignará id="form1"