from fastapi import FastAPI, APIRouter  
from fastapi.middleware.cors import CORSMiddleware

from .database import Enterprise

from .database import database as connection

from .routers import enterprise_router, graphic_router






app = FastAPI(title='flink test', description='crud test', version='0.1')


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_v1 = APIRouter(prefix='/api/v1')

api_v1.include_router(enterprise_router)
api_v1.include_router(graphic_router)

app.include_router(api_v1)

@app.on_event("startup")
async def startup():
    if connection.is_closed():
        connection.connect()
    
    connection.create_tables([Enterprise])


@app.on_event("shutdown")
async def startup():
    if not connection.is_closed():
        connection.close()