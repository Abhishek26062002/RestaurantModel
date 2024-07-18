from sqlalchemy import Column, Integer, String
from database import Base

class Restaurant(Base):
    __tablename__ = 'restaurants'
    
    id = Column(Integer, primary_key=True, index=True)
    has_online_delivery = Column(Integer)
    url = Column(String)
    user_rating_aggregate_rating = Column(String)
    name = Column(String, index=True)
    cuisines = Column(String)
    menu_url = Column(String)
    average_cost_for_two = Column(Integer)
    location_country_id = Column(Integer)
    featured_image = Column(String)
    currency = Column(String)
    thumb = Column(String)
    location_address = Column(String)
    location_city = Column(String)