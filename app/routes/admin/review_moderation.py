from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def moderate_reviews():
    return [{"review_id": 1, "content": "Great product!", "status": "pending"}]
