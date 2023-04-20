from django.db import models
from django.conf import settings

# Create your models here.


class Blog(models.Model):

    title = models.CharField(max_length=255)
    message = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.text
