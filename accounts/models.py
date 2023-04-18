from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

# Create your models here.
class User(AbstractUser):
   pass

class Profile(models.Model):
   user = models.OneToOneField(
       settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
   avatar = models.ImageField(upload_to='profiles/')
   display_name = models.CharField(max_length=255)
#targets the instance of ‘user’ from AUTH_USER_MODEL we created in settings.py,
#do NOT target the class we created of ‘User’ directly 
   def __str__(self):
       return self.user.username