import axios from "axios";

const STOCK_BASE_API_URL='http://localhost:8080/api/stock';

class StockService{

    getAllStock(){
        return axios.get(STOCK_BASE_API_URL);
    }

    createStock(stock){
        return axios.post(STOCK_BASE_API_URL, stock);
    }

    getStockById(stockId){
        return axios.get(STOCK_BASE_API_URL + '/' + stockId);
    }

    updateStock(stockId, stock){
        return axios.put(STOCK_BASE_API_URL + '/' + stockId, stock);
    }

    deleteStock(stockId){
        return axios.delete(STOCK_BASE_API_URL + '/' + stockId);
    }
}

export default new StockService();