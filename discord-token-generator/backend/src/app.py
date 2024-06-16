import flask
from flask import request, jsonify
from token_generator import generate_token
from validation import validate_token

app = flask.Flask(__name__)

@app.route('/generate_token', methods=['POST'])
def generate_discord_token():
    data = request.get_json()
    token_length = data.get('token_length')
    token_complexity = data.get('token_complexity')
    token_count = data.get('token_count')
    
    if not token_length or not token_complexity or not token_count:
        return jsonify({'error': 'Missing required parameters'}), 400
    
    tokens = generate_token(token_length, token_complexity, token_count)
    if not tokens:
        return jsonify({'error': 'Failed to generate tokens'}), 500
    
    return jsonify({'tokens': tokens}), 200

@app.route('/validate_token', methods=['POST'])
def validate_discord_token():
    data = request.get_json()
    token = data.get('token')
    
    if not token:
        return jsonify({'error': 'Missing required parameters'}), 400
    
    is_valid = validate_token(token)
    if not is_valid:
        return jsonify({'message': 'Invalid token'}), 400
    
    return jsonify({'message': 'Valid token'}), 200

if __name__ == '__main__':
    app.run(debug=True)