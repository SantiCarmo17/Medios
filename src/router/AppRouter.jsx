// routes.js
import { useRoutes } from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute';
import {LoginRoute} from './LoginRoute';
import { Login } from '../pages/login/LoginPage';
import { HomePage } from '../pages/home/Homepage';
import { FormElementos } from '@/pages/Elementos/FormElementos';
import { FormRoles } from '@/pages/Roles/FormRoles';
import { FormClientes } from '@/pages/Clientes/FormClientes';
import { ListaUsuarios } from '@/pages/Prestamos/Listausuarios';
import ListaElementos from '@/pages/Prestamos/ListaElementos';
import { FormAreas } from '@/pages/Areas/FormAreas';
import { FormAdmin } from '@/pages/Administradores/FormAdmin';

export const AppRoutes = () => {
    return useRoutes([
        { 
            path: '/', 
            element: (
                <LoginRoute>
                    <Login /> 
                </LoginRoute>
            )
        },
        { 
            path: '/login', 
            element: (
                <LoginRoute>
                    <Login /> 
                </LoginRoute>
            )
        },
        {
            path: '/inicio',
            element: (
                // <ProtectedRoute>
                    <HomePage />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/elementos/formulario',
            element: (
                // <ProtectedRoute>
                    <FormElementos />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/roles/formulario',
            element: (
                // <ProtectedRoute>
                    <FormRoles />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/usuarios/formulario',
            element: (
                // <ProtectedRoute>
                    <FormClientes />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/prestamos/lista',
            element: (
                // <ProtectedRoute>
                    <ListaUsuarios />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/prestamos/lista2',
            element: (
                // <ProtectedRoute>
                    <ListaElementos />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/areas/formulario',
            element: (
                // <ProtectedRoute>
                    <FormAreas />
                // </ProtectedRoute>
            ),
        },
        {
            path: '/administrador/formulario',
            element: (
                // <ProtectedRoute>
                    <FormAdmin />
                // </ProtectedRoute>
            ),
        },
    ]);
};
