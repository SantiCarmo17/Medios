import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sena from "../../assets/Sena.png";
import useLogin from '../../hooks/useLogin';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Login = () => {
    const navigate = useNavigate();
    const data = { correo: "", contrasenia: "" };
    const [inputs, setInputs] = useState(data);
    const [colorTheme, setColorTheme] = useState('white'); // Estado para el tema de color

    const inputs1 = [
        {
            id: 1,
            type: "email",
            name: "correo",
            placeholder: "ejemplo@gmail.com",
            value: inputs.correo,
            required: true
        },
        {
            id: 2,
            type: "password",
            name: "contrasenia",
            placeholder: "Contraseña",
            value: inputs.contrasenia,
            required: true
        }
    ];

    const handleInputChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = () => {
        navigate("/admin", { replace: true });
    };

    const handleSubmit = useLogin("login", onSubmit, inputs);

    // Función para cambiar el tema de color
    const toggleColorTheme = () => {
        if (colorTheme === 'white') {
            setColorTheme('gray');
        } else if (colorTheme === 'gray') {
            setColorTheme('black');
        } else {
            setColorTheme('white');
        }
    };

    return (
        <div className={`flex items-center justify-center min-h-screen p-4 w-full ${colorTheme === 'white' ? 'bg-white' : colorTheme === 'gray' ? 'bg-gray-500' : 'bg-black'}`}>
          <div className={`flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden max-w-4xl w-full ${colorTheme === 'white' ? 'bg-white text-black' : colorTheme === 'gray' ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}>
            {/* Primera columna */}
            <div className={`flex flex-col justify-center items-center p-8 md:w-1/2 ${colorTheme === 'white' ? 'bg-gray-100' : colorTheme === 'gray' ? 'bg-gray-600' : 'bg-gray-800'}`}>
              <div className="flex items-center mb-4">
                <div className={`h-8 w-8 rounded-full ${colorTheme === 'white' ? 'bg-gray-500' : colorTheme === 'gray' ? 'bg-gray-700' : 'bg-gray-300'}`} />
                <div className="ml-2 text-2xl font-bold">¡Hola!</div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Bienvenidos!</h1>
              <p className="mb-6">
                Este es un software utilizado para la gestión del mantenimiento de los equipos tecnológicos del Sena CIAA, solo es para usuarios ya registrados.
              </p>
            </div>
    
            {/* Segunda columna */}
            <div className="flex flex-col justify-center items-center p-8 md:w-1/2">
            <img src={Sena} alt="Descripción de la imagen" className="w-20 h-auto mb-4" />
              <h2 className="text-2xl font-bold mb-6">Inicio de sesión</h2>
              <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="username" className="block">
                    Correo electrónico
                  </Label>
                  <Input name="correo" placeholder="Correo" className="w-full mt-1" onChange={handleInputChange} />
                </div>
                <div className="mb-6">
                  <Label htmlFor="password" className="block">
                    Contraseña
                  </Label>
                  <Input
                    name="contrasenia"
                    type="password"
                    placeholder="Contraseña"
                    className="w-full mt-1"
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" className="w-full py-2 rounded-full">Enviar</Button>
              </form>
              <button onClick={toggleColorTheme} className="mt-4 px-4 py-2 rounded bg-blue-500 text-white">Cambiar Tema</button>
            </div>
          </div>
        </div>
      ); 
};
