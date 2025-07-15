from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_orders():
    return [{"order_id": 101, "status": "shipped"}]
