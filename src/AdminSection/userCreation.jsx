import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import { message } from 'antd';
import Password from 'antd/es/input/Password';
import axios from 'axios';


const UserCreation = () => {
    const schema = yup.object().shape({
        username: yup.string().required().min(5).max(15),
        password: yup.string().required().min(5).max(15),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'),null],"Password not matched"), //oneOf is used to compare two fields
        selectRole: yup.string().required()
    });
    const {register,handleSubmit,formState:{errors}} = useForm({ 
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        const transformedData = {
            userName: data.username,
            password: data.password,
            userRole: data.selectRole};
            console.log(transformedData);
            axios.post('http://localhost:8080/createUser/saveAdminUser', transformedData)
              .then(response => {
                console.log(response.data);
                message.success('User created successfully!');
              })
              .catch(error => {
                console.error(error);
                message.error('An error occurred while creating the user.');
              }); 
    };
    
    return (  
        <React.Fragment>
        <h3 >Create a User</h3>
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
             <div className="form-group col-6 m-3">
                <label htmlFor="exampleInputUsername" className='p-2'>Create Username: </label>
                <input type="text" className="form-control p-2" placeholder='Enter username' {...register("username")} />
                <p className='grammar-error'>{errors.username?.message}</p>
            </div>
            <div className="form-group col-6 m-3">
                <label htmlFor="exampleInputPassword">Create Password: </label>
                <input type="password" className="form-control p-2" placeholder='Enter password' {...register("password")} />
                <p className='grammar-error'>{errors.password?.message}</p>
            </div>
            <div className="form-group col-6 m-3">
                <label htmlFor="exampleInputPassword">Confirm Password: </label>
                <input type="password" className="form-control p-2" placeholder='Confirm password' {...register("confirmPassword")} />
                <p className='grammar-error'>{errors.confirmPassword?.message}</p>
            </div>
            <div className="form-group col-6 m-3 ">
                <label htmlFor="exampleInputPassword">Select Role : </label>
                <select className="form-control p-2 " {...register("selectRole")} >
                    <option>Admin</option>
                    <option>Delivery Section</option>
                    <option>Ware house</option>
                    <option>Packing Section</option>
                </select>
                <p className='grammar-error'>{errors.selectRole?.message}</p>
            </div>
            <button className='btn btn-primary m-3' type='submit'>Create User</button>
        </form>
            
        </React.Fragment>
    );
}
 
export default UserCreation;