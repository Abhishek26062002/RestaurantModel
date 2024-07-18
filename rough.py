from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Restaurant  # Replace YourModelName with the actual name of your model class

# Database connection string
DATABASE_URL = 'postgresql://postgres:Abhishek@localhost:5435/TypeFace' # Update with your actual credentials

# Create an engine
engine = create_engine(DATABASE_URL)

# Create a SessionLocal class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Function to get data from the database
def get_data():
    # Create a session
    db = SessionLocal()
    try:
        # Query the database
        print(type(Restaurant))
        data = db.query(Restaurant.id).first()  # Fetch all rows from the table
        '''for row in data:
            print({
                "id": row.id,
                "has_online_delivery": row.has_online_delivery,
                "url": row.url,
                "user_rating_aggregate_rating": row.user_rating_aggregate_rating,
                "name": row.name,
                "cuisines": row.cuisines,
                "menu_url": row.menu_url,
                "average_cost_for_two": row.average_cost_for_two,
                "location_country_id": row.location_country_id,
                "featured_image": row.featured_image,
                "currency": row.currency,
                "thumb": row.thumb,
            })'''
        print(type(data[0]))
        #result = {attr: (str(value) if isinstance(value, (dict, list)) else value) for attr, value in vars(data).items() if not attr.startswith('_')}
        #print(result)
    finally:
        db.close()  # Close the session

# Example usage
if __name__ == "__main__":
    get_data()