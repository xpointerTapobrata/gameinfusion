import React from 'react';
import { useFormContext, Controller, useForm } from 'react-hook-form';

const FormInput = ({ name, label, handleChange, onchange }) => {
    const { control } = useFormContext()
    const { register } = useForm()
    return (
        <div>
            <Controller 
              render={({ field }) => (
                 <input {...field} fullwidth= "true"  label = {label} onChange={onchange}/>
              )}
              
            control= {control} name={name}/>
        </div>
    )
}

export default FormInput
