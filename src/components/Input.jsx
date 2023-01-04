const Input = ({text, type, placeholder, action}) => {
    return (
                <div className="form-group mt-3">
                    <label className="form-label">{text}</label>
                    <input type={type} className="form-control" placeholder={placeholder} onChange={action}/>
                </div>
    )
}

export default Input;