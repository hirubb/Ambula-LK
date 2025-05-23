import { orderHTTP } from "./httpCommon-service";




// services/order-service.js
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_Order_URL || 'http://order-service:5003'}/orders`;

// Create a request interceptor function to add the auth token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const orderService = {
  // Place an order
  placeOrder: (orderData) => {
    console.log('Placing order with data:', orderData);
    return axios.post(API_URL, orderData, { headers: getAuthHeader() });
  },

  // Get order status
  getOrderStatus: (orderId) => {
    if (!orderId) throw new Error('Order ID is required');
    return axios.get(`${API_URL}/${orderId}/status`, { headers: getAuthHeader() });
  },

  // Get customer orders by customer ID
  getCustomerOrders: (customerId) => {
    if (!customerId) throw new Error('Customer ID is required');
    return axios.get(`${API_URL}/customer/${customerId}`, { headers: getAuthHeader() });
  },

  // Get customer's active order
  getActiveOrder: (customerId) => {
    if (!customerId) throw new Error('Customer ID is required');
    return axios.get(`${API_URL}/customer/${customerId}/active`, { headers: getAuthHeader() });
  },

  // Get order by ID - this is the key function for your checkout page
  getOrderById: (orderId) => {
    if (!orderId) throw new Error('Order ID is required');
    console.log('Fetching order with ID:', orderId);

    // Try to fetch using the correct API URL
    return axios.get(`${API_URL}/${orderId}`, {
      headers: getAuthHeader(),
      // Add longer timeout to prevent network issues
      timeout: 10000
    }).catch(error => {
      console.error('Error fetching order:', error);

      // If we get a specific error, provide a more helpful message
      if (error.response && error.response.status === 404) {
        throw new Error('Order not found. The order ID may be invalid or expired.');
      }

      throw error;
    });
  },



  // Get Order Details by ID for the delivery person - Gayashan 

  getOrderDetailsById(order_ID) {
    return orderHTTP.get(`/orders/DeliveryPerson/GetOrderById/${order_ID}`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  },

  // Update order status - Gayashan

  UpdateOrderStatus(orderId, status) {
    return orderHTTP.patch(`/orders/${orderId}/status`, { status }, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }




};

export default orderService;
