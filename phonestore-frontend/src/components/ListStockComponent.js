import React, {useState, useEffect} from 'react';
import StockService from "../services/StockService";
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

    const [selectedId, setSelectedId]=useState(0);
    const [selectedName, setSelectedName]=useState("");
    const [selectedQuantity, setSelectedQuantity]=useState("")
    const [selectedPrice, setSelectedPrice]=useState("")

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

    const updateStock=(event)=>{
        event.preventDefault();
        const updatedStock={selectedName, selectedQuantity, selectedPrice}
        console.log(updatedStock);
        StockService.updateStock(selectedId, updatedStock).then((response)=>{
            handleClose();
        }).catch(error=>{
            console.log(error);
        })
    }

    function UpdateButton(){
        if(selectedName && selectedQuantity && selectedPrice){
            return <button className="btn btn-success" onClick={(event)=>{handleClose();updateStock(event)}}>Update</button>
        }else {
            return <button className="btn btn-success" disabled>Update</button>
        }
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
                                <tr key={stock.id} onDoubleClick={()=>{
                                    handleShow();setSelectedId(stock.id);setSelectedName(stock.name);setSelectedQuantity(stock.quantity);setSelectedPrice(stock.price)}}>
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
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group mb-2">
                                            <label className="form-label">Name :</label>
                                            <input
                                                type="text"
                                                placeholder="Enter name"
                                                name="name"
                                                className="form-control"
                                                value={selectedName}
                                                onChange={(event)=>setSelectedName(event.target.value)}
                                            ></input>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label className="form-label">Quantity :</label>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder={selectedQuantity}
                                                name="quantity"
                                                className="form-control"
                                                value={selectedQuantity}
                                                onChange={(event)=>setSelectedQuantity(event.target.value)}
                                            ></input>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label className="form-label">Price :</label>
                                            <input
                                                type="number"
                                                min="1"
                                                placeholder={selectedPrice}
                                                name="price"
                                                className="form-control"
                                                value={selectedPrice}
                                                onChange={(event)=>setSelectedPrice(event.target.value)}
                                            ></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{handleClose();deleteStock(selectedId)}}>Delete</Button>
                    <UpdateButton></UpdateButton>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ListStockComponent