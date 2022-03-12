import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import StockService from "../services/StockService";

const AddStock=()=>{

    const [name, setName]=useState('');
    const [quantity, setQuantity]=useState('');
    const [price, setPrice]=useState('');
    const navigate=useNavigate();
    const {id}=useParams();

    function SubmitButton(){
        if(name && quantity && price){
            return <button className="btn btn-success" onClick={(event)=>saveStock(event)}>Submit</button>
        }else {
            return <button className="btn btn-success" disabled>Submit</button>
        }
    }

    const saveStock=(event)=>{
        event.preventDefault();

        const stock={name,quantity, price};

        StockService.createStock(stock).then((response)=>{
            navigate('/stocks');
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        StockService.getStockById(id).then((response)=>{
            setName(response.data.name)
            setQuantity(response.data.quantity)
            setPrice(response.data.price)
        }).catch(error=>{
            console.log(error);
        })
    }, [])

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        Add New Stock
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(event)=>setName(event.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Quantity :</label>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Enter quantity"
                                        name="quantity"
                                        className="form-control"
                                        value={quantity}
                                        onChange={(event)=>setQuantity(event.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Price :</label>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="Enter price"
                                        name="price"
                                        className="form-control"
                                        value={price}
                                        onChange={(event)=>setPrice(event.target.value)}
                                    ></input>
                                </div>
                                <SubmitButton></SubmitButton>
                                <Link to="/stocks" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStock