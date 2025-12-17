from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# SQLite database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gokart.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Table model for storing laps
class Lap(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100))
    lap_time = db.Column(db.Float)

# Create the database tables
with app.app_context():
    db.create_all()

# Route to add a new lap
@app.route('/add_lap', methods=['POST'])
def add_lap():
    data = request.get_json()
    new_lap = Lap(team_name=data['team_name'], lap_time=data['lap_time'])
    db.session.add(new_lap)
    db.session.commit()
    return jsonify({"message": "Lap added successfully!"})

# Route to get all laps
@app.route('/laps', methods=['GET'])
def get_laps():
    laps = Lap.query.all()
    result = [{"team_name": lap.team_name, "lap_time": lap.lap_time} for lap in laps]
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
    @app.route('/')
def home():
    return "Flask is working! 🏁"


