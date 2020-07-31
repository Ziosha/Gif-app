import React,{useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory= ({setcategories})=>{
    const [inputValue, setinputValue] = useState('');

    const handleInputChange=(e)=>{
        setinputValue(e.target.value);
    }
    const handelSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length >2){
            setcategories (cats=>[inputValue,...cats]);
            setinputValue('');

        }
        // console.log('Submit Hecho');
     
    }

    return (
    
        <form onSubmit={handelSubmit}>
        <input
            type="Text"
            value={inputValue}
            onChange={handleInputChange}
        />
        </form>
    
    )
   

}

AddCategory.propTypes ={
    setcategories:PropTypes.func.isRequired

}