from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_all_orders():
    return [{"order_id": 201, "user": "John Doe"}]
