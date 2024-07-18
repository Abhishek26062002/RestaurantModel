from pydantic import BaseModel

class RestaurantBase(BaseModel):
    has_online_delivery: int
    url: str
    user_rating_aggregate_rating: str
    name: str
    cuisines: str
    menu_url: str
    average_cost_for_two: int
    location_country_id: int
    featured_image: str
    currency: str
    thumb: str
    location_address: str
    location_city: str

class Restaurant(RestaurantBase):
    id: int
    name : str
    location_country_id : int 
    cuisines : str
    average_cost_for_two : int
    location_address : str
    location_city: str

    class Config:
        orm_mode = True
