from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Expense(models.Model):

    name_of_expense = models.CharField(max_length=200,blank=False)
    type_of_expense = models.CharField(max_length=200)
    message = models.CharField(max_length=200)
    amount = models.PositiveIntegerField(blank =False)
    date = models.DateTimeField(auto_now_add=True)
    person = models.ForeignKey(User,related_name="expenses",on_delete=models.CASCADE,null=True)


