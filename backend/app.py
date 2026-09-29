from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for frontend communication

# Root endpoint for testAPI()
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "status": "success",
        "message": "Python Flask backend is running successfully!"
    }), 200

# Orders endpoint for checkout()
@app.route('/api/orders', methods=['POST'])
def create_order():
    try:
        order_data = request.get_json()
        
        # Log received order in Python console
        print("Received new order:", order_data)

        # Here you can save order_data to MongoDB, SQLite, or PostgreSQL

        return jsonify({
            "status": "success",
            "message": "Order received successfully!",
            "order": order_data
        }), 201

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)