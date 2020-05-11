from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Income(models.Model):

    source = models.CharField(max_length=200)
    amount = models.PositiveIntegerField()
    date = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=250)
    person = models.ForeignKey(User,related_name="incomes",on_delete=models.CASCADE,null=True)