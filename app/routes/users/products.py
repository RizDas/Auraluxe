from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_products():
    return [{"id": 1, "name": "EchoPods"}, {"id": 2, "name": "Nova"}]
