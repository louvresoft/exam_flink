from typing import List

from fastapi import FastAPI, APIRouter, HTTPException

from ..database import Enterprise
from ..schemas import EnterpriseRequestModel, EnterpriseResponseModel

router = APIRouter(prefix='/enterprises')


@router.get('', response_model=List[EnterpriseResponseModel])
async def get_enterprises(page: int = 1, limit: int = 100): 
    enterprise = Enterprise.select().paginate(page, limit)
    return [enterprise_review for enterprise_review in enterprise]

    
@router.get('/{e_uuid}', response_model=EnterpriseResponseModel)
async def get_enterprise(e_uuid: str):
    e_uuid = e_uuid.strip()
    enterprise_review = Enterprise.select().where(Enterprise.uuid == e_uuid).first()

    if enterprise_review is None:
        raise  HTTPException(status_code=404, detail='Enterprise not found')
    
    return enterprise_review


@router.post('', response_model=EnterpriseResponseModel)
async def create_enterprise(enterprise_review: EnterpriseRequestModel): 
    enterprise_review = Enterprise.create(
        name_enterprise=enterprise_review.name_enterprise,
        description = enterprise_review.description,
        symbol = enterprise_review.symbol,
        market_value = enterprise_review.market_value
    )
    return enterprise_review


@router.put('/{e_uuid}', response_model=EnterpriseResponseModel)
async def  update_enterprise(e_uuid: str, enterprise_request: EnterpriseRequestModel):
    e_uuid = e_uuid.strip()
    enterprise_review = Enterprise.select().where(Enterprise.uuid == e_uuid).first()

    if enterprise_review is None:
        raise  HTTPException(status_code=404, detail='Enterprise not found')

    enterprise_review.name_enterprise = enterprise_request.name_enterprise
    enterprise_review.description = enterprise_request.description
    enterprise_review.symbol = enterprise_request.symbol
    enterprise_review.market_value = enterprise_request.market_value
    enterprise_review.save()
    
    return enterprise_review


@router.delete('/{e_uuid}', response_model=EnterpriseResponseModel)
async def delete_enterprise(e_uuid: str):
    e_uuid = e_uuid.strip()
    enterprise_review = Enterprise.select().where(Enterprise.uuid == e_uuid).first()

    if enterprise_review is None:
        raise  HTTPException(status_code=404, detail='Enterprise not found')

    enterprise_review.delete_instance()

    return enterprise_review
