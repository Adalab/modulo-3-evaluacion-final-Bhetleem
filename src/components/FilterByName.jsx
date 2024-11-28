
function FilterByName({onChangeName}) {
    const handleSearchName = (event) => {
        event.preventDefault();
        onChangeName(event.target.value);
        //console.log(event.target.value);
        //console.log(onChangeName);
    }
    

  return (
    <form>
        <input onChange={handleSearchName} type="text" placeholder="Nombre del personaje..." />
      
    </form>
  )
}

export default FilterByName
