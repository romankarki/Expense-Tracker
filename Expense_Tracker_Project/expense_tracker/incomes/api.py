from incomes.models import Income
from rest_framework import viewsets,permissions
from .serializers import IncomeSerializer

#income viewset

class IncomeViewset(viewsets.ModelViewSet):

    serializer_class = IncomeSerializer

    permission_classes=[
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.incomes.all()

    def perform_create(self,serializer):
        serializer.save(person = self.request.user)
