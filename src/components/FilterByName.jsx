
function FilterByName({onChangeName}) {
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
    <form onSubmit={enterPrevent}>
        <input onChange={handleSearchName} type="text" placeholder="Nombre del personaje..." />
      
    </form>
  )
}

export default FilterByName
