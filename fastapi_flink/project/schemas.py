from typing import Any
from typing import Optional
import uuid

from pydantic import validator
from pydantic import BaseModel
from pydantic import BaseModel, Extra


from peewee import ModelSelect

from pydantic.utils import GetterDict

class PeeweeGetterDict(GetterDict):
    def get(self, key: Any, default: Any = None):
        
        res = getattr(self._obj, key, default)
        if isinstance(res, ModelSelect):
            return list(res)

        return res

class ResponseModel(BaseModel):
    
    class Config:
        orm_mode = True
        getter_dict = PeeweeGetterDict


# ----------------- table enterprise ----------
class EnterpriseRequestModel(BaseModel):
    name_enterprise: str 
    description: str
    symbol: str
    market_value: str

    @validator('symbol')
    def symbol_validator(cls, symbol):
        if len(symbol) > 10:
            raise ValueError('la longitud del simbolo no debe exceder 10 caracteres')        
        return symbol

    @validator('name_enterprise')
    def name_enterprise_validator(cls, name_enterprise):
        if len(name_enterprise) > 50:
            raise ValueError('la longitud del nombre de empresa no debe exceder 50 caracteres')        
        return name_enterprise

    @validator('description')
    def description_validator(cls, description):
        if len(description) > 100:
            raise ValueError('la longitud de la descripcion no debe exceder 100 caracteres')        
        return description


class EnterpriseResponseModel(ResponseModel):
    uuid: uuid.UUID
    name_enterprise: str
    description: str
    symbol: str
    market_value: Optional[str]

    class Config:
        extra = Extra.forbid

class GrapicRequestModel(BaseModel):
    symbol: str

class GrapicResponseModel(ResponseModel):
    time: str 
    open: int 
    high: int 
    low: int 
    close: int
    volume: int

    class Config:
        extra = Extra.forbid

class SymbolResponseModel(ResponseModel):
    symbol: str

    class Config:
        extra = Extra.forbid

# class EnterpriseResponseModel(ResponseModel):
#     name_enterprise: str
#     description: str
#     symbol: str
#     market_value: Optional[str]

#     class Config:
#         extra = Extra.forbid

# uuid
# nombre empresa
# descrip conmpany 
# campo simbolo
# valores de mercado