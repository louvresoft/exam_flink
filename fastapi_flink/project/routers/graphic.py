from typing import List

import requests

from fastapi import FastAPI, APIRouter, HTTPException

from ..database import Enterprise

from ..schemas import GrapicRequestModel, GrapicResponseModel, SymbolResponseModel

router = APIRouter(prefix='/grapics')


@router.get('/symbols', response_model=List[SymbolResponseModel])
async def all_symbols():
    reviews = Enterprise.select(Enterprise.symbol)

    return [symbol_review for symbol_review in reviews]


@router.get('/{e_symbol}', response_model=List[GrapicResponseModel])
async def get_symbol_data(e_symbol: str):
    e_symbol = e_symbol.strip()
    symbol_review = Enterprise.select().where(Enterprise.symbol == e_symbol).first()

    if symbol_review is None:
        raise HTTPException(status_code=404, detail='Symbol not foud')

    url = "api-marketstack"+e_symbol
    r = requests.get(url = url)
    data = r.json()
    full_data = data['data']
    symbol = full_data[0]['symbol']

    result = []

    for x in full_data:
        # print(x['symbol'])
        result.append({"time" : x["date"], "open":x["open"], "high":x["high"], "low":x["low"], "close":x["close"], "volume":x["volume"]})

    return result 


