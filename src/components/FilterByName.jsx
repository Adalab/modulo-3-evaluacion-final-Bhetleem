import "../scss/layout/FilterByName.scss";

function FilterByName({onChangeName, savedFilterName}) {
    const handleSearchName = (event) => {
        event.preventDefault();
        onChangeName(event.target.value);
        //console.log(event.target.value);
        //console.log(onChangeName);
    }

    const enterPrevent=(event) =>{
        event.preventDefault();
    }
    
  return (
    <form onSubmit={enterPrevent} className="form">
        <input className="form_input" value={savedFilterName} onChange={handleSearchName} type="text" placeholder="Nombre del personaje..." />
      
    </form>
  )
}

export default FilterByName
