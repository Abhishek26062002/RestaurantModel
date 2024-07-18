from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import crud, models, schemas
from database import engine, get_db

app = FastAPI()


origins = [
    "http://localhost:5173", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/restaurants/{restaurant_id}", response_model=schemas.Restaurant)
def read_restaurant(restaurant_id: int, db: Session = Depends(get_db)):
    db_restaurant = crud.get_restaurant_by_id(db, restaurant_id)
    if db_restaurant is None:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return db_restaurant

@app.get("/restaurants/", response_model=List[schemas.Restaurant])
def read_restaurants(skip: int = 0, limit: int = 1000, db: Session = Depends(get_db)):
    restaurants = crud.get_restaurants(db, skip=skip, limit=limit)
    return restaurants
