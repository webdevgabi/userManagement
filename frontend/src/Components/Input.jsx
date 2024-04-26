
export default ({ type, id, title, input, errors, onchange }) => {

    id = id ? id : title.toLowerCase();
    type = type ? type : id

    return (
        <>
            <input type={type} id={id} placeholder={title} value={input[id]} onChange={onchange} />
            {(errors && errors[id]) && <p className="errorMessage">{errors[id][0]}</p>} 
        </>
    )

}