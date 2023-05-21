from django.db import models
from django.conf import settings

# Create your models here.


class Blog(models.Model):

    title = models.CharField(max_length=255)
    message = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    text = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name
