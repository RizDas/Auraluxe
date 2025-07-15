from fastapi import APIRouter

router = APIRouter()

@router.post("/add")
def add_product():
    return {"message": "Product added!"}
