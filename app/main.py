from fastapi import FastAPI
from app.auth import users, admins
from app.routes.users import profile
from app.routes.users import products
from app.routes.users import customize
from app.routes.users import orders
from app.routes.users import reviews
from app.routes.admin import manage_products, dashboard, admin_orders, review_moderation

app = FastAPI(title="Auraluxe Backend")

app.include_router(users.router, prefix="/auth", tags=["User Auth"])
app.include_router(admins.router, prefix="/admin", tags=["Admin Auth"])

# User routes
app.include_router(profile.router, prefix="/users", tags=["User Profile"])
app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(customize.router, prefix="/customize", tags=["Customization"])
app.include_router(orders.router, prefix="/orders", tags=["Orders"])
app.include_router(reviews.router, prefix="/reviews", tags=["Reviews"])

# Admin routes
app.include_router(manage_products.router, prefix="/admin/products", tags=["Admin Products"])
app.include_router(dashboard.router, prefix="/admin/analytics", tags=["Admin Analytics"])
app.include_router(admin_orders.router, prefix="/admin/orders", tags=["Admin Orders"])
app.include_router(review_moderation.router, prefix="/admin/reviews", tags=["Review Moderation"])
