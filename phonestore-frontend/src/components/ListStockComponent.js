import React, {useState, useEffect} from 'react';
import StockService from "../services/StockService";
//import Modal from "./Modal";
import {Link} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";

const ListStockComponent=()=>{

    const [stocks, setStock]=useState([])
    useEffect(()=>{
        getAllStock();
    }, [])

    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

    const [selectedId, setSelectedId] = useState(0);

    const getAllStock=()=>{
        StockService.getAllStock().then((response)=>{
            setStock(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteStock=(stockId)=>{
        StockService.deleteStock(stockId).then((response)=>{
            getAllStock();
        }).catch(error=>{
            console.log(error);
        })
    }

    return(
        <div className="container">
            <h2 className="text-center">List Stock</h2>
            <Link to="/add-stock" className="btn btn-primary">Add New Stock</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {
                        stocks.map(
                            stock=>
                                <tr key={stock.id} onDoubleClick={()=>{handleShow();setSelectedId(stock.id)}}>
                                    <td>{stock.id}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.quantity}</td>
                                    <td>{stock.price}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <div className="container">
                        <h5 className="text-center">Detailed Stock View</h5>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {selectedId}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{handleClose();deleteStock(selectedId)}}>Delete</Button>
                    <Button onClick={handleClose}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ListStockComponent