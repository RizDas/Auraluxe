from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def admin_login():
    return {"message": "Admin login successful (placeholder)"}
