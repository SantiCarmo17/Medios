import { useState } from "react";
import { Input } from "../../components/forms/elements/input";
import { Button } from "../../components/forms/elements/button";
import { Forms } from "../../layout/Forms";
import { Select } from "../../components/forms/elements/select";
import { useNavigate } from 'react-router-dom';
import useGetData from "@/hooks/useGetData";
import usePostDataImage from "@/hooks/usePostDataImage";

export const FormClientes = () => {
    const initialData = { documento: "", nombre: "", correo: "", contrasena: "", fechaInicio: "", fechaFin: "", observaciones: "", numero: ""};
    const [inputs, setInputs] = useState(initialData);
    const navigate = useNavigate();
    const urls = ["roles"];
    const { data } = useGetData(urls);
    const roles = data.roles || [];

    const inputs1 = [
        { 
            id: 1, 
            type: 'number', 
            name: 'documento', 
            placeholder: 'Ingrese el documento del usuario', 
            value: inputs.documento, 
            required: true 
        },
        { 
            id: 2, 
            type: 'text', 
            name: 'nombre', 
            placeholder: 'Ingrese el nombre del usuario', 
            value: inputs.nombre, 
            required: true 
        },
        { 
            id: 3, 
            type: 'text', 
            name: 'correo', 
            placeholder: 'Ingrese el correo del usuario', 
            value: inputs.correo, 
            required: true 
        },
        { 
            id: 4, 
            type: 'date', 
            name: 'fechaInicio', 
            placeholder: 'Ingrese la fecha de inicio del usuario', 
            value: inputs.fechaInicio, 
            required: true 
        },
        { 
            id: 5, 
            type: 'date', 
            name: 'fechaFin', 
            placeholder: 'Ingrese la fecha de fin del usuario', 
            value: inputs.fechaFin, 
            required: true 
        },
        { 
            id: 6, 
            type: 'text', 
            name: 'observaciones', 
            placeholder: 'Ingrese las observaciones del usuario', 
            value: inputs.observaciones, 
            required: true 
        },
        { 
            id: 7, 
            type: 'password', 
            name: 'contrasena', 
            placeholder: 'Ingrese la contraseña del usuario', 
            value: inputs.contrasena, 
            required: true 
        },
        { 
            id: 8, 
            type: 'text', 
            name: 'numero', 
            placeholder: 'Ingrese el telefono del usuario', 
            value: inputs.numero, 
            required: true 
        },
        {
            id: 9,
            type: 'file',
            name: 'foto',
            placeholder: '',
            value: inputs.foto,
            required: true
        },
    ];

    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'foto') {
            setInputs({ ...inputs, [name]: files[0] });
        } else {
            setInputs({ ...inputs, [name]: value });
        }
    };

    const handleFormReset = () => {
        setInputs(initialData);
        setFile(null);
    };

    const onSubmit = () => {
        handleFormReset();
        navigate("/", { replace: true });
    };

    // Convert inputs to FormData
    const formData = new FormData();
    Object.keys(inputs).forEach(key => {
        formData.append(key, inputs[key]);
    });

    const handleSubmit = usePostDataImage("clients", onSubmit, formData);

    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-bold">Formulario Clientes</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleSubmit}>
                {inputs1.map(input => (
                    <Input
                        key={input.id}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required={input.required}
                        value={input.type === 'file' ? undefined : input.value}
                        handleInputChange={handleInputChange}
                    />
                ))}
                <Select
                    label="Tipo de Rol"
                    name="roles_idrol"
                    value={inputs.roles_idrol}
                    onChange={handleInputChange}
                    options={roles.map(rol => ({ value: rol.idrol, label: rol.descripcion }))}
                />
                <div className={inputs1.length % 2 === 0 ? "md:col-span-2" : "flex items-center justify-center mt-6"}>
                    <Button type={'submit'} name={'Enviar'} />
                </div>
            </form>
        </Forms>
    );
};