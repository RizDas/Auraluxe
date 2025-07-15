from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def analytics():
    return {"sales": 100, "users": 25}
