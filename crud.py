from sqlalchemy.orm import Session
import models

def get_restaurant_by_id(db: Session, restaurant_id: int):
    return db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()

def get_restaurants(db: Session, skip: int = 0, limit: int = 1000):
    return db.query(models.Restaurant).offset(skip).limit(limit).all()