from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def submit_review():
    return {"message": "Review submitted!"}
