from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def customize_product():
    return {"message": "Customization saved!"}
