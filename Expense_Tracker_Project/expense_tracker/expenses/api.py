from expenses.models import Expense
from rest_framework import viewsets,permissions
from expenses.serializers import ExpenseSerializer


class ExpenseViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = ExpenseSerializer
    
    def get_queryset(self):
        return self.request.user.expenses.all()
    
    def perform_create(self,serializer):
        serializer.save(person = self.request.user)
