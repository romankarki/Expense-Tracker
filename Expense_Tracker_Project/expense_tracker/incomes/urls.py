from .api import IncomeViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/incomes',IncomeViewset,'incomes')

urlpatterns = router.urls

