import React from "react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { dataBase } from "../../../Firebase/firebaseCongif";
import Form from "./Form";
import './Form.css'

const ContForm = ({ cart, total, clearCart, idOrder }) => {


    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');

    const submit = (event) => {
        event.preventDefault();

        //Hago la orden para mandar a firebase
        const order = {
            buyer: { nombre: nombre, apellido: apellido, email: mail, telefono: tel },
            items: cart,
            total: total(),//precio total
            date: serverTimestamp() //esta funcion de firtebase nos da la fecha de la orden
        };

        //Creo la nueva seccion de ordenes
        const ordereCollection = collection(dataBase, 'orders')

        //Con este metodo lo pusheo a firebase, nos da una promesa, lo resuelvo
        addDoc(ordereCollection, order)
            .then((res) => {
                idOrder(res.id);
                clearCart();
            })
    }

    //Eventos para agarrar el value de los inputs
    const eventNombre = (event) => {
        /* console.log(event.target.value); */
        setNombre(event.target.value);
    }

    const eventApellido = (event) => {
        setApellido(event.target.value);
    }

    const eventMail = (event) => {
        setMail(event.target.value);
    }

    const evenTel = (event) => {
        setTel(event.target.value);
    }



    return (
        <div className="contGeneral-Form">
            <h3>Completa el formulario para terminar tu compra!!</h3>
            <form className="ContForm" action="" onSubmit={submit}>
                <Form type="text" nombre="Nombre" onSubmit={eventNombre} />
                <Form type="text" nombre="Apellido" onSubmit={eventApellido} />
                <Form type="email" nombre="Mail" onSubmit={eventMail} />
                <Form type="tel" nombre="Tel" onSubmit={evenTel} />
                <button>Enviar</button>
            </form>
        </div>

    )
}

export default ContForm