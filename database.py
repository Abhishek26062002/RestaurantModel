import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


DATABASE_URL = "postgresql://restaurant_g2vk_user:R5z1Mjcrf1aK8LDSuB9rHPMejMH3kWD7@dpg-cqd3g6mehbks73bop3ng-a.oregon-postgres.render.com/restaurant_g2vk"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

data_file = r"C:\Users\abhishek\Documents\Carrer\TypeFace\task-Abhishek26062002\new_data.json"

"""data = pd.read_json(data_file)


def flatten_dict_column(df, col_name):
    flattened = pd.json_normalize(df[col_name])
    flattened.columns = [f"{col_name}_{sub_col}" for sub_col in flattened.columns]
    return flattened



for col in data.columns:
    if data[col].apply(lambda x: isinstance(x, dict)).any():
        flattened = flatten_dict_column(data, col)
        data = data.drop(columns=[col]).join(flattened)
        
        
data = data.applymap(lambda x: str(x) if isinstance(x, (dict, list)) else x)
"""


Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


"""data.drop_duplicates(inplace=True)

data.to_sql('restaurants', engine, if_exists='replace', index=False)"""