import pandas as pd
from sqlalchemy import create_engine


DATABASE_URL = 'postgresql://postgres:Abhishek@localhost:5435/TypeFace'

engine = create_engine(DATABASE_URL)


data_file = r"C:\Users\abhishek\Documents\Carrer\TypeFace\task-Abhishek26062002\new_data.json"

data = pd.read_json(data_file)



def flatten_dict_column(df, col_name):
    flattened = pd.json_normalize(df[col_name])
    flattened.columns = [f"{col_name}_{sub_col}" for sub_col in flattened.columns]
    return flattened



for col in data.columns:
    if data[col].apply(lambda x: isinstance(x, dict)).any():
        flattened = flatten_dict_column(data, col)
        data = data.drop(columns=[col]).join(flattened)
        
        
data = data.applymap(lambda x: str(x) if isinstance(x, (dict, list)) else x)


data.to_sql('restaurants', engine, if_exists='replace', index=False)