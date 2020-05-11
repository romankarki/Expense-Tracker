from rest_framework import routers
from .api import ExpenseViewSet

router  = routers.DefaultRouter()
router.register('api/expenses',ExpenseViewSet,'expenses')

urlpatterns = router.urls
