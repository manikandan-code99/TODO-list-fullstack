from django.db import models
from django.conf import settings
from auth_jwt_app.models import User


# Create your models here.
class Feedback(models.Model):
    # date=models.DateTimeField(auto_now=True,default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date=models.DateField(auto_now=True)
    title= models.CharField(max_length=100,default="no title")
    message= models.TextField(blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    print("feed",user)
    
